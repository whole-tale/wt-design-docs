Frontend API and usage flow
===========================

Basic Architecture Diagram
--------------------------

![Frontend flow](WholeFlow.png)

Notes
-----

Following design plan conforms to [OpenAPI ver 2.0](http://swagger.io/specification/http://swagger.io/specification/)
specification.

Objects
-------

* common definitions

  ```yaml
  containerConfig:
    type: object
    description: Set of parameters required to instantiate a Tale
    properties:
      port:
        type: integer
      command:
        type: string
      cpuShares:
        type: string
      memLimit:
        type: string
      user:
        type: string
  containerInfo:
    type: object
    description: Set of properties of an instantiated Tale
    properties:
      created:
        type: date
      containerId:
        type: string
      mountPoint:
        type: string
  ```

* recipe

  ```yaml
  id: recipe,
  type: object,
  description: Object representing data required to build an Image.
  required:
  - _id
  - name
  - url
  - commitId
  - tag
  properties:
    _id:
      type: string
      description: unique identifier
    name:
      type: string
    description:
      type: string
    url:
      type: string
      description: >
        a URL of an external vcs repository containing all the data
        required to build an image.
    commitId:
      type: string
      description: An immutable commit identifier
    tag:
      type: string
      description: >
        A human readable identification of the Recipe.
      default: latest
    parentId:
      type: string
      description: ID of a previous version of the Recipe
  ```

* image

  ```yaml
  id: image,
  type: object,
  description: Object representing a WT Image.
  required:
  - _id
  - fullName
  - status
  - recipeId
  - digest
  - tag
  - parentId
  properties:
    _id:
      type: string
      description: internal unique identifier
    name:
      type: string
      description: A user-friendly name
    fullName:
      type: string
      description: >
        An image name following docker format:
        namespace/repository(@digest)
    description:
      type: string
    config:
      $ref: '#/definitions/containerConfig'
      description: Default container configuration.
    recipeId:
      type: string
      description: A recipe used to build the image.
    digest:
      type: string
      description: >
        Checksum of a successfully built image that can be used to
        pull a specific version of the image.
    tag:
      type: string
      description: >
        A human readable identification of the Image.
      default: latest
    parentId:
      type: string
      description: ID of a previous version of the Image
    status:
      type: string
      default: unavailable
      description:
      enum:
      - invalid
      - unavailable
      - building
      - available
  ```

* tale

  ```yaml
  id: tale,
  type: object,
  description: Object representing a Tale.
  required:
  - _id
  - folderId
  - imageId
  properties:
    _id:
      type: string
      description: internal unique identifier
    name:
      type: string
      description: A user-friendly name
    description:
      type: string
    imageId:
      type: string
      description: ID of a WT Image used by the Tale
    folderId:
      type: string
      description: ID of a data folder used by the Tale
    config:
      $ref: '#/definitions/containerConfig'
      description: Container runtime configuration.

  ```

* instance

  ```yaml
  id: instance,
  type: object,
  description: Object representing a WT Instance.
  required:
  - _id
  - taleId
  - containerInfo
  - lastActivity
  - url
  - status
  properties:
    _id:
      type: string
      description: internal unique identifier
    userId:
      type: string
      description: ID of the owner
    taleId:
      type: string
      description: ID of a Tale the Instance
    containerInfo:
      $ref: '#/definitions/containerInfo'
      description: Equivalent to the output docker inspect
    lastActivity:
      type: date
      description: Time when the Instance was last accessed
    name:
      type: string
      description: A user-friendly name
    url:
      type: string
      description: URL allowing to access the Instance
    status:
      type: string
      default: inactive
      description: Status
      enum:
      - starting
      - running
      - paused
      - failed
      - inactive
  ```

Implementation Notes
--------------------

API
---

* `GET /recipe`

  ```yaml
  /recipe:
    get:
      summary: Returns all recipes from the system that user has access to
      description: tbd
      operationId: getRecipes
      produces:
      - application/json
      responses:
        '200':
          description: A list of recipes
          schema:
            type: array
            items:
              $ref: '#/definitions/recipe'
        '403':
          description: Read access was denied on the parent recipe
      parameters:
      - name: parentId
        in: query
        description: Search all descendants of the recipe with this parentId
        required: false
        type: string
      - name: text
        in: query
        description: Perform a full text search for recipe with matching name or description.
        type: string
      - name: limit
        in: query
        default: 50
        description: Result set size limit.
        type: integer
      - name: offset
        in: query
        default: 0
        description: Offset into result set.
        type: integer
      - name: sort
        in: query
        description: Field to sort the result set by.
        default: lowerName
        type: string
      - name: sortdir
        in: query
        description: Sort order: 1 for ascending, -1 for descending.
        default: 1
        type: integer
        enum:
        - -1
        - 1
    post:
      ...
  ```

* `/recipe/{}`

  ```yaml
  /recipe:
    get:
      summary: Get a recipe by ID.
      description: tbd
      operationId: getRecipeByID
      produces:
      - application/json
      responses:
        '200':
          description: A selected recipe
          schema:
            $ref: '#/definitions/recipe'
        '403':
          description: Read access was denied for the recipe.
        '400':
          description: ID was invalid
      parameters:
      - name: id
        in: path
        description: ID of the recipe to get
        required: true
        type: string
    put:
      summary: Edit a recipe
      description: Modify mutable attributes of a recipe, such as: name, tag, description.
      operationId: updateRecipeByID
      produces:
      - application/json
      responses:
        '200':
          description: Success
        '403':
          description: Read/write access was denied for the recipe.
        '400':
          description: ID was invalid
      parameters:
      - name: id
        in: path
        description: ID of the recipe to modify
        required: true
        type: string
      - name: name
        in: query
        description: Name of the recipe
        type: string
      - name: description
        in: query
        description: Description for the recipe
        type: string
      - name: tag
        description: A human readable identification of the Recipe.
        default: latest
        in: query
        type: string
    post:
      summary: Creates a copy of a recipe
      description: Creates a copy of a recipe preserving original URL.
      operationId: copyRecipe
      produces:
      - application/json
      responses:
        '200':
          description: Success
        '403':
          description: Read/write access was denied for the recipe.
        '400':
          description: ID was invalid
      parameters:
      - name: id
        in: path
        description: ID of the recipe to copy
        required: true
        type: string
      - name: name
        in: query
        description: Name of the recipe
        type: string
      - name: description
        in: query
        description: Description for the recipe
        type: string
      - name: tag
        description: A human readable identification of the Recipe.
        default: latest
        in: query
        type: string
      - name: commitId
        type: string
        description: An immutable commit identifier
        in: query
  ```

Restructure the frontend creation API to use the following methods:

* /recipe - create a recipe for making an image
* /image - describes a docker image
* /tale - combination of image, config info and data
* /instance - an instance of the resulting tale.

TODO
----

* What happens to a recipe when the parent is removed?

Frontend API and usage flow
===========================

Basic Architecture Diagram
--------------------------

![Frontend flow](WholeFlow.png)

Notes
-----

Following design plan conforms to [OpenAPI ver 2.0](http://swagger.io/specification/)
specification.

In order to launch interactive viewer of an API please do the following:

```bash

pip install -r mockup_frontend/requirements.txt --user
cd mockup_frontend
gunicorn -b 0.0.0.0:8001 main:api --reload -w 1 --threads 1

```

Then navigate your web browser to [http://localhost:8001/v1/u1/](http://localhost:8001/v1/u1/).

Implementation Notes
--------------------

##### `tags` attribute in `Image` and `Recipe`

Tags are human readable identifiers of a given Recipe (similar to git tag / hg bookmark) or Image (equivalent to docker
tag). A single Recipe or Image may have multiple tags. A single tag cannot be assigned to more than one Recipe or Image.
Tags assigned to Recipes are completely independent from tags assigned to Images. There is special a tag: *latest* that:

 * for recipes corresponds to a single, most recent recipe from a set of recipes with the same value of the `url` attribute
 * for images corresponds to a single, most recent image from a set of images with the same value of the `fullName`
   attribute
 * cannot be set by the user

Since recipes and images cannot be removed right now, their number will quickly grow. In most case users will only be
interested in *latest* one. However, UI should allow browsing through recipes/images with a common ancestry.

##### `public` attribute

`public` attribute needs to be propagated to all ancestors (Tale -> Image -> Recipe and folders).

##### `published` attribute

Once a tale is `published` its ancestors cannot be deleted. `published` attribute cannot be set back to `false`.

##### `POST /tale`

A pair of `imageId` and `folderId` parameters or `instanceId` parameter must be provided. When `instanceId` is provided
it takes precedence over `imageId`, `folderId` and `config` query parameters.


TODO
----

Questions
---------

* What happens to a recipe when the parent is removed? (It's not allowed to remove recipe right now)

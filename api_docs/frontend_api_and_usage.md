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

### `tags` attribute in `Image` and `Recipe`

Tags are human readable identifiers of a given Recipe (similar to git tag / hg bookmark) or Image (equivalent to docker
tag). A single Recipe or Image may have multiple tags. A single tag cannot be assigned to more than one Recipe or Image.
Tags assigned to Recipes are completely independent from tags assigned to Images. There is special a tag: *latest* that:

 * for recipes corresponds to a single, most recent recipe from a set of recipes with the same value of the `url` attribute
 * for images corresponds to a single, most recent image from a set of images with the same value of the `fullName`
   attribute
 * cannot be set by the user

TODO
----

Restructure the frontend creation API to use the following methods:

* /recipe - create a recipe for making an image
* /image - describes a docker image
* /tale - combination of image, config info and data
* /instance - an instance of the resulting tale.

Questions
---------

* What happens to a recipe when the parent is removed?

Girder side
-----------

* New plugin: (owncloud)
  * Plugin settings:
    - Allow to generate RSA key pair that will identify current Girder instance (GIRDER_RSA)
    - Allow to specify RSA public key of PASS_KEEPER by either url or textarea (pem format) (PASS_KEEPER_RSA_PUB)
    - Allow to specify PASS_KEEPER's URL
  * Functionality:
    - After a _user_ is created in Girder, generate random password specificaly for owncloud (OCPASS), store it 
      using _password_ model. Retroactively perform this action for existing users.
    - Extend _user_ model with OCPASS
    - Provide convenient access to the OCPASS in the user settings view, add 'show me' button similarly to API keys implementation
    - Allow user to change OCPASS in the user settings view
    - Every time password is created / modified, trigger an event (OCPASS_EVENT)
    - Expose Girder's public part of GIRDER_RSA through the web API (GIRDER_RSA_ENDPOINT) 
    - Upon OCPASS_EVENT send asymmetrically encrypted credentials to PASS_KEEPER (definition below)
  
Owncloud side
-------------

* run Owncloud with PAM auth backend
* run a thin webservice that's able to add users and modify their pass within the container (could be expanded to 
  external LDAP), all those accounts are *local* and *disposable* (PASS_KEEPER)

PASS_KEEPER will:

* create/modify local PAM user every time it receives encrypted credentials from Girder instance
* expose public part of PASS_KEEPER_RSA through web API endpoint
 
Other services
--------------
By other service we mean services with API key access to Girder, e.g. volman.

* have direct access to user/password through Girder REST API
 
Frontend side
-------------
* volman creates composite fs: owncloud (mounted with user/pass) and girderFS
* volman mounts it inside container as before
* OCPASS is not stored in the container at any time.

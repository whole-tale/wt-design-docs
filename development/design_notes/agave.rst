.. agave:

Testing Agave Integration
=========================
This guide will explain how to test importing external data from Agave into a Tale. This guide is meant for testing these 3 PRs:

- Agave OAuth https://github.com/whole-tale/girder/pull/5
- Agave Data Import Provider https://github.com/whole-tale/girder_wholetale/pull/331
- Agave Access Token Added to Requests https://github.com/whole-tale/girder_wt_data_manager/pull/43

Prerequisites
~~~~~~~~~~~~~
- Girder Administrator Privileges
- An account and a Client ID and Client Secret pair on the DesignSafe or CyVerse Agave tenant
- A DOI or Agave URL accessible to the account mentioned above
    - Examples:
        - doi:10.17603/ds2-yxjv-5a15
        - https://www.designsafe-ci.org/data/browser/public/designsafe.storage.published//PRJ-2280

Registering Agave Tenant
~~~~~~~~~~~~~~~~~~~~~~~~
The first step requires the role of administrator in Girder.

     .. figure:: agave/RegisteringAgaveTenant.png
          :align: center

- Log into girder as **admin**
- Click on **Admin console**
- Click on **Plugins**
- Click on the cog next to the **OAuth2 login** plugin
- Expand the Agave tenant you wish to test
- Enter client ID and client secret
- Click **save**

Log into Whole Tale using Agave account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Modify **src/dashboard/config/environment.js**
    - Within the **if (environment === 'production')** block:
        - Change **ENV.authProvider = 'Globus';**
        - to **ENV.authProvider = 'DesignSafe';** or **ENV.authProvider = 'CyVerse';**
- On the Whole Tale dashboard, click **Access Whole Tale**. If the code change is live then you should see OAuth login screen for your respective tenant INSTEAD of Globus.

     .. figure:: agave/DesignSafeOAuthLogin.png
          :align: center

- Enter credentials and click **Log In**

Link Data Source
~~~~~~~~~~~~~~~~
- Once logged into Whole Tale using an Agave OAuth account
- Click on the **Manage** tab
- Click on the + sign next to Data
- Enter DOI or Agave URL and click **Search**

     .. figure:: agave/LinkDataSources.png
          :align: center

- Click **Register**

Import Data into Tale
~~~~~~~~~~~~~~~~~~~~~
- Click on the **Browse** tab
- Hover over your tale and click **View**
- Click on the **Files** tab
- Click **External Data**
- Click on the + sign
- Select the folder you just added from the data source
- Click **Add Selected** followed by **Select**

     .. figure:: agave/ImportDataIntoTale.png
          :align: center

Run Your Tale and Access a File
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Run your tale
- Make sure your container is started
- Click on the **Interact** tab
- Click on the **New** dropdown and select **Terminal**
- In the terminal, run **cd ../data** and then run **ls**
- The folder you imported from the data source should show up here
- **cd** into the directory and run **ls**
- Run **head FILENAME** on a text file
- If all went well, you should see a snippet of the beginning of the file you used

     .. figure:: agave/AccessAFile.png
          :align: center
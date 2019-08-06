.. agave:

Testing Agave Integration
=========================
This guide will explain how to test importing external data from Agave into a Tale. This guide is meant for testing these 3 PRs:

- Agave OAuth https://github.com/whole-tale/girder/pull/5
- Agave Data Import Provider https://github.com/whole-tale/girder_wholetale/pull/331
- Agave Access Token Added to Requests https://github.com/whole-tale/girder_wt_data_manager/pull/43

Prerequisites
~~~~~~~~~~~~~
- Girder administrator account
- An account and a client ID and client secret pair on the DesignSafe or CyVerse Agave tenant
- A DOI or Agave URL readable by the account mentioned above
    - Examples:
        - doi:10.17603/ds2-yxjv-5a15
        - https://www.designsafe-ci.org/data/browser/public/designsafe.storage.published//PRJ-2280

Registering Agave Tenant
~~~~~~~~~~~~~~~~~~~~~~~~
- Log into girder as **admin**
- Click on **Admin console**
- Click on **Plugins**
- Click on the cog next to the **OAuth2 login** plugin
- Expand the Agave tenant you wish to test
- Enter client ID and client secret
- Click **save**

     .. figure:: images/agave/RegisteringAgaveTenant.png
          :align: center
          
Log into Whole Tale using Agave OAuth account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Modify **src/dashboard/config/environment.js**
    - Within the **if (environment === 'production')** block:
        - Change **ENV.authProvider = 'Globus';**
        - to **ENV.authProvider = 'DesignSafe';** or **ENV.authProvider = 'CyVerse';**
- Make sure changes propagate
- On the Whole Tale dashboard, click **Access Whole Tale**. If the code change is live then you should see OAuth login screen for your respective tenant INSTEAD of Globus.
- Enter credentials and click **Log In**

     .. figure:: images/agave/DesignSafeOAuthLogin.png
          :align: center

Link Data Source
~~~~~~~~~~~~~~~~
- Once logged into Whole Tale using an Agave OAuth account
- Click on the **Manage** tab
- Click on the + sign next to Data
- Enter DOI or Agave URL and click **Search**
- Click **Register**

     .. figure:: images/agave/LinkDataSources.png
          :align: center

Import Data into Tale
~~~~~~~~~~~~~~~~~~~~~
- Click on the **Browse** tab
- Hover over your tale and click **View**
- Click on the **Files** tab
- Click **External Data**
- Click on the + sign
- Select the folder you just added from the data source
- Click **Add Selected** followed by **Select**

     .. figure:: images/agave/ImportDataIntoTale.png
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

     .. figure:: images/agave/AccessAFile.png
          :align: center

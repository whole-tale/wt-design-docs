# Test Plan

Note: For all tests, repeat for supported browser/OS combinations.

Preconditions:
* Clear browsing history or open incognito/private session

### Authentication

* [ ] Basic login flow
1. Goto https://dashboard.wholetale.org
1. Select "Access Whole Tale" button. You should be prompted to login via Globus Auth.
1. Select your organization and login 
1. You should be taken to the Browse page
1. Your Gravatar and user name should display


* [ ] Basic logout flow
1. Select the "Logout" button. You should be taken to the login page.
1. Select "Access Whole Tale" button. 
1. Note that you are not prompted to login. 
   1. Note PR [#331](https://github.com/whole-tale/dashboard/pull/331) for issues with logout
   1. Note issue [#384](https://github.com/whole-tale/dashboard/issues/384) for logout for Globus
1. Restart your incognito session
1. Select "Access Whole Tale" button.  You should be prompted to login via Globus Auth.


* [ ] Return-route for non-logged in users ([#300](https://github.com/whole-tale/dashboard/pull/300))
1. Logout from Whole Tale
1. Attempt to access  https://dashboard.dev.wholetale.org/run
1. You should be redirected to https://dashboard.dev.wholetale.org/login?rd=%252Frun
1. Select "Access Whole Tale".
1. You should be redirected to the Run page.


### Navigation

* [ ] General navigation
1. Select "Browse" button. Browse page should display
1. Select "Run" button. Run page should display
1. Select "Manage" button. Manage page should display
1. Select "Compose" button. Compose page should display
1. Select "i" button should open User Guide in new tab
1. Select "Logout" button should logout from WT
1. Select "Report a problem" button should open https://github.com/whole-tale/whole-tale/issues in new tab


### Browse

Preconditions:
* Assumes production Tales present (e.g., LIGO, materials, etc).
* No running instances


* [ ]  General
1. Select "Browse" button. Confirm browse page displays
1. Confirm "i" button opens https://wholetale.readthedocs.io/en/stable/users_guide/browse.html 
1. Confirm "fullscreen" button opens Browse panel in fullscreen 
1. Confirm no tales in "Launched Tales" panel


* [ ] Search
1. Enter "Ligo" as search term. Confirm only LIGO tale displays
1. Clear search term. Confirm all tales display


* [ ] Filter
1. Confirm filter dropdown is disabled 
1. Select "Filter" icon. Confirm that filter dropdown is enabled
1. Select "All". Confirm that all tales are displayed
1. Select "Mine". Confirm that only your tales are displayed
1. Select "Published". Confirm that only published tales are displayed (no tales) 
1. Select "Recent". (What is supposed to happen here?)
1. Select Run then Browse. Note that selection is not retained.


* [ ] List and card views
1. Select "Switch to list view". Confirm list view displays
1. Select "Switch to card view". Confirm card view displays
1. Select Run then Browse. Note that selection is not retained.


* [ ] View tale
1. Select "View" button on LIGO Tale
1. Confirm View page displays
1. Confirm that you cannot delete or edit Tale properties
1. Select Back button. Confirm that you are taken back to Browse page
1. Select "View" button on Tale you own
   1. Confirm Delete button is present
   1. Confirm that you can edit Tale properties
   1. Select "Delete". Confirm that you are prompted to delete.
   1. Select "No" -- tale is not deleted
   1. Select "Yes" -- tale is deleted and you are retured to Browse view


* [ ] Launch instance
1. Select "Launch" button on "Ligo" tale
   1. Confirm that tale appears in "Launched Tales" panel
   1. Confirm spinner displays until Tale is ready
   1. Confirm "Tale Launched" notification displays on Tale card
   1. Confirm that then the instance is started and can be selected in the Launched Tales panel
1. Select "X" to delete the instance 
   1. Confirmation dialog displays.  
   1. Select "No" -- instance is not deleted 
   1. Select "Yes" -- instance is deleted
1. Select "Launch" button on  Tale you own
   1. After the instance is launched, try to delete the Tale  (not instance)
   1. Confirm cannot Delete Tale message displays
   1. After instance has started, select the instance in the Launched Tales panel
   1. Confirm that you are taken to the Run > Interact page for the instance
1. Select "Launch" on the already-launched instance
   1. Confirm "The Tale...has been Launched!" message displays"
   1. Select "Go to Tale". Confirm that you are taken to the Run > Interact page. 


### Manage

Preconditions
* Empty home directory
* No registered data


* [ ] Register General
1. Select Manage > Data > "+" to open register panel
1. Confirm list of providers matches list of supported providers (Globus, DataONE, Dataverse)


* [ ] Register DataONE data
1. Select Manage > Data tab
1. Select "+". Confirm "Search for Data Sources" modal displays
1. Search for DOI `10.5065/D6862DM8`
1. Confirm "Humans and Hydrology" dataset is found on DataONE.
1. Select Register
1. Confirm dataset appears in Manage Data list
1. Confirm additional URL formats:
   1. https://search.dataone.org/view/doi:10.5063/F1Z60M87
   1. https://search.dataone.org/view/https://pasta.lternet.edu/package/metadata/eml/knb-lter-nwt/115/1
   1. https://search.dataone.org/view/doi:10.18739/A2CN6XZ7H
   1. https://raw.githubusercontent.com/whole-tale/dashboard/master/.travis.yml


* [ ] Dataverse
1. Register dataset doi:10.7910/DVN/SZ9YXZ
1. Confirm "Replication Data for: Direct Democracy and Women's Political Engagement" from Dataverse


* [ ] Globus/MDF
1. Confirm DOI resolution for http://dx.doi.org/doi:10.5072/FK2KW5FG4W results in https://publish.globus.org/jspui/handle/ITEM/607
1. Register dataset https://publish.globus.org/jspui/handle/ITEM/607

### Compose 

* [ ] Compose RStudio Tale
1. Select Compose. Confirm Compose page displayed with Launch New Tale button disabled.
1. Enter title "Test Tale"
1. Select compute environment RStudio
1. Select "Launch New Tale"
1. Launching new Tale spinner displays
1. After instance is started, you are redirected to Run page for instance

* [ ] Compose Jupyter Tale

* [ ] Compose OpenRefine Tale

* [ ] Too many instances


### Run 

Preconditions:
* No running Tale instances

* [ ] General
1. Go to the Run page
1. Confirm "Choose from Launched Tales panel" displays   
1. Confirm no Tales in Launched Tales panel
1. Launch the Ligo Tale and wait for instance to start
1. Select the "Run" Menu.  
   1. Confirm LIGO Tale instance is displayed in Run and Launched Tale panels
   1. Confirm Run panel displays Tale icon, title, and author
1. Confirm Run page displays Interact, Files, Metadata tabs
1. Select "..." menu. 
   1. Read the docs displays https://wholetale.readthedocs.io/en/stable/users_guide/run.html
   1. Confirm fullscreen displays Run panel in full screen

* [ ] Interact tab
1. Select the "Interact" tab
1. Confirm Jupyter environment is displayed in iframe 
1. Select "popout" icon.  Confirm Jupyter is opened in new Tab
  
* [ ] Files tab
1. Select "Files" tab
1. You should see a vertical navigation menu with three tabs: "Home", "External Data", and "Tale Workspace".

* [ ] Metadata tab
1. Select "Metadata" tab
1. Confirm that metadata displays for current tale
1. If you do not own or cannot edit the Tale, the form should be read-only
1. If you own the Tale `Date Created`, `Last Updated`, and `Authors` should  be read-only
1. Valid environments should be listed in the form dropdown for `Environment`
1. Change the name of the Tale, Category, Description, Illustration and Public
1. Refresh the page. Your changes should be preserved between page refreshes, confirming that they are being properly persisted. 
1. Select Save.  Confirm changes are saved.

* [ ] Home
1. Select Files > Home. Confirm that your home directory displays
1. Create a folder and upload a file to the folder
1. Confirm file operations:
   1. Copy, rename, remove, download

* [ ] External data
1. Precondition: Register one or more Datasets (e.g. `doi:10.18739/A29G5GD0V`) on Manage > Data (see Manage > Register test cases above)
    * NOTE: You may need to wait for registration to complete
1. Confirm "External Data" list is initially empty
1. Confirm (+) button ("Select Data modal") behavior
    1. Confirm that "WholeTale Catalog" shows all registered datasets
    1. Confirm that "My Data" filters to only show your registered datasets
    1. "Add" data to associate it with a Tale
    1. "Remove" data to dissociate it with a Tale
    1. "Select" saves your changes back to the server
    1. "Cancel" aborts the operation without saving and reverts your changes
1. Confirm "External Data" list matches what was saved

* [ ] Workspaces
1. Confirm create folder
1. Confirm rename folder/file
1. Confirm upload file
1. Confirm copy file/folder from/to Home
1. Confirm move file/folder from/to Home
1. Confirm remove file/folder
1. Select "+" button has options "New folder", "Upload file", "Select Data"
1. Folder operations
   1. Confirm context menu Move To, Rename, Copy to Home, Download, Remove
   1. Move To... 
      1. Issue -- should this be enabled 
   1. Confirm rename folder
   1. Copy to Home confirm folder copied to home
   1. Confirm download -- zip file 
   1. Confirm remove
1. File operations
   1. Upload a file
   1. Confirm context menu Move To, Rename, Copy to Home, Download, Remove
   1. Move To... Home?
      1. Issue -- doesn't work
   1. Confirm rename folder
   1. Copy to Home confirm folder copied to home
   1. Confirm download 
   1. Confirm remove
1. Select "Select Data..."
   1. Note vertical navigation with Home and Tale Workspaces
   1. Copy to Workspace from Home 
   1. Move to Workspace from Home
   1. Copy to Workspace from another workspace 
   1. Move to workspace from another workspace

### Analyze in Whole Tale

### Regression tests

* [ ] Internal-state problems ([#326](https://github.com/whole-tale/dashboard/pull/326))
1. Open a non-incognito browser tab, log into the UI and navigate to the `/manage` view
1. Create a folder (e.g. `test123`) and click down into it
1. Open an incognito browser tab, login to the UI again, and navigate to the `/manage` view
1. In the incognito tab, delete the `test123` folder and close the incognito tab
1. Refresh your non-incognito browser tab
  1. You should **not** be stuck on a blue screen
  1. You should **not** need to manually refresh the page
  1. You should be taken to the `/manage` view of your Home folder
  1. NOTE: Your last refresh may take a couple of seconds longer than usual

* [ ] Invalid instance ID ([#333](https://github.com/whole-tale/dashboard/pull/333))
1. Manually change the path suffix in the address bar to `/run/ThisIsObviouslyNotARealID`
1. You should be brought to `/browse` page instead

.. _admin-monitoring:

Monitoring
==========

Whole Tale system monitoring is implemented using the Open Monitoring Distribution (OMD). 
Monitoring of development and production systems is supported by NCSA's ISDA group. 
The OMD instance can be accessed using NCSA credentials:

https://gonzo-nagios.ncsa.illinois.edu/WT

Adding Users
------------

The WT OMD tenant is configured to use NCSA LDAP for authentication. Users in the grp_wtops LDAP group 
have access to OMD.  Users outside of NCSA can be added via the "Users" menu.

Hosts and Host Groups
---------------------

Hosts are organized into Host Groups based on deployment.  We currently have host groups for the production, 
development, and staging deployments. 

Notifications
-------------

Notifications are currently configured to be sent in bulk based on deployment.  All notifications
within a 5 minute period will be sent in a single bulk email.

Check_MK Agent
--------------

WT uses a custom Check_MK agent. Docker image and definition are available from:

- https://github.com/whole-tale/check_mk
- https://hub.docker.com/r/wholetale/check_mk/

The agent implements four custom checks:
- `check-celery` - confirms celery_worker is running on all nodes
- `check-nodes` - confirms nodes are in ready state
- `check-services` - confirms that expected docker services are running
- `check-tale` - confirms a tale can be launched and stopped on the system

Installation
------------

The monitoring stack is installed as part of the Terraform deployment process. The Check_MK agent is deployed as a global docker service.

Slack Ingration
---------------

Check_MK notifications are also sent to the Whole Tale #alerts channel.  Configuring Slack integration required the following steps:

On Slack:
- Create new app https://api.slack.com/apps with name "Check_MK"
- Activate incoming webhooks
- Copy the service ID from the webhook URL which should have the form TXXXXXXXX/BXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX

On OMD:
- Go to Notifications page
- Select "New Rule"
- Under "Notification Method" select "CMK-Slack Websocket integration"  
- Enter the above service ID as the first parameter and the channel (without #) as the second
- Save and activate

To test (from https://mathias-kettner.com/checkmk_flexible_notifications.html#Testing%20and%20Debugging)
- Go to "All Services" page
- Select "HTTP Dashboard" service
- Select "Commands" (hammer) button
- Next to "Custom notification" select "Send"
- Confirm

This should send a test via both email and Slack.





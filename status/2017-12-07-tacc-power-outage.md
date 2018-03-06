2017-12-08: TACC Power Outage
==============================

Summary
--------------------

On Thursday 12/8/2017 at 8:30pm CST, TACC experienced a power outage that impacted most compute hosts.  All instances were stopped and restarted, but a networking problem remained unresolved.  From 12/8 - 12/12/2017, VM instances on TACC's Jetstream service were unable to communicate via private network.  During this period all production Whole Tale services were unavailable.  The problem was resolved on 12/12/2017 with user errors continuing to be reported into 12/14/2017.

Outcomes
--------------------

* Improved monitoring of production services
* Addition of Celery-specific monitoring

Timeline
--------------------

All times central.

2017-12-08 2:45pm
^^^^^^^^^^^^^^^^^


We recognized that problems caught by monitoring on NDS (non-Whole Tale) services hosted at Jestream may also be impacting Whole Tale services.  Confirmed problem existed but had not been reported due to misconfiguration of monitoring system.  The basic symptom is that systems are accessible via external IP but cannot communicate via internal IP in OpenStack. Updated existing ticket with XSEDE related to ongoing networking issues.

2017-12-08 4pm
^^^^^^^^^^^^^^^^^

Received confirmation from XSEDE related to networking problem:

`Unfortunately last night around 8:30 there was a power outage that affected most of the compute hosts, so all instances were stopped and restarted about an hour later. It looks like you have 4 hosts up now, and all of them are reachable publicly but not via the private net. I have seen similar issues before but never found a root cause...something is clearly pretty wrong with Neutron (the network service). I'm trying some things that will hopefully clear it up. Stand by.`


2017-12-11 9:00am
^^^^^^^^^^^^^^^^^
Received official notice from XSEDE support:

`
Categories: Jetstream (IU/TACC)
Start time: 11 Dec, 2017 09:00 CST
End time: 11 Dec, 2017 10:00 CST
Posted on 11 Dec, 2017 14:18 UTC by Mike Packard
Due to a power outager on 12/8, some of Jetstream at TACC's network infrastructure is in a degraded state. 
There will be a an approximately 1-hour outage to update and reboot the system.
All Jetstream instances at TACC will be offline during the outage. The APIs and dashboard should continue to function.
`

Received update to XSEDE ticket:

`I'm doing some maintenance on the network stack this morning that should help with what you're seeing.`

2017-12-12 3:47pm
^^^^^^^^^^^^^^^^^
Update from XSEDE support:
`I have a possible workaround in the works but I'm applying it to some test instances first. I'll get back to soon.`

2017-12-12 4:37pm
^^^^^^^^^^^^^^^^^
Update from XSEDE support:
`I've also put all these on the same physical chassis; this seems to help.`

Confirmed that NDS and WT instances were operating as expected. Restarted WT services.

2017-12-14 1:00pm
^^^^^^^^^^^^^^^^^
Report from user that Dashboard is unavailable, caused by not restarting Celery service.


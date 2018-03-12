

Backup design notes
===================

Background:
* The MongoDB is currently backed up manually via mongodump and copied to an external resource (e.g., ytHub)
* The `terraform_deployment` process was modified to restore from backup if the URL was provided in `variables.tf`.  The idea behind this was to quickly deploy a new instance of the infrastructure with the latest user data -- for example, moving from Nebula to Jetstream. 
* If WT is intended to be an installable package, then the backup scenario should be flexible but also have a low bar.  For example, we don't want to require everyone to use Crash Plan or come up with their own custom solution. Ideally, we would provide a basic functional backup that is flexible enough for most scenarios.
* Initial discussions revolved around use of Box, since it is already resilient infrastructure, instead of trying to setup our own remote backup server.  It would certainly be possible to setup a VM at IU to handle backups to disk. DataOne is using [Bacula](http://blog.bacula.org/); NCSA ITS recommends Crash Plan to projects.
* Mongo is running in Docker Swarm and attached to the `wt_mongo` network.  Any backup implementation will need to be able to handle mongodump.

Requirements:
* Periodic (eventually nightly) backup of user and system data 
* Ability to restore from backup in the event of disaster recovery or when migrating/upgrading infrastructure
* Need to support backup and recovery for from multiple WT instances (i.e., dev/testing/production)
* Integration with monitoring/alert system (e.g., notifications if backup fails)
* Configurable retention policy (default: 1 week)

User/system data:
* User data is currently stored in MongoDB and the home directory mount on the fileserver node
* System data is primary stored in MongoDB. There are a few configuration files that might be useful to capture -- e.g., acme.json.
* Open question Do we need to backup any of the cached/registered user data?

Preliminary implementation:
* Uses [rclone](https://rclone.org/) a cloud-oriented rsync.  The user would supply an rclone configuration file during WT system installation. Unfortunately this requires interactive setup to get an oauth token, but the token is valid for 60 days.
* The backup process is containerized and includes both rclone and mongodump support see https://github.com/whole-tale/backup.
* Data and rclone config  is mounted into the container via `-v`.  The `backup.sh` script runs mongo dump, tar's the mounted directory, and copied to box under "WT/name/YYYYMMDD/"
* Nightly backups are handled via systemd timer.  A single timer will run backup nightly.
* Data is mounted into the container via `-v` flag along with rclone conf.
* The backup process runs on the WT fileserver for direct access to user directories.
* Initially home directories are tar'd, gzip'd and sync'd to box. Mongodump output is compressed. 



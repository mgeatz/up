# up

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

run `ember build production`

zip up the /dist folder

upload the zip file to S3 bucket upairway/ember

ssh into EC2 instance by running bash upair.sh script on physical machine

on EC2 box run the emberFromS3.sh script

type `A`

check website


### Server
host machine:

```
cd /Desktop
sudo bash upair.sh
```
EC2:
```
sudo bash emberDeploy.sh
cd /www/html/
sudo service httpd restart
```

~

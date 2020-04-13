# Introduce

Demonstrate how to dockerize Mongo

Power by:
[Clavin June - Medium.com](https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3)
[people.oregonstate.edu](http://people.oregonstate.edu/~chriconn/sites/docker_mongoDB/)

## Target

Dockerize Mongo

Interact with mongo-container. Exmpale: insert/update/delete record

Init data by providing a json file

Finaly, we add an UI for interact with Mongo instance, that is Mongo-Express

## Command Relevant

### Start a Mongo instance

```bash

$ docker run --name some-mongo -d mongo:tag //-> [some-mongo] is name of container, [tag] is version of mongo image

$ docker run -it --network some-network --rm mongo mongo --host some-mongo test //-> [some-network] provided if you want to connect this instance with other container

```

## Usage

### Connect via MongoDB Compass

```bash

// or user: hugo, have permission dbsample
mongodb://hugo:hugo@localhost:271020/?authSource=dbsample&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false7

// for user: root
mongodb://root:root@localhost:27020/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false

```


### Connect via Mongo-Express

```bash

http://localhost:8081

```

# 🐳 ***Docker - Complete Tutorial*** 
<!-- topics to be covered -->
- `Why do we need Docker?`
  - <h3 style="color: white;">🐳 Docker <span style="color: #58C3DC;" >Container</span></h3>
  
  `Virtual Machines` run inside a PHYSICAL computer  that runs an operating system and applications just like a physical computer. `VM` Runs on top of a `hypervisor` (`Hypervisor` is used to create multiple machines on a host operating system and it manages `virtual machines`.) like `VMware`. Basically A `Virtual Machine` emulates a full computer system on top of another system. 
  
  `One application on one server.`
 
  `Vmware` solved this problem - `virtual machines` (multiple application on one server (by this its mean - Instead of 10 physical servers → 10 `VMs`((running multiple kernels) each with their own OS and apps) running on 1 physical server)) - it required their own operating system which inturns need to dadicated.
    - i. **storage**(
       - i.i. **Security**: *Separate file systems prevent data leaks*, 
       - i.ii. **Backup**: *Individual VM backup and restore*, 
       - i.iii. **Flexibility**: *Different OS needs different file systems* 
       - i.iv. **Isolation**: *One VM crash doesn't affect others*), 
    - ii. **RAM**, 
    - iii. **CPU**, 
    - iv. **Network**(
      - iv.i. ***Portability***: *`VMs` can be moved between physical servers*).   

  - ## The Problem with Virtual Machines which solved by containers are
    - i. **`Heavyweight`**
      - i.i. *Each VM includes a full OS which needed*
        - *`storage`*
        - *`RAM`*
        - *`CPU`*
        - *`Network`*
    - ii. **`Storage Waste`**
      - ii.i *Each VM duplicates the same base OS files — lots of disk usage.*
    - iii. **`RAM`** 
      - *Running multiple `VMs` means running multiple kernels — consuming more system resources.*
    - iv. **`Poor Scalability`**
      - *Running 100 apps = 100 full OSes → too slow for cloud scale.*


- `What is Docker? [Container & Image]`
  - `Containers (A container encapsulates an application with its own operating environment.) like Docker, Kubernetes were created to solve those VM problems.`
  `A container doesn’t emulate an entire OS — it shares the same kernel with the host system`. `Docker is a FUNDAMENTAL part of DevOps`. *basically, it means is that it can run multple applications on one operating system on a single server*
  
  `DevOps = Development + Operations`
- `Docker vs Virtual Machine`
  - ![Containers(Its portable - it also make it possible for us to build different applications on different versions of the same technologies and of the same dependencies) and VM's](https://dev-to-uploads.s3.amazonaws.com/i/u9db0dc1lzep6affvkk6.jpeg)
  
  - `Previously A application needed its own server then VM came into the picture there each application needed multiple OS to run on single server now Docker has come to run multiple apllications on single OS in single server.`
  
  - > *Containers run on top of VM*

  <!-- <h3 style="color: white;"><span style="color: yellow;" >Docker</span> vs <span style="color: #58C3DC;" >Virtual Machines</span></h3> ![delta-image](delta-image.png) --> 

- `Docker Installation (Windows OS)`
  * `Docker`'s core technology was originally built for `linux` systems
  * To run `Docker` on `macOS` or `Windows`, the solution is to run a *lightweight* `Linux` `virtual machine (VM)` in the background.
  * `Docker` runs on either `hyper v` or `wsl i or ii`
<!-- - `Docker Installation (Mac OS)` -->

- `Image vs Container`
  - ![Containers ](https://dev-to-uploads.s3.amazonaws.com/i/3puuhxmfe85kcfxn0jtm.png)

  * `An image is a stack of read-only layers with instructions for creating a Docker container.` 
  * `A container is a runnable instance of an image.` 
  * `The -p flag` creates a bridge between two worlds: 
    - The `port` on your real computer (Windows, Mac, Linux).
    - And, The `port` the application inside the container is listening on.
      * `-p HOST_PORT:CONTAINER_PORT`
      - `HOST_PORT:` *Any port on your computer (like 3000).*
      - `CONTAINER_PORT:` *The `port` inside the container.*
    * `By default, a container's ports are isolated.`

  `Note:` *Containers cannot access host files by default.*

  > `STATUS - Created, Running, Exited, Up, Down, Paused`

<!-- https://hub.docker.com/_/ubuntu 
docker pull ubuntu
docker run --name loving_shannon -it ubuntu
mkdir folder_name
cd folder_name
ls
docker start loving_shannon
docker exec -it loving_shannon /bin/bash
docker run -it --name ubuntu -v D:/delta-docker/data:/test/data ubuntu # -v stands for volume to run and start
docker exec -it ubuntu /bin/bash # to get into the container
env
exit
-->
- `Docker Commands`
  - ## Docker <span style="color: rgb(0, 189, 228); ">Commands</span>
  - ```docker
    docker
    docker --version
    docker pull IMAGE_NAME # from the docker hub
    docker images # to enlist all the images in the   docker desktop
    docker run IMAGE_NAME # to create an container from an image.
    docker run -it IMAGE_NAME # -it = interactive terminal.
    docker run -d IMAGE_NAME # -d = de-attach.
    docker run --name COUT_CUSTOM_NAME -d IMAGE_NAME # to give a custom name rather than a random one
    docker run -d --name COUT_CUSTOM_NAME -p HOST_PORT:CONTAINER_PORT -e ENVIRONMENT_VARIABLE = VALUE IMAGE_NAME # -e stands for environment variable
    docker ps -a # includes Running and Exited both. 
    docker start CONT_NAME or CONT_ID # to start the existing container.
    docker stop CONT_NAME or CONT_ID # to stop the running container.
    docker rm CONT_ID # to remove the container.
    docker rmi IMAGE_NAME # to remove the image.
    ```   

- `Port Binding`
  - ## <span style="color: rgb(0, 189, 228); font-weight: 700;">Port Binding</span>
    * docker run `-p HOST_PORT:CONTAINER_PORT` IMAGE_NAME

- `Troubleshoot Commands` 
  - ## <span style="color: rgb(0, 189, 228);;">Troubleshooting</span> Commands
    * docker `logs` CONTAINER_ID 
  <!--  to check logs or configs without restarting it. -->
    * docker `exec` -it COUNT_ID /bin/bash
    <span style="color: green;">or</span>
    <!-- The docker exec command is for executing a command inside an already running container. -->
    * docker `exec` -it COUNT_ID /bin/sh 
<!-- when you exit or press Ctrl+D Only this shell ends → Container keeps running without is Main process ends → Container stops-->

- ## Use Case: <span style="color: rgb(0, 189, 228); font-weight: bold; ">Devloping with Docker</span>

- [`Docker Network`](https://docs.docker.com/engine/network/drivers/)
  - `Bridge` networks are default network that are used my a docker container that needs to communicate with other containers on the same host.
  <!-- basically connecting two container in a same network -->
  - `host` are used to make the container use the same network of the host machine. 
  <!-- Container uses host's IP address (networking) directly. No network isolation between container and host -->
  
  ```bash
  docker network ls
  docker network create NETWORK_NAME
  ```
- `Set up mongo & mongo-express`
- `Connect DB with Node App`

`Use:` <span style="color: rgb(0, 189, 228);">Devloping with Docker</span>
> set up `mongo` & `mongo-express`
- [mongo](https://hub.docker.com/_/mongo/)
<!-- Web GUI for MongoDB -->
- [mongo-express](https://hub.docker.com/_/mongo-express/) 

`Important note`: *When you run a MongoDB container without a volume, the data is stored inside the container's writable layer. If the container is removed, the data is lost.*

```bash
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=ROOT_USERNAME -e MONGO_INITDB_ROOT_PASSWORD=ROOT_PASSWORD --name mongo --network mongo-network mongo:4.4
```

<!-- Pentium G3258 doesnt have AVX which is need for MongoDB version 5.0 or above so for Pentium G3258 like processor we do MongoDB version 4.4.latest. -->

<!-- ```bash
-e ME_CONFIG_MONGODB_URL="mongodb://ROOT_USERNAME:ROOT_PASSWORD@MONGO_CONTAINER_NAME:27017/"
``` -->

<!-- final verdict -->
```bash
docker run -d -p 8081:8081 --name mongo-express --network mongo-network -e ME_CONFIG_MONGODB_ADMINUSERNAME=ADMINUSERNAME -e ME_CONFIG_MONGODB_ADMINPASSWORD=ADMINPASSWORD -e ME_CONFIG_MONGODB_URL="mongodb://ADMINUSERNAME:ADMINPASSWORD@mongo:27017/" mongo-express
```

`Note:` MongoDB connection strings use URL encoding: @ and # are problematic in connection strings

```
http://localhost:8081/
Username: admin
Password: pass
```

- `Docker Compose`
- `Use Case: Dockerizing our App`
- `Creating Dockerfile`
- `Publish Image on DockerHub`

## Docker <span style="color: #58C3DC;">Compose</span>
Docker Compose is a tool for defining and running multi-container applications.

# Docker Compose
```bash
- docker-compose -f fileName.yaml up -d
- docker-compose -f fileName.yaml down
```

## Use Case <span style="color: #58C3DC;">Dockerizing our App</span>

[dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/)

<!-- multiple run command can be there but only one cmd is to be there -->

```bash
docker build -t IMAGE_NAME:1.0.
```

## <span style="color: #58C3DC;">Publish Image</span> to Docker Hub

```bash
docker push IMAGE_NAME
```

- `Docker Volumes`
  - ## Docker <span style="color: #58C3DC;">Volume</span>
  - Volumes are `persistant` data stores for containers.

- `Volumes Commands`
  ```bash
  # it - interactive
  docker volume ls
  docker volume create VOLUME_NAME
  docker volume rm VOLUME_NAME
  docker volume prune # to remove all the volumes that are not in use. by default, prune commands only deletes anonymous volumes.
  
  docker run -v VOLUME_NAME:/CONTAINER_PATH IMAGE_NAME # if by default the named directory is not there it will create one.
  docker run -v MOUNT_PATH IMAGE_NAME# Anonymous volume
  docker run -v /HOST_PATH:/CONTAINER_PATH IMAGE_NAME # for e.g., docker run -it -v D:/delta-docker/data:/test/data ubuntu thhis is refer to as bind mount
  ```

- `Revisiting Docker Network`

`Linux` Commands
```bash
ls
cd  # empty to be shifted to root wherever in the path you are.
pwd
rm file_name # to remove the folder and its contents recursively.
```

<!-- mount is same as -v just the syntax is different 
docker run -d -p 3000:3000 --name node-app --mount type=volume,source=node-app-data,target=/app/data node-app:1.0.0 -->

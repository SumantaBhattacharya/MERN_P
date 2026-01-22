# 🐳 Docker

<h3 style="color: white;">🐳 Docker
  <span style="color: #58C3DC;" >Container</span>
</h3>

> `Virtual Machines` run inside a PHYSICAL computer  that runs an operating system and applications just like a physical computer. `VM` Runs on top of a `hypervisor` (`Hypervisor` is used to create multiple machines on a host operating system and it manages `virtual machines`.) like `VMware`. Basically A `Virtual Machine` emulates a full computer system on top of another system. 

> `One application on one server.` 
`Vmware` solved this problem - `virtual machines` (multiple application on one server (by this its mean - Instead of 10 physical servers → 10 `VMs`((running multiple kernels) each with their own OS and apps) running on 1 physical server)) - it required their own operating system which inturns need to dadicated 
- i. **storage**(
  - i.i. **Security**: *Separate file systems prevent data leaks*, 
  - i.ii. **Backup**: *Individual VM backup and restore*, 
  - i.iii. **Flexibility**: *Different OS needs different file systems* 
  - i.iv. **Isolation**: *One VM crash doesn't affect others*), 
- ii. **RAM**, 
- iii. **CPU**, 
- iv. **Network**(
  - iv.i. ***Portability***: *`VMs` can be moved between physical servers*).   

## The Problem with Virtual Machines which solved by containers are
- i. **Heavyweight**
  - i.i. *Each VM includes a full OS which needed*
      - ***storage***
      - ***RAM***
      - ***CPU***
      - ***Network***
- ii. **Storage Waste**
  - ii.i *Each VM duplicates the same base OS files — lots of disk usage.*
- iii. **RAM** 
  - *Running multiple VMs means running multiple kernels — consuming more system resources.*
- iv. **Poor Scalability**
  - *Running 100 apps = 100 full OSes → too slow for cloud scale.*

![Containers ](https://dev-to-uploads.s3.amazonaws.com/i/3puuhxmfe85kcfxn0jtm.png)

`Containers (A container encapsulates an application with its own operating environment.) like Docker, Kubernetes were created to solve those VM problems.`
`A container doesn’t emulate an entire OS — it shares the same kernel with the host system`. `Docker is a FUNDAMENTAL part of DevOps`. *basically, it means is that it can run multple applications on one operating system on a single server*

`DevOps = Development + Operations`

![Containers(Its portable - it also make it possible for us to build different applications on different versions of the same technologies and of the same dependencies) and VM's](https://dev-to-uploads.s3.amazonaws.com/i/u9db0dc1lzep6affvkk6.jpeg)

`Previously A application needed its own server then VM came into the picture there each application needed multiple OS to run on single server now Docker has come to run multiple apllications on single OS in single server.`

> *Containers run on top of VM*

`Docker runs on either hyper v or wsl i or ii`

## Docker <span style="color: rgb(0, 189, 228); ">Commands</span>

* docker pull IMAGE_NAME
* docker images
* docker run IMAGE_NAME
* docker run -it IMAGE_NAME
* docker stop CONT_NAME or CONT_ID
* docker start CONT_NAME or CONT_ID
* docker ps
* docker ps -a

```docker
docker
docker --version
docker pull IMAGE_NAME
docker images
docker run hello-world
docker ps -a # includes Running and Exited both
docker ps # includes Running containers only
docker run -it IMAGE_NAME # -it = interactive terminal
```

> `STATUS - Created, Running, Exited, Up, Down, Paused`

<!-- https://hub.docker.com/_/ubuntu -->

<!-- 

CI/CD

Continious Integration
Continious Delivery (Deployment)

CI/CD Tools:
Jenkins → Builds Docker images in pipelines
GitLab CI → Native Docker support
GitHub Actions → Docker container jobs

Orchestration:
Kubernetes → Manages Docker containers -->
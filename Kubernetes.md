# ***Kubernetes***
<!-- topics to be covered -->
- `What is Kubernetes?`
    - *it is a container orchestration system.*
    - F*eatures:*
        - i. *cloud agnostic.* 
        - ii. *high availability.* 
        - iii. *scalability.* 
        - iv. *reliability.*
- `Components - Node & Pod`
    - ![K8s_Components](K8s_Components.jpg)
- `Service & Ingress`
    - *Each pod gets a unique IP address.*
    ![K8s_Components-service](K8s_Components-service.jpg)
    ![K8s_Components-ingress](K8s_Components-ingress.jpg)
    - *`Ingress` - Expose services from outside the cluster.*
- `ConfigMap & Secret`
    - ![K8s_Components-ConfigMapandSecret](K8s_Components-ConfigMapandSecret.jpg)
      - *`ConfigMap` & `Secret` are used to store   non-code data.*
      - *`ConfigMap` stores configuration data in   key-value pairs.*         
      <!-- - ***use cases**: database credentials,   application configurations* -->
      - *`Secret` stores sensitive data like passwords, tokens,and keys in base64 encoded format.*
      <!-- ***use cases**: database credentials, API   keys, certificates* -->
      <!-- Both `ConfigMap` and `Secret` can be mounted as environment variables or volumes inside pods -->

- `Volumes`
   - ![K8s_Components-VOLUMES.jpg](K8s_Components-VOLUMES.jpg)
- `Deployment & StatefulSet`
   - ![K8s_Components-Deployment](K8s_Components-Deployment.jpg)
   - ![K8s_Components-StatefulSet](K8s_Components-StatefulSet.jpg)

   - `K8s Components`
      - *`Node`* <!-- worker machine in the clustor -->
      - *`Pod`* 
      - *`Service`*
      - *`Ingress`*
      - *`ConfigMap`*
      - *`Secret`*
      - *`Volumes`*
      - *`Deployment`*
      - *`StatefulSet`*
- `Kubernetes Architecture`
   - *`Master-Worker Model`*
        - *`Master Node`*
           - *`API Server`* 
            - *`Controller Manager`* <!-- controls the state of the cluster -->
            - *`Scheduler`* <!-- assigns pods to nodes -->
            - *`etcd`* <!-- key-value store for cluster state -->
        - *`Worker Node`*
            - *`Container Runtime`* <!-- Docker -->
            - *`Kubelet`* <!-- communicates with master node -->
            - *`kube-proxy`* <!-- manages network routing and forward requests -->
    - ![kubernetes-cluster-architecture](https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg)
- `Summary`
- `Local Setup - Minikube & Kubectl`
- `Installation`
- `Kubectl Commands [GET]`
- `CREATE Command`
- `Debugging Commands [LOGS & EXEC]`
- `APPLY Command`
- `YAML Configurations`
- `Status in Configuration`
- `Deploying mongo-app in K8s`
- `Configuring Mongodb`
- `Configuring Mongo Express`
- `Namespace in K8s`
- `Namespace Use cases`
- `Custom Namespaces`
- `Scope`
- `Kubens Installation`
- `Ingress in K8s`
- `Ingress Controller`
- `Configure app with Ingress`
- `Helm - Package Manager`
- `Helm chart structure `
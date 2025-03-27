# Kubernetes
El despliegue se gestiona en un clúster de Kubernetes utilizando Helm y ArgoCD.

### Pasos de despliegue:
1. Construcción de la imagen Docker.
2. Publicación en **Docker Hub**.
3. Aplicación de manifiestos de Kubernetes:
   ```sh
   kubectl apply -f deployment.yaml
   ```
4. Validación del estado del pod:
   ```sh
   kubectl get pods
   ```
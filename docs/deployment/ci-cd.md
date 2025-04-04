# CI/CD Pipeline
El flujo de integración y despliegue continuo está automatizado con **GitHub Actions** y **ArgoCD**.

### Flujo CI/CD:
1. **CI con GitHub Actions**:
   - Ejecución de pruebas unitarias.
   - Análisis de calidad con SonarQube.
2. **CD con ArgoCD**:
   - Construcción y despliegue en Kubernetes.
   - Monitoreo del estado de los pods.
# Troubleshooting
Solución de problemas comunes en el sistema.

### Errores frecuentes y soluciones:
- **El servidor no arranca**:
  ```sh
  ng serve --open
  ```
- **Error en la API**:
  - Revisar la configuración de CORS.
  - Verificar si el backend está en ejecución.
- **Fallos en el despliegue**:
  - Inspeccionar logs de ArgoCD con `argocd logs`.
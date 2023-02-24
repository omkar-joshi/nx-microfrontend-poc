# Nx micro-frontend example

## Architecture

![alt text](./nx-mfe-poc.png)

## Setup steps

- Clone the repo
- Run `yarn install`
- Run `yarn nx run container:serve --devRemotes=module1,module2,module3`
- Open http://localhost:4200/ in your browser

## Tests

- Run unit tests for a specific app - `yarn nx test <app-name>`
- Run all unit tests - `yarn nx run-many --all --target=test`
- Run E2E tests for a specific app - `yarn nx e2e container-e2e`
- Run all E2E tests - `yarn nx run-many --all --target=e2e`

## Features

- Built using Vite. Super fast builds
- Hot module replacement for good developer experience
- `shared-ui` library for common UI components
- `shared-util` library for common util functions
- Deployment and CI/CD setup with Github actions and Netlify
- API integration with a [mock
  API](https://63f5fee4ab76703b15b60449.mockapi.io/api/v1) to demonstrate the
  integration of micro-frontend modules with backend micro-services
- Auth and RBAC integration using [Auth0](https://manage.auth0.com/dashboard) to
  demonstrate cross cutting concerns
- Unit test setup using Jest and React-testing-library for each module
- E2E test setup using Cypress for each module
- Observability using Sentry to help with debugging

## Generators

<br />

### To create a new app and link it with the container

  ```
  yarn nx g @nrwl/react:remote <module-name> --host=container
  ```

<br />

### To create a new shared library

  ```
  yarn nx g @nrwl/react:lib <lib-name>
  ```

<br />

### To create a new component

  ```
  yarn nx g @nrwl/react:component <component-name> --project=<app-name>
  ```

# Ballymena Norstar Frontend

An Angular-based web application for Ballymena Norstar, providing information about the team, fixtures, and related content.

## Overview

This is a modern Angular application built with Angular 21+ that showcases team information and fixture management for Ballymena Norstar. The application features server-side rendering (SSR) support and is optimized for performance and accessibility.

## Features

- 🏠 **Home Page** - Team homepage with welcome information
- 📅 **Fixtures Page** - Display and manage team fixtures
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ♿ **Accessibility** - WCAG-compliant with proper ARIA labels
- 🚀 **Server-Side Rendering** - SSR support for improved performance and SEO
- 🎨 **Modern UI** - Clean, professional design with custom styling

## Project Structure

```
src/
├── app/
│   ├── core/                 # Core services and models
│   │   ├── models/
│   │   │   └── fixture.model.ts
│   │   └── services/
│   │       ├── api.service.ts
│   │       └── fixtures.service.ts
│   ├── features/             # Feature modules
│   │   ├── home/
│   │   │   └── home.component.*
│   │   └── fixtures/
│   │       └── fixtures.component.*
│   ├── shared/               # Shared components
│   │   └── components/
│   │       ├── header/
│   │       └── footer/
│   ├── app.routes.ts         # Routing configuration
│   └── app.component.*       # Root component
├── environments/             # Environment configurations
├── styles.css                # Global styles
├── main.ts                   # Client entry point
├── server.ts                 # Server entry point
└── index.html                # HTML template
```

## Prerequisites

- Node.js 18+ and npm
- Angular CLI 21+

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Norstar_Frontend
```

2. Install dependencies:
```bash
npm install
```

## Development Server

To start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

## Building

To build the project for production:

```bash
ng build
```

Build artifacts are stored in the `dist/` directory with optimization enabled.

### Building with Server-Side Rendering

To build with SSR support:

```bash
ng build
npm run build:ssr
```

## Running Tests

### Unit Tests

Run unit tests with Vitest:

```bash
ng test
```

### End-to-End Tests

Run end-to-end tests:

```bash
ng e2e
```

## Code Generation

Generate new components using Angular CLI:

```bash
ng generate component feature-name/component-name
ng generate service core/services/service-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

## Assets

Static assets are served from the `public/` directory. Place images, logos, and other static files here.

**Note:** The Norstar logo (`Norstarlogo.jpg`) is located in the `public/` folder and is referenced in the header component.

## Environment Configuration

Environment-specific variables are managed in `src/environments/`:

- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure tests pass
4. Submit a pull request

## Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Guide](https://angular.dev/tools/cli)
- [Vitest Testing Framework](https://vitest.dev/)

## License

This project is part of Ballymena Norstar.

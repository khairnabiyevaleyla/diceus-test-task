## Diceus Test Task – Underwriting Dashboard UI

This project is a React + Vite single-page application that implements an underwriting/insurance-style dashboard and accounts view.  
It focuses on modern UI, responsive layout, and reusable components built with SCSS modules.

### Tech stack

- **React 19** with functional components
- **React Router** for client-side routing
- **Vite** for dev/build tooling
- **SCSS modules** for component-scoped styling
- **Remix Icon** for iconography

### Project structure (high level)

- `src/main.jsx` – React entry, global styles and icons.
- `src/App.jsx` – Mounts the app router.
- `src/router.jsx` – Routes, with `Layout` as the main shell and pages for `dashboard`, `accounts`, and placeholder sections.
- `src/components/layout` – Header, footer, and layout shell.
- `src/components/pages/dashboard` – Dashboard page that renders `DashboardTemplate`.
- `src/components/pages/accounts` – Accounts page that renders `AccountsTemplate`.
- `src/components/templates/DashboardTemplate` – Main dashboard layout:
  - `DashboardCards` with cards like Market Intelligence, Portfolio Goals, Quick Actions, Work Queue.
  - `DashboardMyAccountsTable` with a responsive accounts table.
- `src/components/templates/AccountsTemplate` – Account detail layout:
  - `AccountHeader`, `Breadcrumbs`, `NeedsAttentionPanel`, `PerformanceMetrics`, `Policies`.
  - `AccountStatus` stepper and `ComplianceDocumentation` panel, both styled to match the provided design and responsive on mobile.
- `src/components/shared/components` – Reusable elements (`NavTab`, `SectionTitle`, `Table`, `TableActions`).
- `src/data` – Static JSON data used to drive templates and tables.

### Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   By default Vite serves on `http://localhost:5173` (or the next available port).

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview the production build**

   ```bash
   npm run preview
   ```

5. **Run lint**

   ```bash
   npm run lint
   ```

### Key UI behavior

- **Responsive layout**
  - Dashboard accounts table (`DashboardMyAccountsTable` + shared `Table`) is horizontally scrollable on smaller screens and tightens spacing for mobile.
  - `AccountStatus` stepper scrolls horizontally on mobile and scales down labels and circle size.
  - `ComplianceDocumentation` and other cards use flexible, card-based layouts that adapt to narrower viewports.

- **Data-driven components**
  - Dashboard and accounts views read from JSON files in `src/data`, which makes it easy to swap in real API data later.

### How to extend

- Add new sections/cards by creating components under `templates/DashboardTemplate` or `templates/AccountsTemplate` and wiring them into the respective template.
- Use SCSS modules for new components to keep styles scoped.
- For new routes, add entries to `src/router.jsx` and create a page component in `src/components/pages`.


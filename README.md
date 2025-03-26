# React Todo Application

**This is a React application built using Vite, TypeScript, React Router, Tailwind CSS, ESLint, and Prettier. It serves as a demonstration of modern frontend development practices, including routing, state management, data handling, and UI design.**

## Project Overview

This project demonstrates core React concepts and tools through a practical Todo application. Features include:

- **Multiple pages** (Home, About, Todos, Authentication)
- **Routing** with React Router
- **Global state management** using React Context and custom hooks
- **Type-safe components** leveraging TypeScript
- **Styling** with Tailwind CSS
- **Linting and code formatting** via ESLint and Prettier
- **Data persistence** using localStorage

Future planned expansions include authentication integration and backend connectivity.

## Technology Stack

- **React 19** with hooks and modern patterns
- **TypeScript** for type safety
- **Vite** for fast development and HMR
- **React Router v6** for routing and navigation
- **Tailwind CSS** for utility-first styling
- **ESLint** and **Prettier** for code quality and consistent formatting

## Installation

Clone the repository:

```bash
git clone git@github.com:yatkolenko/react-typescript-examples.git
cd react-typescript-examples
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src
├── components          # Shared reusable components
├── context             # Global state management
├── hooks               # Custom hooks
├── pages               # Application pages
├── routes              # Router configuration
├── services            # API calls and data handling
├── utils               # Utility functions
├── App.tsx             # Root component
├── main.tsx            # Entry point
├── index.css           # Tailwind integration
└── vite-env.d.ts       # Vite types
```

## Pages

- **Home** (`/`) - Landing page
- **Todos** (`/todos`) - CRUD interface for todo items
- **About** (`/about`) - Information about the project
- **Login/Register** (`/auth`) - Placeholder for authentication functionality

## Key Features

### React Router

Routing setup using React Router with nested routes and route parameters.

### State Management

State management is handled via React Context API with custom hooks to simplify state sharing across components.

### Persistent Storage

Data persistence using `localStorage` to mock backend behavior. Real backend integration will replace this functionality in the future.

### ESLint and Prettier

The project includes a strict ESLint and Prettier setup for automatic code formatting and linting, ensuring code quality and consistency.

### Tailwind CSS

Tailwind CSS is integrated to rapidly style components and pages, ensuring responsive and clean UI.

## Future Plans

- **Authentication:** Implement JWT-based authentication.
- **Backend Integration:** Connect the frontend to a RESTful API for data persistence and synchronization.
- **Deployment:** Deploy the application using platforms like Vercel, Netlify, or GitHub Pages.

## Scripts

- `npm run dev` - Run development server with hot-reloading.
- `npm run build` - Build the application for production.
- `npm run lint` - Run ESLint checks.
- `npm run format` - Automatically format the code using Prettier.

## License

This project is open-source and available under the MIT license.

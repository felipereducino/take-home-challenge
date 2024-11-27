# Take Home Challenge

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-darkblue)
![Axios](https://img.shields.io/badge/Axios-1.7.8-yellow)
![React Query](https://img.shields.io/badge/React%20Query-5.61.4-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.15-aqua)

## 📚 Project Overview

The **Take Home Challenge** is a front-end application designed to demonstrate proficiency in modern web development technologies. This project leverages React for building dynamic user interfaces, TypeScript for type safety, Axios for handling HTTP requests, and React Query for efficient data fetching and state management. It serves as a comprehensive example of creating a scalable and maintainable web application.

## 🚀 Features

- **Responsive Design:** Ensures compatibility across various devices and screen sizes.
- **Type Safety:** Utilizes TypeScript to prevent runtime errors and enhance code quality.
- **Efficient Data Management:** Implements React Query for optimized data fetching, caching, and synchronization.
- **API Integration:** Uses Axios to communicate with backend services seamlessly.
- **Testing & Coverage:** Includes robust testing suites to ensure application reliability.

## 🛠️ Dependencies

To run this project locally, ensure you have the following dependencies installed:

- **Node.js:** v18.x or higher

### Project Dependencies

- **React:** 18.2.0
- **TypeScript:** 4.9.5
- **Axios:** 1.4.0
- **React Query:** 4.28.0

## 🗂️ Project Architecture

The project follows a modular architecture for scalability and maintainability:

- **public/**: Contains the static `index.html` file.
- **src/**: Main source code directory.
  - **components/**: Reusable React components.
  - **hooks/**: Custom React hooks.
  - **pages/**: Page-level components representing different routes.
  - **services/**: API service configurations using Axios.
  - **context/**: Contexts providers.
  - **styles/**: Global and component-specific styles.
  - **tests/**: Test suites for components and utilities.
  - **App.tsx**: Root component integrating all parts of the application.
  - **index.tsx**: Entry point of the React application.
- **package.json**: Lists project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration.
- **README.md**: Project documentation.
- **yarn.lock / package-lock.json**: Dependency lock files.

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/felipereducino/take-home-challenge.git

cd take-home-challenge
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

or using yarn:

```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```
VITE_MARVEL_PUBLIC_KEY=<your-public-marvel-api-key>
VITE_MARVEL_PRIVATE_KEY=<your-private-marvel-api-key>
VITE_MARVEL_BASE_URL=https://gateway.marvel.com/v1/public
```

## 🚀 Running the Development Server

To start the development server, use the following command:

Using npm:

```bash
npm run dev
```

or using yarn:

```bash
yarn dev
```

The application will be available at http://localhost:5173.

## 🧪 Running Tests & Coverage

### 1. Run Tests

To execute the test suites, use:

Using npm:

```bash
npm test
```

or using yarn:

```bash
yarn test
```

### 2. Generate Test Coverage Report

To generate a coverage report, run:

Using npm:

```bash
npm run test:cov
```

or using yarn:

```bash
yarn test:cov
```

The coverage report will be available in the coverage/ directory.

## 📄 Scripts

### Here are some commonly used scripts in this project:

- Start Development Server: `npm run dev` or `yarn dev`
- Build for Production: `npm run build` or `yarn build`
- Run Tests: `npm test` or `yarn test`
- Generate Coverage Report: `npm run test:cov` or `yarn test:cov`
- Lint Code: `npm run lint` or `yarn lint`
- Format Code: `npm run format` or `yarn format`

## 🧩 Additional Information

- Linting: Ensures code quality and consistency using ESLint.
- Formatting: Uses Prettier for code formatting.
- State Management: Managed via React Query for efficient data handling.
- Routing: Implemented with React Router for navigation between pages.

## 📫 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

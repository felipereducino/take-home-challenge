# Take Home Challenge

<br/>

# Demo: https://marvel-nine-beta.vercel.app/

<br/>

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-darkblue)
![Axios](https://img.shields.io/badge/Axios-1.7.8-yellow)
![React Query](https://img.shields.io/badge/React%20Query-5.61.4-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.15-aqua)

## 📚 Project Overview

The **Take Home Challenge** is a front-end application designed to demonstrate proficiency in modern web development technologies. This project leverages React for building dynamic user interfaces, TypeScript for type safety, Axios for handling HTTP requests, and React Query for efficient data fetching and state management. It serves as a comprehensive example of creating a scalable and maintainable web application.

<br/>

## 🚀 Features

- **Responsive Design:** Ensures compatibility across various devices and screen sizes.
- **Type Safety:** Utilizes TypeScript to prevent runtime errors and enhance code quality.
- **Efficient Data Management:** Implements React Query for optimized data fetching, caching, and synchronization.
- **API Integration:** Uses Axios to communicate with backend services seamlessly.
- **Testing & Coverage:** Includes robust testing suites to ensure application reliability.

<br/>

## 🛠️ Dependencies

In order to run this project on development environment, ensure you have the following dependencies installed:

- **Node.js:** v20.x or higher

Visit: https://nodejs.org/pt

- **Yarn as package manager**

If you don't have yarn installed, run:

```
npm install -g yarn
```

### Project Dependencies

- **React:** 18.3.1
- **TypeScript:** 5.6.2
- **Axios:** 1.7.8
- **React Query:** 5.61.4

<br/>

## 🗂️ Project Architecture

The project follows a modular architecture for scalability and maintainability:

| **Folder/File**        | **Description**                                                                 |
|-------------------------|---------------------------------------------------------------------------------|
| **public/**            | Contains JSON files for translations and all needed public files for this application. |
| **src/**               | Main source code directory.                                                     |
| **assets/**            | Images or specific icons to be used in the application.                         |
| **components/**        | Reusable React components.                                                      |
| **configs/**           | Axios (API) instance.                                                           |
| **constants/**         | Reusable values to use in different components.                                 |
| **context/**           | Context providers.                                                              |
| **hooks/**             | Custom React hooks.                                                             |
| **layout/**            | Main structure of project layout.                                               |
| **mock/**              | Folder used to mock anything.                                                   |
| **pages/**             | Page-level components representing different routes.                            |
| **router/**            | Configuration for routing in this project.                                      |
| **services/**          | API service configurations using Axios.                                         |
| **types/**             | Folder designated to create and export types/interfaces.                        |
| **App.tsx**            | Root component integrating all parts of the application.                        |
| **main.tsx**           | Entry point of the React application.                                           |
| **index.html**         | Entry point of the React application.                                           |

<br/>

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/felipereducino/take-home-challenge.git

cd take-home-challenge
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Configure Environment Variables

Access https://developer.marvel.com/ and create a free account.

Create a `.env` file in the root directory and add the necessary environment variables:

```
VITE_MARVEL_PUBLIC_KEY=<your-public-marvel-api-key>
VITE_MARVEL_PRIVATE_KEY=<your-private-marvel-api-key>
VITE_MARVEL_BASE_URL=https://gateway.marvel.com/v1/public

```

<br/>

## 🚀 Running the Development Server

To start the development server, use the following command:

```bash
yarn dev
```

The application will be available at http://localhost:5173.

<br/>

## 🧪 Running Tests & Coverage

### 1. Run Tests

To execute the test suites, use:

```bash
yarn test
```

### 2. Generate Test Coverage Report

To generate a coverage report, run:

```bash
yarn test:cov
```

The coverage report will be available in the coverage/ directory.

<br/>

## 📄 Scripts

### Here are some commonly used scripts in this project:

| **Script**                 | **Description**                        |
|----------------------------|----------------------------------------|
| `yarn dev`                 | Start Development Server              |
| `yarn build`               | Build for Production                  |
| `yarn test`                | Run Tests                             |
| `yarn test:cov`            | Generate Tests Coverage Report        |
| `yarn lint`                | Lint Code                             |
| `yarn format`              | Format Code                           |
| `yarn cy:open`             | Open Cypress Client                   |

<br/>

## 🧩 Additional Information

- Linting: Ensures code quality and consistency using ESLint.
- Formatting: Uses Prettier for code formatting.
- State Management: Managed via React Query for efficient data handling.
- Routing: Implemented with React Router for navigation between pages.

<br/>

## 📫 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

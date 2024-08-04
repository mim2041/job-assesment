# Frontend Developer Intern Task

## Project Overview

This project is a web application built based on a provided Figma design. It includes login functionality using Firebase, client-side routing with react-router-dom, dynamic data display, and is styled with Tailwind CSS.

## Features

- **Figma to React.js Conversion:** The application has been converted from a Figma design to a fully functional React.js application. It is responsive and visually consistent with the Figma design.
- **Login Functionality:** Users can log in using Firebase. Proper authentication and user session management are implemented. Users are redirected to a protected route upon successful login.
- **React Router Setup:** Client-side routing is managed using react-router-dom. Routes for the login page, main content pages, and other required pages are created. Proper route protection is ensured for authenticated routes.
- **Dynamic Data Display:** The application fetches and displays dynamic data (simulated with static JSON) with search functionality. Data is displayed in a user-friendly format, consistent with the Figma design.
- **Styling with Tailwind CSS:** Tailwind CSS is used for styling the application components. The styling matches the Figma design and is responsive.

## Tech Stack

- React.js
- Firebase Authentication
- React Router DOM
- Tailwind CSS

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mim2041/job-assesment
    ```
2. Navigate to the project directory:
    ```bash
    cd job-assesment
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```


### Running the Application

1. Open the terminal:
    ```bash
    npm run dev
    ```
2. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## Deployment

The application is deployed on Firebase. You can view the live demo [here](https://scopioe-assesment.web.app/).


## Technologies Used

### Frontend
- **React.js:** A JavaScript library for building user interfaces, used to build the core structure of the application.
- **Tailwind CSS:** A utility-first CSS framework for styling the application components. It provides a set of predefined classes to create a responsive design.
- **react-router-dom:** A routing library for React applications, used to manage client-side routing and navigation within the app.

### Authentication
- **Firebase Authentication:** A service by Google that provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to the app. It supports authentication using passwords, phone numbers, and popular federated identity providers like Google, Facebook, and Twitter.

### State Management
- **React Hooks:** Built-in hooks like `useState` and `useEffect` are used for managing state and side effects in the application.

### Tools
- **Vercel:** A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It provides support for deploying the application.
- **Figma:** A web-based design tool used to create the initial design of the application. The design is then converted into a React.js application.

### Build Tools
- **Vite:** A build tool that provides a fast development environment and optimizes the build process for modern web applications. It replaces Create React App in this project.

### Additional Libraries
- **Swiper:** A modern mobile touch slider with hardware-accelerated transitions. It is used for the carousel/slider functionality in the application.
- **React Icons:** A collection of popular icons for React, used to add icons to the application.
- **SweetAlert2:** A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes. It is used for displaying alert messages in the application.

## Live
https://scopioe-assesment.web.app/

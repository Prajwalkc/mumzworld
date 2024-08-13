# Mumzworld React Native Application

Welcome to the Mumzworld React Native application! This is a cross-platform mobile application built using React Native, with support for both iOS and Android platforms. The application is designed as an MVP for handling take-away tasks and includes RTL (Right-to-Left) language support for better accessibility.

## Features

- **MVP Takeaway Task:** The core functionality of this app focuses on a simplified MVP for handling takeaway tasks.
- **RTL Support:** The application has been developed with RTL (Right-to-Left) language support for better accessibility in languages like Arabic.
- **State Management:** The app uses **Zustand** for efficient and simple state management.
- **CI/CD:** We are using **GitHub Actions** for continuous integration and deployment, ensuring smooth and automated workflows.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (>=14.x)
- **npm** or **yarn**
- **React Native CLI**
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

## Environment Variables

The application uses environment variables to configure the base API URLs for different environments. Make sure to set these environment variables in your `.env` file in the root directory of your project.

```bash
BASE_API_DEV='https://storage.googleapis.com/mumzrn'
BASE_API_STG='https://storage.googleapis.com/mumzrn'
BASE_API_PRD='https://storage.googleapis.com/mumzrn'
```



These variables determine which API environment your application will interact with depending on the environment (development, staging, production).

## Installation

Follow these steps to set up and run the application on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mumzworld.git
   cd mumzworld
   
2. **Install Dependencies:**

   ```bash
   yarn install

3. **Set up the environment variables:**

   Create a .env file in the root of your project and add the environment variables:
  

   ```bash
    BASE_API_DEV='https://storage.googleapis.com/mumzrn'
    BASE_API_STG='https://storage.googleapis.com/mumzrn'
    BASE_API_PRD='https://storage.googleapis.com/mumzrn'

4. **Run the application:**

  ```bash
    yarn ios
    yarn android
  ```
### State Management

The application uses **Zustand** for managing the application state. Zustand is a small, fast, and scalable state management solution that simplifies the state management process without requiring boilerplate code.

### CI/CD with GitHub Actions

We are using **GitHub Actions** for continuous integration and deployment. The CI/CD pipeline is configured to automatically build and test the application on every push to the repository. The following scripts are used in the CI/CD pipeline:

- **Build:** Runs the build process to ensure the application compiles correctly.
- **Test:** Runs the test suite to verify that the application is working as expected.
- **Deploy:** Deploys the application to the respective environment (staging/production).


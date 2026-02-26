## 📱 Rate Repository App

A React Native mobile application for browsing and rating GitHub repositories.

Built using React Native with Expo, this project was developed as part of the mobile development section of the Full Stack Open course by the University of Helsinki. The app connects to a GraphQL backend, allowing users to explore repositories, view details, sign in, and submit reviews.

## 🚀 Features

Display a list of GitHub repositories with details such as:

  Repository name and description
  
  Programming language
  
  Number of stars, forks, rating, and reviews

Sort and filter repositories

Pagination or infinite scrolling through repositories

User authentication (sign in / sign up)

Create and delete reviews

View repositories the user has reviewed

Navigate between views seamlessly in the mobile UI

## 📦 Technologies
| Technology              | Purpose                                                  |
| ----------------------- | -------------------------------------------------------- |
| **React Native**        | Framework for building native mobile UI                  |
| **Expo**                | Toolchain and runtime for developing and testing the app |
| **GraphQL**             | API layer between frontend and backend                   |
| **Apollo Client**       | Manages GraphQL queries and state                        |
| **Formik & Yup**        | Form handling and validation                             |
| **React Router Native** | Navigation between screens                               |

## 💻 Getting Started
**Prerequisites**

You’ll need:

Node.js (v16+ recommended)

npm or Yarn

Expo CLI installed globally:

  ```bash
  npm install -g expo-cli
  ```

A running instance of the backend API that supports GraphQL (provided by the course)

**Installation**

Clone the repository:

  ```bash
  git clone https://github.com/nngo23/rate-repository-app
  ```

Change into the project directory:

  ```bash
  cd rate-repository-app
  ```
Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```
## 📲 Running the App

You can run the app on multiple environments:

**Expo Go (recommended during development)**

Start the Expo development server:

  ```bash
  npm start
  # or
  yarn start
  ```

Open the Expo Go app on your mobile device and scan the QR code.

Ensure your device and development machine are on the same network.

**iOS Simulator / Android Emulator**

In the Expo CLI, press:

  i — to open on iOS simulator
  
  a — to open on Android emulator

Make sure you have the simulator or emulator set up first.

## 🧠 App Structure
```
rate-repository-app/
├── src/
│   ├── components/      # Presentational UI components
│   ├── hooks/           # Custom hooks (e.g. GraphQL queries)
│   ├── screens/         # Screen views for different app flows
│   ├── navigation/      # Router and navigation setup
│   ├── services/        # API & state management
│   ├── styles/          # Theming and global styling
│   └── App.js           # App entrypoint
├── app.json              # Expo configuration
├── package.json
└── README.md
```

## 📐 UI and Navigation

The app uses React Router Native for different views, such as:

  Repositories list
  
  Repository detail view
  
  User sign in / sign out
  
  User’s reviews
  
  Review form

## 📊 Data and State Management

Apollo Client is used to fetch and cache data from the GraphQL API.

Queries include listing repositories and detailed repository info.

Mutations handle user authentication and review creation.

Pagination and sorting are supported through query parameters.

## 🛠 Form Handling

Formik and Yup are included to handle:

  Sign in forms
  
  Review submission forms
  
  Validation of fields such as rating and text input

## 🤝 Contributing

Feel free to improve the UI, add features like:

  Dark mode
  
  Testing with React Native Testing Library
  
  Offline caching

Pull requests and issues are welcome.

## 📄 License

This project is based on course content from the Full Stack Open curriculum and is intended for learning and demonstration purposes.

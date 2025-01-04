# AI Poetry Generator

AI Poetry Generator is a React-based web application that allows users to generate creative poems by providing custom prompts. The app integrates Google's Generative AI model to craft personalized poetry and includes a real-time clock for added functionality.

## Features
* Generate creative poems based on user-provided prompts.
* Simple and clean user interface with real-time clock functionality.
* Error handling for empty prompts and API issues.
* Responsive design with a scrollable poem display.

![1](https://github.com/user-attachments/assets/15959159-0719-4232-a4b1-3c46a2c4011f)


![2](https://github.com/user-attachments/assets/7cc0612c-0cf7-45ad-a53e-d300fc2ec814)



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RavenCunanan/AI-Poetry.git
   cd AI-Poetry

2.  Create a New React Project
If you don't already have a React project, create one using Vite or Create React App:

  Using Vite (Recommended):
 ```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
```

Using Create React App:
  ```bash
npx create-react-app my-react-app
cd my-react-app
```

3. Replace the src Folder
Delete the src folder in your new React project and replace it with the src folder from this repository.


4. Install Required Dependencies
Run the following command to install additional dependencies:
  ```bash
npm install @google/generative-ai
```

5. Replace the API key with your own Google Gemini API key.
https://ai.google.dev/gemini-api/docs/api-key

6. Run the Application
Start the development server:
  ```bash
npm run dev  # For Vite
npm start    # For Create React App
```
Open the application in your browser at http://localhost:3000 or the port specified in your terminal.


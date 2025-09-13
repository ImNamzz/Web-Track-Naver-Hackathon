[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YHSq4TPZ)
# To-Do App – Preliminary Assignment Submission
⚠️ Please complete **all sections marked with the ✍️ icon** — these are required for your submission.

👀 Please Check ASSIGNMENT.md file in this repository for assignment requirements.

## 🚀 Project Setup & Usage
**How to install and run your project:**  
✍️  
- Clone the repository from GitHub.
- Navigate to the project directory in your terminal.
- Run ```npm install``` to install all the required dependencies.
- Run ```npm run dev``` to start the local development server.
- Open the provided localhost URL in your browser.

## 🔗 Deployed Web URL or APK file
https://naver-aih-ackathon-gaggzebtk-imnamzzs-projects.vercel.app/
## 🎥 Demo Video
**Demo video link (≤ 2 minutes):**  
https://youtu.be/J6LIGpGYPVM

## 💻 Project Introduction
### a. Overview

✍️ TaskGarden is a smart, gamified task management application designed specifically to help Vietnamese university students combat procrastination and feel rewarded for their hard work. Instead of a boring to-do list, this app transforms completed tasks into a beautiful, growing digital garden. Each accomplishment can be "minted" as a unique, downloadable "Tree of Achievement," creating a visual record of the user's productivity.
### b. Key Features & Function Manual

Full Task Management: Users can add, edit, delete, and mark tasks as complete with full CRUD functionality.

- Customizable Categories & Keywords: Users can create their own categories and assign specific keywords to them, tailoring the app to their unique workflow. There are some predefined Categories and their corresponding Keyword so you could test them immediately.

- AI-Powered Auto-Categorization: As the user types a task title, the application intelligently scans for user-defined keywords and automatically selects the correct category, saving time and effort.

- Smart Views & Sorting: Users can instantly filter their task list to see all, pending, or completed tasks. A special "Smart Sort" view uses a priority algorithm to automatically order tasks by urgency based on their deadline.

- The Productivity Garden: The app's most unique feature. Every completed task plants a tree in the user's personal garden. The type of tree corresponds to the task's category, creating a diverse and colorful forest that visually represents the user's achievements.

- Mint a "Tree of Achievement": Upon completing a task, users can "mint" a unique, shareable certificate. This feature generates a custom PNG image that includes a randomized SVG tree and work details, perfect for sharing with friends (Or your parents).


### c. Unique Features (What’s special about this app?) 

The special thing about TaskGarden is its focus on positive reinforcement and rewards. It's purposes is to change the user's relationship with their to-do list from a chore to a creative act. The core unique features are:

- The Gamified Reward System: The Productivity Garden provides a persistent, nice visualization of effort over time, which is far more motivating than just seeing a crossed-out list.

- Certificates: The ability to mint and download a unique "Tree of Achievement" for each task creates a digital trophy. This makes accomplishments feel more concrete and shareable, turning productivity into something you could.

- Deep Personalization: By allowing users to control not just their categories but the keywords that trigger auto-selection, and it's totally customizable by user.
### d. Technology Stack and Implementation Methods

- Front-End: React with Vite.

- Styling: Pure CSS with a modular structure.

- Image Generation: html2canvas library for client-side "minting" of certificate images.

- Graphics: Custom, randomized SVGs for generating unique "Tree of Achievement" graphics.
### e. Service Architecture & Database structure (when used)

 This application is a purely client-side, serverless application.

- Architecture: All logic, rendering, and state management are handled directly in the user's browser, making the application extremely fast and private.

- Database: The app uses the browser's built-in localStorage for persistent storage. Both the tasks list and the user's custom categories are saved locally, so their data remains even after closing the browser tab.
## 🧠 Reflection

### a. If you had more time, what would you expand?

- User Accounts & Cloud Sync: Implement a full backend with user authentication so that a user's tasks, categories, and garden could be synced across multiple devices, and most importantly: connect to their friends and share directly through the web.

- Advanced Analytics: Create a dedicated analytics dashboard with charts and graphs to help users visualize their productivity patterns, such as which categories they complete most often or what time of day they are most productive.

- Make more Tree SVGs. Turn them into quest in order to achieve the Tree.
### b. If you integrate AI APIs more for your app, what would you do?


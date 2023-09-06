# Drive Test
Drive Test is an integrated driving test management system to facilitate driver registration, slot booking for G2 or G licenses, and examiner assessments. Admins have tools to manage slots and issue licenses. This project aims to streamline driver testing for improved efficiency and user satisfaction.

# View Website
Website Link :- https://drive-test.onrender.com/

# Features
**Sign Up/Login**: Users can create an account as Driver/Admin/Examiner from the login page with the following validations.

1. **Driver Features**:
  Profile information input.
  Booking slots for G2 or G license tests.
  Viewing and managing their booked test slots.

2. **Admin Features**:
  Slot creation and management.
  Generating G or G2 licenses for successful drivers.

3. **Examiner Features**:
  Evaluating and marking drivers as pass or fail.
  Providing comments and feedback to drivers.
  Access to test schedules and driver information.


# Technologies Used
![My Skills](https://skillicons.dev/icons?i=mongodb,nodejs,express,html,css,js) 

## Other Technologies Used
**DataTables**: DataTables is a JavaScript plugin for enhancing HTML tables, providing features like sorting, searching, and pagination for efficient data presentation.

**MVC Pattern**: The Model-View-Controller (MVC) design pattern separates an application into three components - Model (data), View (user interface), and Controller (logic), promoting code organization and maintainability.

**EJS (Embedded JavaScript)**: EJS is a simple templating language for JavaScript that allows embedding dynamic data into HTML templates, facilitating server-side rendering in web applications.

**Toastr**: Toastr is a JavaScript library that provides elegant, non-blocking notifications for web applications, making it easy to display messages to users in a visually appealing way.

# Installation

Follow these steps to install and set up the project:

1. **Clone or download the Repository**: https://github.com/vishalpopat8/Drive_Test
2. **Navigate**: Navigate and Open to the Project Directory.
3.  **Install Dependencies**: Run `npm i` command.
     ```
    npm i
     ```
5. **Create a `.env` File**:
  In the project's root directory, create a file named `.env`.
  Open the `.env` file using a text editor.
6. **Add Your MongoDB URI**:
  Inside the `.env` file, add your MongoDB connection URI in the following format:
  ```MONGODB_URI=mongodb://username:password@host:port/database```
  Replace MongoDB URI with your actual Connection String.
7. 6. **Save the `.env` File**:
  Save the changes you made to the `.env` file.

8. **Start the Application**:
   run command ```npm start```.

# ## 📂 Project Structure

The project follows the **MVC (Model-View-Controller)** design pattern to ensure clean code separation and scalability:

* **`/controllers`**: Contains the logic for handling API requests (Auth, Cars).
* **`/models`**: Defines MongoDB schemas and data validation rules using Mongoose.
* **`/routes`**: Maps URL endpoints to specific controller functions.
* **`/middleware`**: Includes security checks (JWT) and file upload configurations (Multer).
* **`/public`**: The frontend directory containing `index.html` and the `uploads` folder for stored images.
* **`server.js`**: The main entry point that initializes the Express server and database connection.

---

## 🏁 Conclusion

This **AutoRent Premium** project demonstrates a complete Full-Stack workflow, from setting up a RESTful API and securing it with JWT to managing a dynamic frontend with real-time file uploads.

By implementing strict server-side validation and a responsive user interface, the system provides a reliable foundation for a real-world car rental business. This assignment showcases proficiency in:
* Asynchronous JavaScript and State Management.
* Secure User Authentication and Authorization.
* Database design and Cloud integration with MongoDB Atlas.
* Server-side file system management.

---
**Developed by:** [Your Name]  
**Course:** [Your Course Name/Number]  
**Date:** February 2026 AutoRent Premium
**Full-Stack Car Rental Management System**

A modern web platform for premium car rentals, developed as a comprehensive Full-Stack solution. The application allows users to browse the available fleet, while providing administrators with tools to manage content through an interactive dashboard.

---

##  Key Features

###  For Users (Clients)
* **Catalog Browsing**: A user-friendly grid displaying vehicle details including brand, model, year, and location.
* **Interactive Image Slider**: View multiple photos of a car without page reloads for a better UX.
* **Availability Status**: Real-time display of rental dates and daily pricing.
* **Responsive Design**: The interface is fully optimized for mobile devices, tablets, and desktops.

###  For Administrators (Admins)
* **Admin Dashboard**: A protected section accessible only to users with administrative privileges (JWT-based).
* **Local File Upload (Multer)**: Ability to upload real vehicle images directly from the local computer.
* **Full CRUD Lifecycle**: Create, Read, Update, and Delete car records with instant database synchronization.
* **Data Validation**: Built-in checks to prevent negative pricing, invalid fuel levels, or incorrect dates.

##  Technology Stack

### Frontend
* **HTML5 & CSS3**: Semantic structure and custom styling using the **Montserrat** Google Font.
* **JavaScript (Vanilla JS)**: Asynchronous logic using the **Fetch API** for seamless server communication.
* **FormData API**: Used for handling multipart/form-data to enable local file uploads.

### Backend
* **Node.js & Express.js**: A robust server-side environment and web framework for RESTful API development.
* **Multer**: Middleware for handling `multipart/form-data`, primarily used for uploading car images to the server's local storage.
* **JWT (JSON Web Tokens)**: Secure stateless authentication for protecting admin routes.
* **BcryptJS**: Industry-standard hashing for secure user password storage.

### Database
* **MongoDB Atlas**: A cloud-based NoSQL database for flexible and scalable data storage.
* **Mongoose**: An ODM (Object Data Modeling) library used to enforce strict schemas and data validation on the server side.

## Project Structure

The project follows the **MVC (Model-View-Controller)** design pattern to ensure clean code separation and scalability:

* **`/controllers`**: Contains the logic for handling API requests (Auth, Cars).
* **`/models`**: Defines MongoDB schemas and data validation rules using Mongoose.
* **`/routes`**: Maps URL endpoints to specific controller functions.
* **`/middleware`**: Includes security checks (JWT) and file upload configurations (Multer).
* **`/public`**: The frontend directory containing `index.html` and the `uploads` folder for stored images.
* **`server.js`**: The main entry point that initializes the Express server and database connection.

---

##  Conclusion

This **AutoRent Premium** project demonstrates a complete Full-Stack workflow, from setting up a RESTful API and securing it with JWT to managing a dynamic frontend with real-time file uploads.

By implementing strict server-side validation and a responsive user interface, the system provides a reliable foundation for a real-world car rental business. This assignment showcases proficiency in:
* Asynchronous JavaScript and State Management.
* Secure User Authentication and Authorization.
* Database design and Cloud integration with MongoDB Atlas.
* Server-side file system management.


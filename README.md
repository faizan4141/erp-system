# ERP System
## Project Overview:
The ERP System is a simplified interface designed to manage basic business operations efficiently. It consists of the following pages:
- Dashboard: Provides an overview of key metrics and features.
- Products Management: Allows for the management of product listings.
- Orders Management: Facilitates viewing and handling orders.
Optionally, the project may include:
- Orders Calendar View: A calendar interface displaying orders based on their expected delivery dates.
## Objectives:
- Develop a user-friendly interface for managing key aspects of a business.
- Utilize React for building modular components and managing application state.
- Implement navigation between different sections of the ERP system using React Router.
- Create a responsive design suitable for both desktop and mobile devices.
## Assignment Details:
### Dashboard:
- Display key metrics or features.
- Include links or buttons for quick navigation to other pages.
### Products Management:
- Present a list of products with details such as name, category, price, and stock quantity.
- Enable functionalities to add, edit, and delete products.
### Orders Management:
- Show a list of orders with details like order ID, customer name, order date, and status.
- Optionally allow viewing of order details, updating the order status, and deletion of orders.
### Orders Calendar View (Optional):
- Implement a calendar view displaying orders based on their expected delivery dates.
- Provide the ability to click on a date to view all orders due for delivery that day.
## Documentation:
- Detailed instructions for running and using the front-end application.

# ERP System Frontend
## Overview
This is the front-end part of an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently. The system includes features such as a dashboard for an overview of key metrics, products management, orders management, and an optional orders calendar view.
## Technologies Used
- React: JavaScript library for building user interfaces.
- React Router: Library for routing in React applications.
- CSS: Styling language for designing the user interface.
- Screenshots demonstrating the functionality of the website.
## Installation
1. Clone the repository:
git clone <repository-url>
2. Navigate to the project directory:
  ```
  cd erp-system
  ```
3. Install dependencies:
  ```
  npm install
  ```
## Usage
1. Start the development server:
  ```
  npm start
  ```
2. Open your web browser and go to `http://localhost:3000` to view the application.
## Features
- **Dashboard:** Provides an overview of key metrics and quick navigation to other sections.
- **Products Management:** Allows adding, editing, and deleting product listings.
- **Orders Management:** Facilitates viewing, updating, and deleting orders.
- **Orders Calendar View (Optional):** Displays orders based on their expected delivery dates.
## Folder Structure
```
erp-system
├── src
│   ├── components         # Contains React components
│   ├── css                # Contains CSS files for styling
│   ├── App.js             # Main component for routing
│   ├── index.js           # Entry point of the application
│   └── ...                # Other files and folders
|── public
│   └── ...                # Public assets
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```
## Screenshots
![Dashboard]
![Alt text](../../../Pictures/Screenshots/Dashboard.png)
![ProductsManagement]
![Alt text](../../../Pictures/Screenshots/ProductsManagement.png)
![OrdersManagement]
![Alt text](../../../Pictures/Screenshots/OrdersManagment.png)
![OrdersCalendarView]
![Alt text](../../../Pictures/Screenshots/OrdersCalendarView.png)

## Credits
This project was created by - [Mohd Faizan] - [mohdfaizan857@gmail.com]
## License
This project is licensed under the [MIT License](LICENSE).

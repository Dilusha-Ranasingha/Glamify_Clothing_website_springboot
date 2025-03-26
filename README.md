
# Glamify-Clothing Store Management System
<img width="1453" alt="glamify_home" src="https://github.com/user-attachments/assets/22cc86be-c17c-412f-8652-1c060eb177e3">


## Project Description

This project is a web-based **Clothing Store Management System** designed to handle three main functionalities:

1. **User Management Function**
   - Allows users to register, log in, and manage their accounts.
   - Only logged-in users can access the cart functionality.

2. **Add to Cart Function**
   - Logged-in users can add items to their cart.
   - Users can update the quantity, delete items, and view the total checkout price.
   - Each user's cart and its details are maintained separately and securely.

3. **Admin Panel Function**
   - Admins can manage the website's inventory, including clothing items for categories such as New Arrivals, Men, Women, Kids, and Footwear.
   - Allows for adding, updating, and deleting items from the database.
   - Provides analytical insights through pie charts and bar graphs:
     - Displays the total items in each category.
     - Tracks user activity and the number of items added to carts.

---

## 🌟Key Features

### User Features:
- **Registration and Login**: Users can create accounts and log in to access the site.
- **Cart Management**:
  - Add items to the cart.
  - Update item quantities.
  - Delete items from the cart.
  - Calculate the total checkout price.
  - View and manage only their personal cart.

### Admin Features:
- **Inventory Management**:
  - Add, update, and delete clothing items across different categories.
- **Analytics Dashboard**:
  - View the distribution of items across categories using pie charts.
  - Monitor user cart activity using bar graphs.

---

## 🛠️Technologies Used

### Backend:
- **Spring Boot**: Developed using IntelliJ IDEA.
- **SQL Database**: Managed using MySQL and MySQL Workbench.
- **API Testing**: Endpoints tested using Postman.
- **Check Backedn Repository**: https://github.com/Dilusha-Ranasingha/Glamify-Clothing-website-BE

### Frontend:
- **React.js**: Developed using VS Code with Material-UI for styling and Chart.js for data visualization.

---

## 🚀How to Run the Project

### Prerequisites
- **Java Development Kit (JDK)** installed.
- **MySQL Server** installed and running.
- **Node.js** and **npm** installed for the frontend.
- **Postman** for API testing (optional).

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Dilusha-Ranasingha/Glamify-Clothing-website-BE
   cd clothing-store/backend
   ```
2. Open the backend project in IntelliJ IDEA.
3. Set up the database:
   - Create a MySQL database (e.g., `clothing_store_db`).
   - Update the database connection details in the `application.properties` file:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/clothing_store_db
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```
4. Run the Spring Boot application.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd clothing-store/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Access the application in your browser at `http://localhost:3000`.

---

## API Endpoints


### Admin Panel APIs
- `GET /api/cards/getall`: Fetch all clothing items.
- `POST /api/cards/add`: Add a new clothing item.
- `PUT /api/cards/update/{id}`: Update a clothing item by ID.
- `DELETE /api/cards/delete/{id}`: Delete a clothing item by ID.

### Cart APIs
- `GET /api/items/getitemsbyuser`: Fetch all items added to the cart by the logged-in user.
- `POST /api/items/additem`: Add an item to the cart.
- `PUT /api/items/updatequantity`: Update the quantity of an item in the cart.
- `DELETE /api/items/deleteitem`: Remove an item from the cart.

### User APIs
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login an existing user.
- `GET /api/users/profile`: Fetch the profile details of the logged-in user.
- `PUT /api/users/update`: Update the profile details of the logged-in user.
- `DELETE /api/users/delete`: Delete the logged-in user's account.
  
### Card APIs (cards, mencards, womencards, kidscards, footwearcards)

#### Cards
- `GET /api/cards/getall`: Fetch all cards (general clothing items).
- `POST /api/cards/add`: Add a new card item.
- `PUT /api/cards/update/{id}`: Update a card item by ID.
- `DELETE /api/cards/delete/{id}`: Delete a card item by ID.

#### MenCards
- `GET /api/mencards/getall`: Fetch all men's clothing items.
- `POST /api/mencards/add`: Add a new men's clothing item.
- `PUT /api/mencards/update/{id}`: Update a men's clothing item by ID.
- `DELETE /api/mencards/delete/{id}`: Delete a men's clothing item by ID.

#### WomenCards
- `GET /api/womencards/getall`: Fetch all women's clothing items.
- `POST /api/womencards/add`: Add a new women's clothing item.
- `PUT /api/womencards/update/{id}`: Update a women's clothing item by ID.
- `DELETE /api/womencards/delete/{id}`: Delete a women's clothing item by ID.

#### KidsCards
- `GET /api/kidscards/getall`: Fetch all kids' clothing items.
- `POST /api/kidscards/add`: Add a new kids' clothing item.
- `PUT /api/kidscards/update/{id}`: Update a kids' clothing item by ID.
- `DELETE /api/kidscards/delete/{id}`: Delete a kids' clothing item by ID.

#### FootwearCards
- `GET /api/footwearcards/getall`: Fetch all footwear items.
- `POST /api/footwearcards/add`: Add a new footwear item.
- `PUT /api/footwearcards/update/{id}`: Update a footwear item by ID.
- `DELETE /api/footwearcards/delete/{id}`: Delete a footwear item by ID.

---

## Project Structure

```
GLAMIFY_CLOTHING_PROJECT/
├── glamifybackend/
│   ├── src/main/java/com/example/demo/
│   │   ├── controller/  # Controllers for APIs
│   │   │   ├── CardController.java
│   │   │   ├── MenCardController.java
│   │   │   ├── WomenCardController.java
│   │   │   ├── KidsCardController.java
│   │   │   ├── FootwearCardController.java
│   │   │   ├── ItemController.java
│   │   ├── dto/         # Data Transfer Objects
│   │   │   ├── CardDto.java
│   │   │   ├── MenCardDto.java
│   │   │   ├── WomenCardDto.java
│   │   │   ├── KidsCardDto.java
│   │   │   ├── FootwearCardDto.java
│   │   │   ├── ItemDto.java
│   │   ├── model/       # Database Models
│   │   │   ├── CardModel.java
│   │   │   ├── MenCardModel.java
│   │   │   ├── WomenCardModel.java
│   │   │   ├── KidsCardModel.java
│   │   │   ├── FootwearCardModel.java
│   │   │   ├── ItemModel.java
│   │   ├── repo/        # Repository Interfaces
│   │   │   ├── CardRepo.java
│   │   │   ├── MenCardRepo.java
│   │   │   ├── WomenCardRepo.java
│   │   │   ├── KidsCardRepo.java
│   │   │   ├── FootwearCardRepo.java
│   │   │   ├── ItemRepo.java
│   │   ├── service/     # Business Logic
│   │   │   ├── CardService.java
│   │   │   ├── MenCardService.java
│   │   │   ├── WomenCardService.java
│   │   │   ├── KidsCardService.java
│   │   │   ├── FootwearCardService.java
│   │   │   ├── ItemService.java
│   └── resources/
│       ├── application.properties  # Backend Configuration
│
├── glamifyfrontend/
│   ├── public/
│   │   ├── assets/      # Static assets like images
│   │   ├── index.html   # Entry point for React App
│   ├── src/
│   │   ├── components/  # Reusable React Components
│   │   │   ├── button/
│   │   │   │   ├── button.js
│   │   │   ├── Cards/
│   │   │   │   ├── AccessoriesCard.js
│   │   │   │   ├── FootwearCards.js
│   │   │   │   ├── HomePageCards.js
│   │   │   │   ├── KidsPageCards.js
│   │   │   │   ├── MensPageCards.js
│   │   │   │   ├── WomenPageCards.js
│   │   │   ├── Carousel/
│   │   │   │   ├── Carousel.js
│   │   │   ├── Categories/
│   │   │   │   ├── Categories.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.js
│   │   │   ├── Header/
│   │   │   │   ├── Header.js
│   │   │   │   ├── HeaderAdmin.js
│   │   ├── context/     # Context for User Management
│   │   │   ├── UserContext.js
│   │   ├── pages/       # Main Application Pages
│   │   │   ├── AdminPages/
│   │   │   │   ├── AdminFootwear.js
│   │   │   │   ├── AdminHomePage.js
│   │   │   │   ├── AdminPage.js
│   │   │   │   ├── AdminPageKids.js
│   │   │   │   ├── AdminPageMen.js
│   │   │   │   ├── AdminPageWomen.js
│   │   │   │   ├── AdminPanelHome.js
│   │   │   ├── AccessoriesPage.js
│   │   │   ├── addToCartPage.js
│   │   │   ├── FootwearPage.js
│   │   │   ├── homePage.js
│   │   │   ├── KidsPage.js
│   │   │   ├── loginPage.js
│   │   │   ├── MensPage.js
│   │   │   ├── myAccount.js
│   │   │   ├── registerPage.js
│   │   │   ├── UpdatePage.js
│   │   │   ├── WomenPage.js
│   └── App.js          # Main entry point for React
```

---


## 🧰 Languages and Tools:
<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="50" height="50">  
<img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="Visual Studio Code" width="50" height="50">  
<img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="50" height="50">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Workbench" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" alt="IntelliJ IDEA" width="50" height="50">  
</p>

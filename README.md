<a name="readme-top"></a>

<h1 align='center'> Recipe Website API - Culinary Delights at Your Fingertips 🍲 </h1>
<div align="center">
    <img src="images/api_logo.png" width="100" height="auto" />
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [About the Recipe Website API 🍳](#-about-project-)
  - [Live Demo](#live-demo)
  - [🛠 Built With](#-built-with-)
    - [Tech Stack](#tech-stack-)
    - [Key Features](#key-features-)
  - [💻 Getting Started](#-getting-started-)
  - [To get a local copy up and running, follow these steps.](#to-get-a-local-copy-up-and-running-follow-these-steps)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
  - [👥 Authors](#-authors-)
  - [🔭 Future Features](#-future-features-)
  - [🤝 Contributing](#-contributing-)
  - [⭐️ Show your support](#️-show-your-support-)
  - [🙏 Acknowledgments](#-acknowledgments-)
  - [🙏 FAQ](#-faq-)
  - [📝 License](#-license-)

<!-- PROJECT DESCRIPTION -->

# About the Recipe Website API 🍳 <a name="about-project"></a>

This project is a comprehensive backend solution for managing and sharing culinary recipes. Designed with simplicity and efficiency in mind, it provides robust APIs for user authentication, recipe creation, and management. Whether you're a hobbyist cook or a professional chef, this API helps organize and share your culinary creations with ease.

**Note**: This project was meticulously crafted by Lucas Erkana, showcasing a blend of technical expertise and passion for culinary arts.

### API Screenshot

![Recipe Website API](https://github.com/Lucas-Erkana/recipe_website/assets/api_screenshot.png)

## Live Demo

To see this project's live demo, please click [here](https://recipe-website-api-demo.com).

## 🛠 Built With <a name="built-with"></a>

This API was developed using the following technologies:

- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript
- Postman

### Tech Stack <a name="tech-stack"></a>

<details> <summary>Server</summary> <ul> <li><a href="https://nodejs.org/">Node.js</a></li> <li><a href="https://expressjs.com/">Express</a></li> <li><a href="https://www.mongodb.com/">MongoDB</a></li> <li><a href="https://mongoosejs.com/">Mongoose</a></li> </ul> </details>

### Key Features <a name="key-features"></a>

> - User authentication and registration.
> - CRUD operations for recipes.
> - Filtering and sorting recipes.
> - Image upload and management for recipes.
> - Nutritional information tracking.
> - User role management (e.g., admin, editor, user).
> - Responsive and intuitive API endpoints.
> - Secure data handling and storage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

## To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Node.js installed on your machine
- A MongoDB database
- A code editor such as Visual Studio Code
<p align="right">(<a href="#readme-top">back to top</a>)</p>
### Setup

To set up the Recipe Website API project, follow the steps below:

1. Clone this repository to your desired folder:

```sh
 git clone https://github.com/Lucas-Erkana/recipe_website.git
```
2. Navigate into the cloned folder:

```sh
 cd recipe_website
```

3.Install the necessary dependencies:


```sh
 npm install
```
4.Set up your environment variables in a .env file based on the .env.example provided.
```sh
MONGO_URL = mongodb+srv://recipebookwebsite:u1jxF2qU7UnFIKEi@cluster0.uzbzxft.mongodb.net/?retryWrites=true&w=majority
```
5.Start the server:
```sh
 npm start
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


Sure, here's how you can include the "Usage" section in your `README.md` file to guide users on how to use your Recipe Website API through Postman:

---

## 💻 Usage <a name="usage"></a>

After starting the server with `npm start`, you can use Postman to interact with the API. If you don't have Postman installed, you can use it directly in your browser [here](https://web.postman.co/workspace/My-Workspace~80c6c9a1-1856-44c4-8f45-dc93fabc7188/request/create?requestId=359ef886-fef6-46be-a481-46db2fe2b5e9).

### To CREATE a User:

1. Set the request type to `POST`.
2. Enter the URL: `http://localhost:3000/users`.
3. Click on `Body`, then select `raw` and choose `JSON`.
4. Add the following user details in the request body:
    ```json
    {
        "username": "john",
        "email": "john@gmail.com",
        "role": "user",
        "password": "1234567"
    }
    ```
5. Click `Send`.

### To READ Users:

- To fetch all users:
  1. Set the request type to `GET`.
  2. Enter the URL: `http://localhost:3000/users`.
  3. Click `Send`.

- To fetch a specific user:
  1. Set the request type to `GET`.
  2. Enter the URL: `http://localhost:3000/users/[user-id]` (replace `[user-id]` with the actual user ID).
  3. Click `Send`.

### To UPDATE a User:

1. Set the request type to `PUT`.
2. Enter the URL: `http://localhost:3000/users/[user-id]` (replace `[user-id]` with the user ID you want to update).
3. In the `Body` section, select `raw` and choose `JSON`.
4. Add the updated user details. For example:
    ```json
    {
        "username": "johndoe"
    }
    ```
5. Click `Send`.

### To DELETE a User:

1. Set the request type to `DELETE`.
2. Enter the URL: `http://localhost:3000/users/[user-id]` (replace `[user-id]` with the user ID you want to delete).
3. Click `Send`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Lucas Erkana**

- GitHub: [@Lucask-Erkana](https://github.com/Lucask-Erkana)
- Twitter: [@Lucas_David_22](https://twitter.com/@Lucas_David_22)
- LinkedIn: [Lucas Erkana](https://www.linkedin.com/in/lucas-erkana/)
- Frontend Mentor - [@Lucask-Erkana](https://www.frontendmentor.io/profile/Lucask-Erkana)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Lucas-Erkana/API_template/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please leave a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to express my heartfelt gratitude to [BAG](https://bag.wrk) for providing me with the opportunity to complete this task. Their support and encouragement have been invaluable throughout the development process.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

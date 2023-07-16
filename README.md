
# FlexDrone E-commerce Platform

FlexDrone are a highly skilled engineering company. However, they are reliant on their bricks and mortar store and paper-based office processes. There are few computers in the business and it is only the Bookkeeper who manages a business process using one of these. (Accounts are managed via excel and unlinked online banking.) Generally they are not really seen as an ‘IT savvy’ business.

The Board are eager to modernise the business and move into online sales. This is a significant investment in the company’s future and will involve developing both front end (customer facing) and back end (office & warehouse) systems.

Their initial requirement is for an e-commerce platform enabling the purchase of standard model drones, customised drones and parts online. This will open their business to international trade and along with it will be additional considerations around data security, legal requirements, postage and trade requirement (international customs duty, VAT etc).


## Tech Stack

**Client:** React, Redux, Material Ui

**Server:** Java, Spring Boot

**Database:** MySQL

**Other:** SendGrid, Google Authenticator, Spring Security,JWT







## Features

- Product Catalog.
- Product search function.
- Enabling users to configure their own drone step by step.
- User Profile with crud functionality.
- Order History tab.
- Secure Login and registration with two factor authentication enabled.
- Users recive a confirmation email after they have purchased a product.
- Online payment system.


## Steps to set up the Spring boot backend app

Clone the project

```bash
  git clone https://github.com/Moshak67/Flexdrone.git
```
Create MySQL Database

```bash
  create database flexdronedb
```

Go to the project directory

```bash
  cd Flexdrone
```
Go to the Backend directory

```bash
  cd Flexdrone
```

Run spring boot server
```bash
  mvn spring-boot:run
```
## Steps to set up the React Client side

Go to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


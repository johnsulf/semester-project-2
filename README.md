# Semester Project 2 - Auction Website

## Description

This project is an auction website developed as part of the Semester Project 2 assignment at Noroff School of Technology and Digital Media. The website allows users to:

- Register with a `stud.noroff.no` email address.
- Log in and log out securely.
- Update their profile avatar.
- View their total credit balance.
- Create auction listings with details like title, deadline date, media gallery, and description.
- Place bids on other users' listings.
- View all bids made on a listing.
- Search through listings (available to unregistered users).

When a new user joins, they are credited with 1000 credits to participate in auctions. Users can earn more credits by selling items and spend credits by purchasing items.

## Built With

- [Figma](https://www.figma.com/)
- HTML5
- CSS3 ([Tailwind CSS](https://tailwindcss.com/))
- JavaScript (ES6)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" alt="Figma" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" alt="HTML" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" alt="Git" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" alt="VS Code" width="40" height="40"/>
</div>

## Features

- **User Registration and Authentication**: Secure registration and login functionality.
- **Profile Management**: Users can update their avatar and view their credit balance.
- **Auction Listings**: Create and manage auction listings with detailed information.
- **Bidding System**: Place bids on listings and view all bids made.
- **Search Functionality**: Unregistered users can search through all listings.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Installation

1. **Clone the repository** and navigate to the project directory:

   ```bash
   git clone https://github.com/johnsulf/semester-project-2.git
   cd semester-project-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the project locally
To start the development server and watch for changes:

```bash
npm start
```

This command runs both the live server and watches for changes in the Tailwind CSS files

### Building for production
To build the project for production:

```bash
npm run build
```

This will generate optimized CSS in the ./dist folder

## Testing
### Unit tests
Run unit tests with Jest:
```bash
npm run test-unit
```

### End-to-end tests
Open Cypress test runner:

```bash
npm run test-e2e
```

Run Cypress tests in headless mode:

```bash
npm run test-e2e-cli
```

## Linting and Formatting
- **Lint JavaScript files:**
  ```bash
  npm run lint
  ```

- **Fix linting errors:**
  ```bash
  npm run lint-fix
  ```

- **Format code with Prettier:**
  ```bash
  npm run format
  ```

## Deployment
The application is hosted on GitHub Pages and can be accessed here:
- [Fun Auction](https://johnsulf.github.io/semester-project-2/)

## Project planning and design
- **Gantt Chart:** [Google Sheets](https://docs.google.com/spreadsheets/d/1jKh6bmGbnyDCtAN7rsCbakhN_9YcxhYXpMnFmjK-nQg/edit?usp=sharing)
- **Design Prototype:** [Figma](https://www.figma.com/proto/Bxh2e8dEg9xp6nQjHft2aF/styletile-and-protoype?page-id=1%3A2&node-id=21-237&node-type=canvas&viewport=914%2C479%2C0.09&t=28MeLIN3h156fxcW-1&scaling=contain&content-scaling=fixed)
- **Style Tile:** [Figma](https://www.figma.com/proto/Bxh2e8dEg9xp6nQjHft2aF/styletile-and-protoype?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=262%2C182%2C0.74&t=Y4PyGQGlsaBgZjeM-1&scaling=contain&content-scaling=fixed)

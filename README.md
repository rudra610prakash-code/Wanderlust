# 🌍 Wanderlust - Travel Listing Platform

<div align="center">

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)
![Node Version](https://img.shields.io/badge/Node-24.16.0-green?style=flat-square)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-13aa52?style=flat-square)
![Express](https://img.shields.io/badge/Backend-Express.js-90c53f?style=flat-square)
![EJS](https://img.shields.io/badge/Templating-EJS-9b7f5d?style=flat-square)
![Cloudinary](https://img.shields.io/badge/Cloud-Cloudinary-3448c5?style=flat-square)
![Passport](https://img.shields.io/badge/Auth-Passport.js-34e27a?style=flat-square)

</div>

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📦 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [🔌 API Endpoints](#-api-endpoints)
- [💾 Database Schema](#-database-schema)
- [🔐 Authentication & Security](#-authentication--security)
- [🎨 Frontend](#-frontend)
- [📚 Project Components](#-project-components)
- [🛠️ Development](#️-development)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🌟 Features

### Core Functionality
- ✅ **User Authentication** - Secure login and registration with Passport.js
- ✅ **Create Listings** - Upload property/travel listings with images
- ✅ **Edit & Delete Listings** - Manage your own listings with full CRUD operations
- ✅ **Reviews & Ratings** - Users can leave reviews (1-5 stars) on listings
- ✅ **Image Upload** - Cloudinary integration for image hosting and optimization
- ✅ **Owner Verification** - Only listing owners can edit/delete their listings
- ✅ **Session Management** - Persistent user sessions with flash notifications

### Security Features
- 🔐 Password hashing with Passport Local Mongoose
- 🔐 CSRF Protection with Middleware
- 🔐 Input Validation using Joi schema validation
- 🔐 Owner authorization checks
- 🔐 Error handling with custom ExpressError class

### User Experience
- 🎨 Responsive EJS templating
- 📱 Bootstrap-based UI
- 💬 Flash messages for user feedback
- 🖼️ Image optimization with Cloudinary transformations
- 🔍 Search and filter listings

---

## 🏗️ Architecture

Wanderlust follows the **MVC (Model-View-Controller)** architectural pattern with a well-organized file structure:

```
Request → Routes → Controllers → Models → Database
   ↓         ↓         ↓         ↓         ↓
Middleware Processing & Response Rendering
```

**Data Flow:**
1. User makes request through the frontend
2. Express routes handle the request
3. Middleware authenticates and validates
4. Controllers process business logic
5. Models interact with MongoDB
6. Response rendered with EJS templates

---

## 📦 Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 24.16.0 | JavaScript Runtime |
| **Express.js** | ^5.2.1 | Web Framework |
| **MongoDB** | ^9.7.0 | NoSQL Database |
| **Mongoose** | ^9.7.0 | MongoDB ODM |
| **Joi** | ^18.2.3 | Schema Validation |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **EJS** | Server-side Templating |
| **EJS-Mate** | Layout support for EJS |
| **Bootstrap** | Responsive UI Framework |
| **JavaScript** | Client-side Interactivity |

### Authentication & Authorization
| Technology | Purpose |
|-----------|---------|
| **Passport.js** | Authentication middleware |
| **Passport-Local** | Local strategy for authentication |
| **Passport-Local-Mongoose** | User schema helper |
| **Express-Session** | Session management |
| **Connect-Flash** | Flash messaging |

### Media & Cloud
| Technology | Purpose |
|-----------|---------|
| **Cloudinary** | Image hosting & optimization |
| **Multer** | File upload handling |
| **Multer-Storage-Cloudinary** | Cloudinary storage integration |

### Utilities
| Technology | Purpose |
|-----------|---------|
| **Dotenv** | Environment variables |
| **Method-Override** | HTTP method override |
| **Connect-Mongo** | MongoDB session store |

---

## 📁 Project Structure

```
Wanderlust/
├── 📄 app.js                    # Main application entry point
├── 📄 schema.js                 # Joi validation schemas
├── 📄 middleware.js             # Custom middleware functions
├── 📄 cloudConfig.js            # Cloudinary configuration
│
├── 📁 models/                   # Database models
│   ├── listing.js              # Listing schema & model
│   ├── review.js               # Review schema & model
│   └── user.js                 # User schema & model
│
├── 📁 controllers/              # Business logic controllers
│   ├── listing.js              # Listing CRUD operations
│   ├── reviews.js              # Review operations
│   └── users.js                # User authentication
│
├── 📁 routes/                   # Express route handlers
│   ├── listing.js              # Listing routes
│   ├── review.js               # Review routes
│   └── user.js                 # User routes
│
├── 📁 views/                    # EJS templates
│   ├── boilerplate.ejs         # Base layout template
│   ├── index.ejs               # Listings index page
│   ├── show.ejs                # Single listing detail page
│   ├── new.ejs                 # Create listing form
│   ├── edit.ejs                # Edit listing form
│   ├── error.ejs               # Error page
│   ├── includes/               # Partial templates
│   └── users/                  # User related templates
│
├── 📁 public/                   # Static assets
│   ├── css/                    # Stylesheets
│   └── script.js               # Client-side JavaScript
│
├── 📁 utils/                    # Utility functions
│   ├── ExpressError.js         # Custom error class
│   └── wrapAsync.js            # Async error wrapper
│
├── 📁 init/                     # Database initialization
│   ├── data.js                 # Sample data
│   └── index.js                # Initialization script
│
├── 📄 package.json              # Dependencies & scripts
├── 📄 package-lock.json         # Locked dependencies
└── 📄 .gitignore                # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v24.16.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v6.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)
- **Cloudinary Account** - [Sign Up](https://cloudinary.com/users/register/free)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/rudra610prakash-code/Wanderlust.git
cd Wanderlust
```

2. **Install Dependencies**
```bash
npm install
```

### Configuration

1. **Create Environment File** (`.env`)
```bash
# Create .env file in root directory
touch .env
```

2. **Add Environment Variables** to `.env`
```env
# Database
MONGODB_URI=mongodb://127.0.0.1:27017/wanderlust

# Session & Security
SECRET=your_super_secret_session_key_here

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Node Environment
NODE_ENV=development
```

3. **MongoDB Setup**
   - Ensure MongoDB is running on your local machine
   - Default connection: `mongodb://127.0.0.1:27017/wanderlust`

### Running the Application

1. **Start MongoDB**
```bash
# On Windows
mongod

# On macOS/Linux
mongod --dbpath /data/db
```

2. **Initialize Database (Optional)**
```bash
# Run this to populate sample data
node init/index.js
```

3. **Start the Server**
```bash
npm start
# or for development with auto-reload
npm run dev
```

4. **Access the Application**
```
Open your browser and navigate to: http://localhost:8080
```

---

## 🔌 API Endpoints

### Listings Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/listings` | View all listings | ❌ No |
| GET | `/listings/new` | Show create listing form | ✅ Yes |
| POST | `/listings` | Create new listing | ✅ Yes |
| GET | `/listings/:id` | View single listing | ❌ No |
| GET | `/listings/:id/edit` | Show edit form | ✅ Yes (Owner) |
| PUT | `/listings/:id` | Update listing | ✅ Yes (Owner) |
| DELETE | `/listings/:id` | Delete listing | ✅ Yes (Owner) |

### Reviews Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/listings/:id/reviews` | Create review | ✅ Yes |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review | ✅ Yes (Author) |

### User Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/signup` | Show registration form | ❌ No |
| POST | `/signup` | Register new user | ❌ No |
| GET | `/login` | Show login form | ❌ No |
| POST | `/login` | Authenticate user | ❌ No |
| GET | `/logout` | Logout user | ✅ Yes |

---

## 💾 Database Schema

### Listing Schema
```javascript
{
  title: String (Required),
  description: String,
  image: {
    url: String,           // Cloudinary URL
    filename: String       // Cloudinary filename
  },
  price: Number,
  location: String,
  country: String,
  reviews: [ObjectId],    // References Review model
  owner: ObjectId,        // References User model
  createdAt: Date (Default: now())
}
```

### User Schema
```javascript
{
  username: String (Unique),
  email: String (Required),
  password: String (Hashed - by Passport),
  createdAt: Date (Default: now())
}
```

### Review Schema
```javascript
{
  comment: String,
  rating: Number (Min: 1, Max: 5),
  author: ObjectId,       // References User model
  createdAt: Date (Default: now())
}
```

### Relationships
```
User (1) ---- (Many) Listing
User (1) ---- (Many) Review
Listing (1) ---- (Many) Review
```

---

## 🔐 Authentication & Security

### Security Features Implemented

1. **Password Security**
   - Bcrypt hashing via Passport Local Mongoose
   - Salted password storage
   - Secure password comparison

2. **Session Management**
   - Express-session for persistent sessions
   - 7-day session expiration
   - HttpOnly cookies (prevent XSS)
   - CSRF protection middleware

3. **Authorization**
   - Owner verification for edit/delete operations
   - User authentication checks via `isLoggedIn` middleware
   - Role-based access control

4. **Input Validation**
   - Joi schema validation for all user inputs
   - Data sanitization
   - Error message handling

5. **Error Handling**
   - Custom ExpressError class
   - Centralized error middleware
   - Detailed error logging

### Middleware Stack

```javascript
// App initialization middleware
- express.json() / express.urlencoded()
- methodOverride() - For PUT/DELETE support
- express.static() - Static file serving

// Session & Authentication
- express-session - Session management
- connect-flash - Flash messaging
- passport.initialize() - Passport setup
- passport.session() - Persistent login

// Custom middleware
- isLoggedIn() - Authentication check
- isOwner() - Authorization check
- validateListing() - Input validation
- validateReview() - Review validation
- isreviewAuthor() - Review author check

// Error handling
- Custom error middleware - Centralized error handling
```

---

## 🎨 Frontend

### Technologies Used
- **EJS** - Server-side templating engine
- **Bootstrap 5** - CSS framework for responsive design
- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **Vanilla JavaScript** - Client-side interactivity

### Pages/Views

1. **Index Page** (`index.ejs`)
   - Displays all listings in grid layout
   - Search and filter functionality
   - Responsive card design

2. **Show Page** (`show.ejs`)
   - Detailed listing information
   - Image gallery
   - Reviews section with ratings
   - Add review form
   - Edit/Delete buttons (for owner)

3. **New Listing** (`new.ejs`)
   - Form to create new listing
   - Image upload input
   - Form validation

4. **Edit Listing** (`edit.ejs`)
   - Pre-filled listing form
   - Image update option
   - Validation feedback

5. **Error Page** (`error.ejs`)
   - Custom error display
   - Error message rendering
   - Navigation options

6. **User Pages** (`views/users/`)
   - Login form
   - Registration form
   - Profile management

### UI Features
- 🎯 Responsive navigation bar
- 🎯 Bootstrap grid system
- 🎯 Form validation feedback
- 🎯 Flash message notifications
- 🎯 Image optimization with Cloudinary transformations
- 🎯 Modal dialogs for confirmations

---

## 📚 Project Components

### Models (`models/`)

**Listing.js**
- Manages property listing data
- References reviews and owner
- Post-hook for cascade delete reviews

**User.js**
- User account management
- Passport Local Mongoose integration
- Authentication methods

**Review.js**
- Stores user reviews and ratings
- References author and listing
- Timestamp tracking

### Controllers (`controllers/`)

**listing.js**
```javascript
- index()           // Get all listings
- renderNewForm()   // Show create form
- showListing()     // Show single listing with reviews
- createListing()   // Create new listing
- renderEdit()      // Show edit form
- updateListing()   // Update listing
- destroyListing()  // Delete listing
```

**reviews.js**
```javascript
- createReview()    // Create new review
- destroyReview()   // Delete review
```

**users.js**
```javascript
- signup()          // Register user
- login()           // Authenticate user
- logout()          // Logout user
```

### Routes (`routes/`)

**listing.js**
- CRUD operations for listings
- Image upload with Multer
- Middleware chain for validation

**review.js**
- Review creation and deletion
- Rating validation

**user.js**
- Authentication routes
- Session management

### Middleware (`middleware.js`)

- `isLoggedIn()` - Check if user is authenticated
- `saveRedirectUrl()` - Save redirect URL for post-login
- `isOwner()` - Verify listing ownership
- `validateListing()` - Validate listing input
- `validateReview()` - Validate review input
- `isreviewAuthor()` - Verify review authorship

### Utilities (`utils/`)

**ExpressError.js**
```javascript
class ExpressError extends Error {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
```

**wrapAsync.js**
```javascript
// Wrapper for async route handlers
// Catches errors and passes to error middleware
```

---


## 👨‍💻 Author

**Rudra Prakash**
- GitHub: [@rudra610prakash-code](https://github.com/rudra610prakash-code)
- Repository: [Wanderlust](https://github.com/rudra610prakash-code/Wanderlust)

---






### Made with ❤️ by Rudra Prakash


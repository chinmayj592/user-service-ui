# User Service UI - Frontend

A modern, colorful React frontend for managing users with an attractive UI, responsive design, and smooth animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will run on **http://localhost:5173**

---

## ✨ Features

✅ **User Management**
- View all users with pagination
- Create new users
- Edit existing users
- Delete users with confirmation

✅ **Modern UI**
- Gradient buttons and header (Indigo + Pink)
- Smooth animations and hover effects
- Responsive design (Desktop, Tablet, Mobile)
- Professional color system

✅ **Form Validation**
- Email, Aadhaar, PAN validation
- Required field checks
- User-friendly error messages

✅ **Navigation**
- Home page with quick access
- Header navigation
- Routing between pages

✅ **Performance**
- Pagination support
- Axios API integration
- Loading states

---

## 📁 Project Structure

```
src/
├── pages/                    # Page components
│   ├── HomePage.jsx         # Landing page
│   ├── UserListPage.jsx     # View all users
│   ├── CreateUserPage.jsx   # Create new user
│   └── EditUserPage.jsx     # Edit user
│
├── components/              # Reusable components
│   ├── UserForm.jsx        # Form for create/edit
│   └── Pagination.jsx      # Pagination controls
│
├── api/                     # API calls
│   ├── axiosInstance.js    # Axios configuration
│   └── userApi.js          # User API endpoints
│
├── styles/                 # CSS styling
│   ├── CreateUser.css
│   ├── UserList.css
│   ├── pagination.css
│   └── App.css
│
├── utils/                  # Utility functions
│   └── MaskUtils.js       # Input masking
│
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

---

## 🎨 Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling with gradients & animations

---

## 📝 Usage

**Home Page** → Choose action
- View All Users
- Create New User

**Users Page** → Manage users
- See all users in paginated table
- Edit user (pencil icon)
- Delete user (trash icon)

**Create/Edit** → Add or modify user data
- Personal info (Name, Email, DOB)
- Address info (Street, City, State, Zip)
- IDs (Aadhaar, PAN, Passport)

---

## 🔗 Dependencies

- `react` - Core library
- `react-router-dom` - Routing
- `axios` - API requests

Install: `npm install`

---

## ✅ Backend Connection

Ensure backend is running on **http://localhost:8080**

API Endpoints Used:
- `GET /users` - Fetch all users (with pagination)
- `POST /users` - Create user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (Full layout)
- **Tablet**: 768px - 1023px (Adjusted spacing)
- **Mobile**: Below 768px (Stacked layout)

---

## 🎯 Key Features Implementation

| Feature | Status |
|---------|--------|
| User List with Pagination | ✅ |
| Create User | ✅ |
| Edit User | ✅ |
| Delete User | ✅ |
| Form Validation | ✅ |
| Responsive Design | ✅ |
| Modern UI/UX | ✅ |
| Error Handling | ✅ |

---

Made with ❤️ for better user management experience!


# Todo App Frontend

This is the frontend for the Todo application built with React and Vite.

## Features

- Modern React with hooks
- Responsive design
- Task management interface
- Priority and status tracking
- RESTful API integration
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- Git

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file for local development:

```env
VITE_API_URL=http://localhost:5001/api
```

Create a `.env.production` file for production deployment:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3. Running the Application

#### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

#### Build for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

#### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/                  # Source code
│   ├── services/         # API service functions
│   ├── components/       # React components
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── api.js            # Axios configuration
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── .env                  # Development environment variables
└── .env.production       # Production environment variables
```

## Development

### Components

The main component is `App.jsx` which handles:
- Task listing
- Task creation form
- Task status updates
- Task deletion

### Services

API calls are handled by the service functions in `src/services/taskService.js`:
- `fetchTasks()` - Get all tasks
- `createTask()` - Create a new task
- `updateTask()` - Update a task
- `patchTask()` - Partially update a task
- `deleteTask()` - Delete a task

### API Configuration

The API client is configured in `src/api.js` and uses the `VITE_API_URL` environment variable.


## Challenges Faced During Development and Deployment

### 1. Environment Variable Configuration
- **Problem**: Confusion between development and production environment variables
- **Solution**: Created separate `.env` and `.env.production` files with correct API URLs
- **Learning**: Vite requires `VITE_` prefix for environment variables to be exposed to client-side code

### 2. API Connection Issues
- **Problem**: "Network Error" and "ERR_CONNECTION_REFUSED" when frontend couldn't connect to backend
- **Solution**: Ensured frontend `.env` file pointed to correct backend port (5001) and both servers were running
- **Learning**: Always verify port configurations match between frontend and backend

### 3. Netlify Functions Conflict
- **Problem**: Netlify functions were intercepting API requests instead of letting them reach the Render backend
- **Solution**: Disabled Netlify functions and updated `netlify.toml` configuration
- **Learning**: Be careful with serverless functions that might conflict with external backend services

### 4. Build Configuration Issues
- **Problem**: Incorrect base path configuration causing issues with static asset loading
- **Solution**: Set `base: './'` in `vite.config.js` for proper relative path resolution
- **Learning**: Vite base path configuration is crucial for static hosting platforms

### 5. CORS and Cross-Origin Issues
- **Problem**: Browser blocking requests due to CORS policy
- **Solution**: Configured backend CORS to allow frontend domains
- **Learning**: Both frontend and backend need to be configured for proper cross-origin communication

### 6. State Management Challenges
- **Problem**: "c.map is not a function" errors when API responses weren't arrays
- **Solution**: Added proper data validation and error handling in React components
- **Learning**: Always validate API response types before using array methods

## Features

- Modern React with hooks
- Responsive design
- Task management interface
- Priority and status tracking
- RESTful API integration
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- Git

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file for local development:

```env
VITE_API_URL=http://localhost:5001/api
```

Create a `.env.production` file for production deployment:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3. Running the Application

#### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

#### Build for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

#### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/                  # Source code
│   ├── services/         # API service functions
│   ├── components/       # React components
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── api.js            # Axios configuration
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── .env                  # Development environment variables
└── .env.production       # Production environment variables
```

## Development

### Components

The main component is `App.jsx` which handles:
- Task listing
- Task creation form
- Task status updates
- Task deletion

### Services

API calls are handled by the service functions in `src/services/taskService.js`:
- `fetchTasks()` - Get all tasks
- `createTask()` - Create a new task
- `updateTask()` - Update a task
- `patchTask()` - Partially update a task
- `deleteTask()` - Delete a task

### API Configuration

The API client is configured in `src/api.js` and uses the `VITE_API_URL` environment variable.

`VITE_API_URL`: `https://your-backend-url.onrender.com/api`

## Common Issues I faced i mentioned below 

### API Connection Errors

- Check that your backend server is running
- Verify the `VITE_API_URL` in your environment files
- Ensure CORS is properly configured on the backend

### Build Errors

- Make sure all dependencies are installed
- Check for syntax errors in your code

### Environment Variables Not Loading

- Ensure environment variables are prefixed with `VITE_`
- Restart the development server after changing environment files



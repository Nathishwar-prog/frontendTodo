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

## Deployment to Netlify

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository.

### 2. Create Site on Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository

### 3. Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 4. Environment Variables

Set the following environment variable in Netlify:
- `VITE_API_URL`: `https://your-backend-url.onrender.com/api`

## Customization

### Styling

Styles are defined in `src/App.css`. You can modify the CSS classes to change the appearance.

### API Endpoints

The API endpoints are defined in `src/services/taskService.js`. You can modify the paths if your backend API changes.

## Common Issues

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

## License

This project is licensed under the MIT License.

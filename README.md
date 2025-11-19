# Todo App Frontend

I use React with vite to build this application

## I added the you  Features  mentioned in the assigment document
- React with hooks
- Responsive design
- Task management  interface
- Status tracking like completed,notcompleted,like this


## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Must create this files and add the api key i mentioned below and then run otherwise it show error [ I created two files for local working env and for production env.production this file fetch data from the real backend i host on the render 

Create a .env file for local development:

```env
VITE_API_URL=http://localhost:5001/api
```

Create a .env.production file for production 

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3. Run this application


```bash
npm run dev
```

The application will be run at `http://localhost:5173`.


## Project Structure

```
frontend/
  1) src/[ services, components , app.jsx , main.jsx , api.js ]   
  2) public[this have the images and other files ]             
  3) index.html           
  4) vite.config.js        
  5) .env[this contains the api key for local testing]                  
  6) env.production[this use the render api key ]      
```



## Challenges Faced During Development and Deployment

### 1. Environment Variable Configuration 
Confusion between development and production environment variables
so that i create a two separate .env and .env.production files with correct API URLs

### 2. API Connection Issues
Network Error and refused to connect when frontend couldn't connect to backend
so i then i realise must run the both server on different port so i use 5000 for frontend and 5001 for backend

### 3. Netlify Functions Conflict
when i hoseted frontend on netify but Netlify functions were intercepting API requests instead of letting them reach the Render backend
so i Disabled Netlify functions and updated `netlify.toml` configuration

### 4. CORS 
Browser blocking requests due to CORS policy
Configured backend CORS to allow frontend domains like some only allowed localhost 5000 and backend render api key only allowd but still sometimes it show error so thet i allow all regions .





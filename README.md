# Credit Report Application

A full-stack application for processing and managing XML credit report data with a responsive web interface.

## Project Overview

This application enables users to:

- Upload XML files containing credit report data
- Process and store reports in MongoDB
- View and manage reports through an intuitive web interface
- Delete unnecessary reports as needed

The project is split into two main components:

- **Backend**: Handles file processing, database operations, and API endpoints
- **Frontend**: Provides a user-friendly interface for report management

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- xml2js
- cors
- typescript

### Frontend

- React.js
- Tailwind CSS
- React Router Dom
- Redux toolkit
- Axios
- Modern responsive design principles

### Storage

- MongoDB for report data
- Local/Cloud file system for XML storage

## Getting Started

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/bhaveshbalendra/creaditsea.git
cd creditsea
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Configure environment variables:
   Create a `.env` file in the backend directory with:

```plaintext
MONGO_URI=your-mongodb-uri
PORT=5000
```

4. Start the server:

```bash
npm run dev
```

The backend service will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/`

## Project Structure

```
creditsea/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   ├── .env
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── store/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── MainLayout.tsx
│   │   └── index.css
│   ├── package.json
└── README.md
```

## Troubleshooting

Common issues and solutions:

1. **MongoDB Connection Errors**

   - Verify your MongoDB URI in the `.env` file
   - Ensure MongoDB is running and accessible
   - Check network connectivity

2. **File Upload Issues**
   - Verify file size is within limits
   - Ensure proper XML format
   - Check storage permissions

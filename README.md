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
- Jest & Supertest for testing

### Frontend
- React.js
- React Testing Library
- Modern responsive design principles

### Storage
- MongoDB for report data
- Local/Cloud file system for XML storage

## Getting Started

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/your-repo/credit-report-app.git
cd credit-report-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Configure environment variables:
Create a `.env` file in the backend directory with:
```plaintext
MONGODB_URI=your-mongodb-uri
PORT=5000
```

4. Start the server:
```bash
npm start
```

The backend service will be available at `http://localhost:5000`

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
npm start
```

The application will be accessible at `http://localhost:3000`

## API Documentation

### Upload Report
```
POST /upload
```
Upload an XML credit report file.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: xmlFile (File)

**Response:**
- Success: 200 OK
  ```json
  {
    "message": "File uploaded successfully!"
  }
  ```
- Error: 400 Bad Request
  ```json
  {
    "error": "No file uploaded"
  }
  ```

### Get All Reports
```
GET /reports
```
Retrieve all stored credit reports.

**Response:**
- Success: 200 OK
  ```json
  [
    {
      "id": "report_id",
      "data": "report_data",
      ...
    }
  ]
  ```
- Error: 500 Internal Server Error

### Delete Report
```
DELETE /report/:id
```
Remove a specific report by ID.

**Parameters:**
- id: Report identifier (URL parameter)

**Response:**
- Success: 200 OK
  ```json
  {
    "message": "Report deleted successfully!"
  }
  ```
- Error: 500 Internal Server Error

## Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## Project Structure
```
credit-report-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── tests/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   ├── tests/
│   └── package.json
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository or contact the maintenance team.

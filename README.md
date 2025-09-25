[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20712279&assignment_repo_type=AssignmentRepo)
# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

This project implements comprehensive testing and debugging for a MERN stack application. The following strategies and tools were used:

1. **Testing environments** are set up for both client (React) and server (Express/MongoDB) using Jest, React Testing Library, Supertest, and Cypress.
2. **Unit tests** cover React components (Button, Input, Form, PostList, ErrorBoundary) and server logic (Mongoose models, middleware).
3. **Integration tests** verify API endpoints and component interactions.
4. **End-to-end tests** are provided in the `client/cypress` folder for user flows.
5. **Debugging techniques** include error boundaries in React, a global Express error handler, and logging.

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Clone the repository
2. Install dependencies for both client and server:
  - `cd client && npm install`
  - `cd ../server && npm install`
3. Start MongoDB locally or use Atlas
4. Run the server: `node src/index.js` (or use nodemon)
5. Run the client (if using Create React App): `npm start`
6. Run tests as described below

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Testing Strategy

### Client
- **Unit tests**: Located in `client/src/tests/unit/`, covering all main React components.
- **Integration tests**: In `client/src/tests/integration/`, simulating user flows across components.
- **End-to-end tests**: Cypress tests in `client/cypress/` (e.g., `sample.cy.js`).
- **Run tests**: `npm test` or `npm run test:unit` from the `client` directory.

### Server
- **Unit tests**: In `server/tests/unit/`, covering models and middleware.
- **Integration tests**: In `server/tests/integration/`, covering API endpoints with Supertest and MongoDB Memory Server.
- **Run tests**: `npm test` or `npm run test:unit` from the `server` directory.

### Coverage
- Jest is configured to collect coverage. Run `npm test -- --coverage` in client or server to generate reports.
- Aim: At least 70% code coverage for unit tests.

### Debugging Techniques
- **Client**: Error boundaries (`ErrorBoundary.jsx`), use of React DevTools.
- **Server**: Global error handler middleware, logging errors to the console, use of Node.js debugger.

### Test Coverage Reports
- After running tests with coverage, view the generated HTML report in the `coverage` folder.
- (Add screenshots here after running tests)

---

For more details, see the assignment instructions in `Week6-Assignment.md`.

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 
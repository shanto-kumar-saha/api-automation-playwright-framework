# Playwright API Automation Testing (API Client Architecture & CI Integration)

This project is a scalable **API Automation Testing Framework** built using **Playwright (JavaScript)**.  

It follows industry-standard design patterns such as **API Client Architecture**, **Data-driven testing**, and **centralized configuration management** to ensure maintainability, reusability, and scalability.

The framework is designed to validate REST APIs with proper assertions, modular structure, and CI/CD readiness.

---


# 👨‍💻 Author Info

* Author: Shanto Kumar Saha
* Project Type:  Playwright API Automation Testing (API Client Architecture & CI Integration)

---

# 📌 Project Key Features

✔ API Client-based Architecture (like POM for API)  
✔ Centralized environment configuration (`env.js`)  
✔ Data-driven testing approach  
✔ Reusable API methods for maintainability  
✔ Supports GET, POST, PUT, and Single Resource APIs  
✔ Clean separation of test data and test logic  
✔ Built-in assertions for status code & response validation  
✔ Scalable and modular framework design 


## 📁 Project Structure

```bash
api-automation-framework/
│
├── env.js # Environment configuration (base URL setup)
│
├── api/
│ └── clients/
│ └── productClient.js # API Client Layer (Reusable API methods)
│
├── test-data/
│ └── productData.js # Test payloads and data management
│
├── tests/products/
│ ├── getProducts.spec.js
│ ├── getSingleProduct.spec.js
│ ├── createProduct.spec.js
│ ├── updateProduct.spec.js
│
├── playwright.config.js # Playwright test configuration
│── package.json
│── README.md
```

---

🏗️ Framework Architecture

```bash
Test Layer (spec files)
        ↓
API Client Layer (productClient.js)
        ↓
Environment Config (env.js)
        ↓
Test Data Layer (productData.js)
        ↓
Playwright API Request Execution
```
---

## 🧪 API Test Coverage

The framework validates the following API operations:

- GET All Products
- GET Single Product
- CREATE Product
- UPDATE Product

Each API test includes:
- Status Code Validation
- Response Body Validation
- Data Integrity Checks

---

## CI/CD Integration (Ready)

This framework is designed to support **GitHub Actions CI pipeline**, enabling:
- Automatic test execution on every push
- Dependency installation in CI environment
- Browser setup for Playwright
- HTML report generation

---

# ⚙️ CI Workflow

```bash
Developer Push Code
        ↓
GitHub Actions Trigger
        ↓
Install Dependencies
        ↓
Install Playwright Browsers
        ↓
Run Playwright Automation Tests
        ↓
Generate HTML Report
        ↓
Upload Test Report Artifact
``` 

---

## 🛠️ Tech Stack
- Playwright (JavaScript)
- Node.js
- REST API Testing
- Git & GitHub
- CI/CD (GitHub Actions Ready)

---

##  Key Skills Demonstrated

- API Automation Testing
- Playwright Framework Development
- JavaScript Automation
- API Client Architecture Design
- Data-driven Testing
- CI/CD (GitHub Actions Ready)
- REST API Validation
- Test Framework Design & Scalability

---

#  How to Run Tests

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/products/getProducts.spec.js

# View HTML Report
npx playwright show-report
```
---


# 📸 Udemy Course Complete Certificate

![Playwright Automation Framework With JavaScript](https://github.com/shanto-kumar-saha/Playwright_WebAutomation1/assets/122052172/a86a3335-6811-41df-a8e3-972675f4ceb5)

---

Developed ❤️ by Shanto Kumar Saha

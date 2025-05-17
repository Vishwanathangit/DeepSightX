<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🧠 DeepSightX – AI-Powered Eye & Neurological Disease Detection

**DeepSightX** is a smart, AI-powered web application that detects retinal and neurological conditions using facial and eye images. Users can upload photos or perform live webcam checks to get real-time predictions, diagnostic reports, and suggested specialists.

## 🚀 Demo

[Live Site 🌐](https://deepsightx.netlify.app)

## 📸 Key Features

- 🧠 AI-based detection for eye and neuro-related diseases
- 📷 Upload & Live webcam prediction modes
- 📝 Generates downloadable PDF reports
- 🏥 Hospital and specialist finder with filtering
- 💻 Responsive design for all devices

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **PDF Generation**: `@react-pdf/renderer`
- **Backend API**: Roboflow API (external AI model)
- **Routing**: React Router
- **Icons**: Lucide Icons
- **Camera**: `react-webcam`

---

## 📂 File Structure

<Pre>
  ```
  React-DeepSightX/
├── public/
│ ├── logo.png
│ └── _redirects
├── src/
│ ├── assets/ # Static images (doctor, hospital logos)
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── EyeResult.jsx
│ │ └── UploadAndCheck.jsx
│ ├── error_pages/ # Custom error pages
│ │ ├── Error_404.jsx
│ │ └── Error_500.jsx
│ ├── hooks/ # Custom hooks
│ │ └── useScrollToTop.js
│ ├── pages/ # Main route pages
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Diseases.jsx
│ │ ├── Hospitals.jsx
│ │ └── Doctors.jsx
│ ├── utils/ # Helper files, styles, mock data
│ │ ├── data.js
│ │ ├── Pdf.jsx
│ │ └── PdfStyle.jsx
│ ├── App.jsx # App with Routes
│ ├── main.jsx # Entry point
│ └── index.css # TailwindCSS imports
├── index.html
├── eslint.config.js
├── README.md
└── package.json
  ```
</Pre>


---

## 📦 Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/React-DeepSightX.git
cd React-DeepSightX

### 2. Install Dependencies

npm install

### 3. Start Development Server

npm run dev

📃 PDF Report Example
The application generates a downloadable diagnostic report as a PDF containing:

Eye-wise detection

Accuracy percentage

Disease description

Original image

🙏 Acknowledgements
Roboflow for AI detection API

Lucide Icons

React PDF Renderer

Inspired by real-world clinical use cases

GitHub Repo : []
>>>>>>> a2f66739ec90689978b3358db9e930cc167aac96

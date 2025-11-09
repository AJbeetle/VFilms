# V-Films Frontend Application

A modern, feature-rich single-page web application built with React, TypeScript, and Vite. This project showcases a cinematic film production company website with smooth animations, form validation, and API integration.

## 🚀 Live Demo

**Deployed Application**: [https://v-films-two.vercel.app/](https://v-films-two.vercel.app/)

## ✨ Features

### Implemented Features
- ✅ **Modern React Architecture**: Built with React 18 + TypeScript + Vite for optimal performance
- ✅ **GSAP Animations**: Smooth horizontal scrolling and interactive animations throughout the site
- ✅ **Frontend Routing**: Client-side navigation for seamless user experience
- ✅ **Smart Contact Form**: 
  - Real-time input validation
  - Email format validation
  - Phone number validation
  - Empty field prevention
  - Toast notifications on successful submission
- ✅ **API Integration**: Fully functional contact form with POST requests to backend
- ✅ **Modern UI/UX**: Clean, cinematic design with smooth transitions and hover effects
- ✅ **Loading States**: Visual feedback during form submission
- ✅ **Error Handling**: Comprehensive error management for API calls
- ✅ **Vercel Deployment**: Production-ready deployment with CI/CD

### Known Limitations
- ⚠️ **Responsiveness**: Mobile and tablet views need optimization
- ⚠️ **Services Page**: Individual services pages not yet implemented

## 🛠️ Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwindcss
- **Routing**: React Router DOM
- **HTTP Client**: async/await fetch
- **Notifications**: Toast notifications
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm**  package manager
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd v-films
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory (if needed for environment variables):
```env
VITE_API_BASE_URL=https://vernanbackend.ezlab.in/api
```

### 4. Run Development Server
```bash
npm run dev

```

The application will start at `http://localhost:5173/`

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

### 6. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 🎨 Key Features Breakdown

### Contact Form Validation
The contact form includes comprehensive validation:
- **Name**: Required field, minimum 2 characters
- **Email**: Required field, valid email format check
- **Phone**: Required field, numeric validation
- **Message**: Required field, minimum 10 characters

### API Integration
- **Method**: POST
- **Request Format**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Your message here"
}
```

### GSAP Animations
- Horizontal scroll effects
- Smooth page transitions
- Interactive hover animations
- Fade-in effects on scroll

## 📮 Postman Collection

A complete Postman collection is included in the repository at:
```
/postman/V-Films-API.postman_collection.json
```

**To import**:
1. Open Postman
2. Click "Import" button
3. Select the JSON file
4. Test the contact form API endpoint

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments on push to main branch.

**Manual Deployment**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔍 Testing the Application

### Test Contact Form:
1. Navigate to the contact page
2. Fill in all required fields
3. Submit the form
4. Check for success toast notification
5. Verify API response in browser console

### Test API with Postman:
1. Import the Postman collection
2. Send POST request to contact endpoint
3. Verify 200 status response

## 🐛 Known Issues & Future Improvements

### To Be Implemented:
- [ ] Mobile responsive design (320px - 768px)
- [ ] Tablet responsive design (768px - 1024px)
- [ ] Individual services pages
- [ ] Form reset functionality after submission
- [ ] Better error messages for API failures
- [ ] Loading skeleton screens
- [ ] Accessibility improvements (ARIA labels)

## 📝 Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "tsc && vite build",     // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint . --ext ts,tsx",  // Run ESLint
  "type-check": "tsc --noEmit"      // TypeScript type checking
}
```

## 🤝 Contributing

If you'd like to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created as part of a frontend developer assessment.

## 👤 Author

**Your Name**
- GitHub: [@AJbeetle]
- Live Demo: [https://v-films-two.vercel.app/](https://v-films-two.vercel.app/)


**Built with ❤️ using React + TypeScript + Vite**
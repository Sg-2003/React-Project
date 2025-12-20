# ✈️ Airline Booking System

A modern, responsive airline booking web application built with React and Vite. This application provides an intuitive interface for users to search and book flights, explore destinations, and manage their travel plans.

## 🚀 Features

- **Hero Section**: Engaging homepage with video background and animated airplane graphics
- **Flight Search**: Comprehensive search functionality with location, date, and traveler selection
- **Class Selection**: Choose between Economy, Business Class, and First Class
- **Destination Showcase**: Browse popular destinations including Dubai, London, New York, and Paris
- **Traveler Testimonials**: Read reviews and experiences from other travelers
- **Lounge Information**: Learn about airport lounge facilities and amenities
- **Support Section**: Access customer support and help resources
- **Newsletter Subscription**: Stay updated with travel deals and promotions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Beautiful scroll animations powered by AOS (Animate On Scroll)

## 🛠️ Technologies Used

- **React 19.2.0** - Modern React framework
- **Vite 7.2.4** - Fast build tool and development server
- **AOS (Animate On Scroll) 2.3.4** - Scroll animations library
- **React Icons 5.5.0** - Icon library
- **SCSS** - Styling with CSS preprocessor
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
fly/
├── src/
│   ├── Components/
│   │   ├── Footer/          # Footer component
│   │   ├── Home/            # Hero/homepage section
│   │   ├── Info/            # Information section
│   │   ├── Lounge/          # Lounge information
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Search/          # Flight search form
│   │   ├── Subscribers/     # Newsletter subscription
│   │   ├── Support/         # Customer support section
│   │   └── Travelers/       # Traveler testimonials
│   ├── assets/              # Images, videos, and static files
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── main.scss            # Main stylesheet
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React/fly
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Components Overview

- **Navbar**: Top navigation bar with menu items
- **Home**: Hero section with video background and call-to-action
- **Search**: Flight search form with location, date, and traveler inputs
- **Support**: Customer support and help section
- **Info**: Additional information about services
- **Lounge**: Airport lounge facilities and amenities
- **Travelers**: Customer testimonials and reviews
- **Subscribers**: Newsletter subscription form
- **Footer**: Footer with links and company information

## 🎯 Key Features Explained

### Flight Search
The search component allows users to:
- Select departure and destination locations
- Choose travel dates
- Specify number of travelers
- Select travel class (Economy, Business, First Class)

### Animations
The application uses AOS library for smooth scroll animations, enhancing user experience with fade-in and slide-up effects as users scroll through the page.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Production Dependencies
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `aos`: ^2.3.4

### Development Dependencies
- `@vitejs/plugin-react`: ^5.1.1
- `vite`: ^7.2.4
- `eslint`: ^9.39.1
- `@types/react`: ^19.2.5
- `@types/react-dom`: ^19.2.3

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development Notes

- The project uses Vite for fast HMR (Hot Module Replacement) during development
- SCSS is used for styling with a modular component-based approach
- All components are functional components using React hooks
- AOS animations are initialized in components that require scroll animations

## 🔮 Future Enhancements

- Backend integration for actual flight booking
- User authentication and account management
- Payment gateway integration
- Real-time flight availability and pricing
- Booking history and management
- Email notifications for bookings

---

Made with ❤️ using React and Vite

# TCS iON Digital Interactive Landing Page

## Project Overview

This project is a modern, responsive, and interactive landing page for **TCS iON Digital**, an educational technology platform by Tata Consultancy Services. The landing page showcases the organization’s innovative digital solutions for education including Learning Management, Digital Assessment, Student Analytics, and Virtual Learning.

The design emphasizes rich animations, smooth scrolling, dynamic content, and accessibility to create a compelling user experience that reinforces TCS iON’s brand identity.

---

## Features

- **Animated Loader and Brand Reveal:** An engaging full-screen loader with GSAP-powered animations introduces the brand.
- **Sticky Navigation Bar:** Animated links with an interactive dropdown menu for social connections.
- **Hero Section:** Oversized typography with real-time GMT +5:30 clock display and SVG-based logo animation.
- **Bento Grid Showcase:** Responsive grid highlighting key solutions with hover-scale effects.
- **Expandable Product Details:** Accessible accordions revealing detailed descriptions with stylish overlay effects.
- **Process Visualization:** Stepwise workflow section outlining the strategy and deployment methodology.
- **Confetti Celebration:** Colorful confetti animation triggered on CTA button clicks to enhance engagement.
- **Smooth Scrolling:** Leveraging Locomotive Scroll and Lenis libraries for inertia-scroll effects.
- **Custom Cursor Effects:** Interactive media hover bubbles (using Shery.js).
- **Responsive Design:** Full device and screen size adaptability using CSS Grid, Flexbox, and media queries.
- **Accessibility:** Use of alt attributes, ARIA labels, keyboard navigation support, and semantic HTML.

---

## Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Grid, Animations, Media Queries)
- **JavaScript (ES6+)**
- **GSAP (GreenSock Animation Platform)** for animations
- **Locomotive Scroll & Lenis** for smooth scrolling
- **Shery.js** for hover media effects
- **Canvas Confetti** for celebratory effects
- **Swiper.js** (prepared for carousel functionality)
- **Three.js** (included for possible 3D enhancements)
- **Remixicon** icon font library

---

## Folder Structure
project-root/
│
├── index.html # Main HTML file
├── style.css # Stylesheet
├── script.js # JavaScript file containing animations and interactions
├── Assets/ # Folder containing images, SVGs, fonts, and other assets
│ ├── img1.jpeg
│ ├── img2.jpeg
│ ├── img3.jpeg
│ ├── fonts/
│ │ ├── Gilroy-Medium.ttf
│ │ └── Mazius-Extraitalic.otf
│ └── ...
└── README.md # This file


---

## Setup and Installation

1. **Clone the repository** or download the project files.

2. Make sure the `Assets/` folder is properly placed alongside `index.html`, including the fonts and images.

3. Open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Edge).

---

## Usage

- The page automatically starts with a loader animation.
- Navigation links include a dropdown menu under "Connect" with social links.
- The live clock updates every second, showing time in IST (GMT +5:30).
- Hover over the solution grid to see scale and shadow animations.
- Click on expandable sections to view detailed product descriptions.
- Click on the “Join the Magic” button to see the confetti animation.
- Scroll smoothly through the page thanks to Locomotive Scroll & Lenis.

---

## Customization

- **Assets:** Replace images and font files inside the `Assets/` folder to customize visuals.
- **Animations:** Modify or extend GSAP timelines inside `script.js` to tailor animation sequences.
- **Content:** Update textual content in `index.html` as per your organizational needs.
- **Colors & Styling:** Edit `style.css` to adjust colors, typography, and layout.

---

## Known Considerations

- The project currently includes **both Locomotive Scroll and Lenis** smooth scroll libraries; typically, only one is recommended to avoid conflicts. Adjust as needed based on use case.
- Fonts `Gilroy` and `Mazius` must be hosted correctly; otherwise, fallback fonts will be used.
- Some features (e.g., Swiper.js and Three.js) are included for potential future expansion but may not be fully functional without additional markup or configuration.
- Ensure JavaScript is enabled in the browser for the full interactive experience.
- Performance on very low-end devices may vary due to rich animations.

---

## Browser Compatibility

Tested and supported on the latest versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Apple Safari (Desktop and iOS)
- Mobile browsers (iOS Safari and Android Chrome)

---

## Contribution

This project is designed primarily as a static landing page. Contributions can be made by:

- Improving accessibility features
- Enhancing responsiveness and mobile optimization
- Adding additional modules or interactive components
- Fixing bugs or raising issues on the repo

Please fork the repo and submit pull requests for any improvements.

---

## License

This project is for educational and demonstration purposes. Please check with TCS policies for commercial usage.

---

## Credits

- Designed and developed by Shashank Dev  
- Powered by GSAP, Locomotive Scroll, Lenis, Shery.js, Three.js, Swiper.js, Canvas-Confetti  
- Iconography by Remixicon

---

## Contact

For any queries or support, please contact:  
**Email:** 231b307@juetguna.in  
**Website:** https://reimaginedtcs.onrender.com 

---

*Thank you for exploring the TCS iON Digital Interactive Landing Page project!*


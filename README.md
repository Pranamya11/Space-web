# Space Web - React Version

A modern, interactive space exploration website built with React. Explore planets, learn about celestial bodies, and interact with an AI chatbot that knows about space!

## Features

- **Interactive Planet Explorer**: Click on any planet to see detailed information, stats, and moons
- **AI Chatbot**: Ask questions about planets, their moons, gravity, and more
- **Smooth Animations**: Beautiful AOS (Animate On Scroll) animations throughout
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, space-themed design with smooth interactions

## Planets Included

- **Mercury**: Closest to the Sun
- **Venus**: The hottest planet
- **Earth**: Our home planet with the Moon
- **Mars**: The Red Planet with Phobos and Deimos
- **Jupiter**: Largest planet with many moons
- **Saturn**: Famous for its rings
- **Uranus**: The tilted planet
- **Neptune**: The windiest planet
- **Special Objects**: Moon, Europa, Black Hole, Titan

## Chatbot Features

Ask the SpaceBot about:
- "Tell me about Mars"
- "What is the gravity of Jupiter?"
- "List moons of Saturn"
- "List all planets"
- "Help" for more examples

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd space-web-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── WhyUs.js        # Features section
│   ├── About.js        # About section
│   ├── Status.js       # Planet display section
│   ├── Destination.js  # Planet grid section
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   ├── ToTop.js        # Scroll to top button
│   └── Chatbot.js      # AI chatbot
├── data/
│   └── planetData.js   # Planet information
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18**: Modern React with hooks
- **AOS**: Animate On Scroll library
- **Feather Icons**: Beautiful icon set
- **CSS3**: Custom styling with animations
- **JavaScript ES6+**: Modern JavaScript features

## Features in Detail

### Interactive Planet Display
- Click any planet in the destination grid
- View detailed statistics and information
- See moons orbiting around planets
- Smooth scrolling to planet information

### AI Chatbot
- Floating chat button in bottom-right corner
- Ask questions about planets and space
- Get detailed responses with planet stats
- Support for moon queries and gravity questions

### Smooth Animations
- Header hides/shows on scroll
- Scroll-to-top button appears when needed
- AOS animations on all sections
- Smooth scrolling between sections

### Contact Form
- Fully functional contact form
- Form validation and reset
- Success message on submission

## Customization

### Adding New Planets
Edit `src/data/planetData.js` to add new planets:

```javascript
'PLANET_NAME': {
  name: 'Planet Name',
  image: '/assets/planet-image.jpg',
  moons: [
    { name: 'Moon Name', image: '/assets/moon-image.jpg' }
  ],
  desc: [
    { label: 'Stat Name', value: 'Stat Value' }
  ],
  description: 'Planet description'
}
```

### Styling
- All styles are in `src/index.css`
- Uses CSS custom properties for theming
- Responsive design with media queries

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Credits

- Space images from NASA
- Icons by Feather Icons
- Animations by AOS library
- Design by Angelo

---

**Explore the cosmos like never before!** 🚀✨
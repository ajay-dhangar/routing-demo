# Getting Started with Create React Routing App

This project was used to create a simple React app with routing. The app has a home page, about page, and contact page. The app was created using the create-react-app package.

if you want to learn more about React, you can check out the [React Mastery Course](https://ajay-dhangar.github.io/code-harbor-hub/courses/react-js/intermidiate-level/routing-for-spas/lesson-1) on CodeHarborHub. 

### Getting Started from Scratch

1. Create a new React app using the create-react-app package.
```bash
npx create-react-app routing-demo
```

2. Change into the new app directory.
```bash
cd routing-demo
```

3. Install the react-router-dom package.
```bash
npm install react-router-dom
```

4. Create a new folder called `pages` in the `src` directory.

5. Create a new file called `Home.js` in the `pages` directory.
```jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
    </div>
  );
};

export default Home;
```

6. Create a new file called `About.js` in the `pages` directory.
```jsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page.</p>
    </div>
  );
};

export default About;
```

7. Update file `App.js` in the `src` directory.
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
```

8. Start the development server.
```bash
npm start
```

9. Open a web browser and navigate to `http://localhost:3000/`.

10. You should see the home page. Click on the About link to navigate to the about page.
11. You have successfully created a simple React app with routing.

### Getting Started with the Code

1. Clone the repository.
```bash
git clone https://github.com/React-js-Mastery/routing-demo.git
```

2. Change into the project directory.
```bash
cd routing-demo
```

3. Install the dependencies.
```bash
npm install
```

4. Start the development server.
```bash
npm start
```

5. Open a web browser and navigate to `http://localhost:3000/`.
6. You should see the home page. Click on the About link to navigate to the about page.
7. You have successfully created a simple React app with routing.

### Resources

- [React Mastery Course in free for everyone](https://ajay-dhangar.github.io/code-harbor-hub/courses/react-js/intermidiate-level/routing-for-spas/lesson-1)

### License

This project is open source and available under the [MIT License](LICENSE).
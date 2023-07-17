import './App.css';

import Heading from './Components/Header/Heading';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Pages from './Pages/Pages'
import BottomNavigation from './Components/BottomNavigation/BottomNavigation'


function App() {
  // return (
  //   <>
  //   <header>
  //     <nav></nav>
  //   </header>
  //   <main>
  //     <section role="hero"></section>
  //     <section role="highlights">
  //       <article></article>
  //       <article></article>
  //       <article></article>
  //       <article></article>
  //       <article></article>
  //     </section>
  //     <section role="testimonials">
  //       <article></article>
  //       <article></article>
  //       <article></article>
  //     </section>
  //   </main>
  //   <section role="about"></section>
  //   <footer></footer>
  //   </>
  // );

  // return (
  //   <>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/' exact component={<Home />} />
  //       <Route path='/about' component={<About />} />
  //       {/* <Route path='/events' component={Events} />
  //       <Route path='/annual' component={AnnualReport} />
  //       <Route path='/team' component={Teams} />
  //       <Route path='/blogs' component={Blogs} />
  //       <Route path='/sign-up' component={SignUp} /> */}
  //     </Routes>
  //   </>
  // )

  // return (
    // <>
    //   <nav className="nav">
    //     <Link to="/" className="nav-item">Homepage</Link>
    //     <Link to="/about" className="nav-item">About</Link>
    //   </nav>
    //   <Routes >
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </>
  // )

  return (
    <>
      <Navbar/>
      {/* <Pages/> */}
      <BottomNavigation/>
    </>
  )
}

export default App;

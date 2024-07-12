import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
// import Social from "./components/Social";
import Project from "./components/Project";
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-screen  bg-[url('./assets/girl2.avif')] opacity-80 bg-cover bg-blend-overlay">
      <Routes>
        <Route path="/" element={<div><Navbar /><Title /></div>} />
        <Route path="/title" element={<div><Navbar /><Title /></div>} />
        <Route path="/project" element={<div><Navbar /><Project /></div>} />
        {/* <Route path="/navbar " element={<Navbar />} />
        <Route path="/social " element={<Social />} />
        <Route path="/title " element={<Title />} />
        <Route path="/project" element={<Project />} /> */}
        <Route path="/about" element={<div><Navbar /><About /></div>} />
        <Route path="/resume" element={<div><Navbar /><Resume /></div>} />
        <Route path="/contact" element={<div><Navbar /><Contact /></div>} />
      </Routes>
    </div>
  );
}

export default App;
// import './App.css';
// import Navbar from "./components/Navbar";
// import Title from "./components/Title";
// import Social from "./components/Social";
// import Project from "./components/Project";
// import { Routes, Route } from 'react-router-dom';
// import About from './components/About';

// function App() {
//   return (
//     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./assets/girl2.avif')" }}>
//       <div className="absolute inset-0 bg-blue-300 bg-opacity-[-20]"></div> {/* Light blue overlay with even lower opacity */}
//       <Routes>
//         <Route path="/" element={<div><Navbar /><Social /><Title /></div>} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


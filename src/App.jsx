import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Option from './components/options/Option';
import Project from './components/projects/Project';

function App() {
  return (
    <div className="app">
      <Option />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='projects'><Project /></section>
      <section id='contact'><Contact /></section>
    </div>
  );
}

export default App;

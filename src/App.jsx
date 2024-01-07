import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Option from './components/options/Option';

function App() {
  return (
    <div className="app">
      <Option />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
    </div>
  );
}

export default App;

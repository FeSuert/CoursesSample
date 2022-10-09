import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-blue-200">
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;

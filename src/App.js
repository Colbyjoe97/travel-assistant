import logo from './logo.svg';
import './App.css';
import Map from './components/map'

function App() {
  return (
    <div className="App">
        <div className="app-left">
            <h1>Sidebar</h1>
        </div>
        <div className="app-right">
            <Map />
        </div>
    </div>
  );
}

export default App;

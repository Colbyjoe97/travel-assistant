import logo from './logo.svg';
import './App.css';
import Map from './components/map'
import Sidebar from './components/sidebar'
import Location from './components/getLocation'

function App() {
  return (
    <div className="App">
        <div className="app-left">
            <h1>Sidebar</h1>
        </div>
        <div className="app-right">
            {/* <Map /> */}
            <Location />
        </div>
    </div>
  );
}

export default App;

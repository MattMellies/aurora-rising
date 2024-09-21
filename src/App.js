import './App.scss';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <p>main</p>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;

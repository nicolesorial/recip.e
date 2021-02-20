import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>RECIP.E LANDING PAGE</h1>
      </header>


      <ul>
        <li><Link to="newrecipe/auto">Automatic Recipe</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/newrecipe/manual">Manual Recipe</Link></li>
        <li><Link to="/newrecipe">New Recipe</Link></li>
        <li><Link to="/recipe">Recipe</Link></li>
      </ul>
    </div>
  );
}

export default App;

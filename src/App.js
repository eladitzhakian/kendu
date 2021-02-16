import './App.css';
import Logo from './kendu_logo_blk.png';

function App() {
  return (
    <div className="app">
      <img src={Logo} className="logo" alt="logo" />
      <div className="email">
        <a href="mailto:hello@kendu.io">hello@kendu.io</a>
      </div>
    </div>
  );
}

export default App;

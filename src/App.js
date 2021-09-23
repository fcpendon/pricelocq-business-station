import './App.css';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Logo />
      </header>
      <LoginForm />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="First" heroname="Batman" />
      <Greet name="Second" heroname="Supeman" />
      <Greet name="Third" heroname="Spiderman" />

      <Welcome name="First" heroname="Batman" />
      <Welcome name="Second" heroname="Supeman" />
      <Welcome name="Third" heroname="Spiderman" />

      <Message></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;

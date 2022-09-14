import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent12 from './components/ParentComponent';

function App() {

  
    const handleSubmit = event => {
     event.preventDefault();
     alert('You have submitted the form.')
   }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>


      <Greet name="First" heroname="Batman" />
      <Greet name="Second" heroname="Supeman" />
      <Greet name="Third" heroname="Spiderman" />

      <Welcome name="First" heroname="Batman" />
      <Welcome name="Second" heroname="Supeman" />
      <Welcome name="Third" heroname="Spiderman" />

      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ParentComponent12></ParentComponent12>
    </div>
  );
}

export default App;


import './App.css';
import Lab1 from './component/Lab1'
import Lab2 from './component/Lab2'
import Emoji1 from './component/Lab3';
import Calculator from './component/Lab4';



function App() {
  return (
    <div className="App">
      <Lab1 name =' Niharika'></Lab1>
      <Lab2 name =' Niharika'></Lab2>    
          
    
      <Emoji1 emoji1="😀" emoji2="😊" label="smiling face" />
      <Calculator />
      
    </div>
  );
}

export default App;


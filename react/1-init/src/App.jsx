import "./App.css";
import Greeting from "./Greeting.jsx";
import Food from "./Food.jsx";
import Test from "./Test.jsx";
import Button from "./Button.jsx";




const App = () => {
 
  const handleButtonClick = (msg) => {
    console.log(msg);
  };

  return (
    <>
    <div id="menu">
        <div id="button-menu">
          <Button text="text1" color="blue" fontSize="25" handleClick={() => handleButtonClick("button 1 blicked!")}> </Button>
          <Button text="text2" color="red" fontSize="35" handleClick={() => handleButtonClick("button 2 clicked!")}></Button>
          <Button text="text3" color="orange" fontSize="45" handleClick={() => handleButtonClick("button 3 clicked!")}></Button>
          <Button text="text4" color="green" fontSize="55" handleClick={() => handleButtonClick("button 4 clicked!")}></Button>
        </div>
      </div>
    </>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';


// internal CSS will not work
// const internal = {
//   border:'2px solid black'
// }


function App() {
  return (
    <div className="App">

      {/* Adding CSS Style in three ways into Heading... */}

      <h1 className='heading' style={{backgroundColor: 'red',color:'white'}}>User Data Base</h1>
     

    </div>
  );
}

export default App;

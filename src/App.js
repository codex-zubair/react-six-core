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

      <h1 className='heading' style={{ backgroundColor: 'red', color: 'white' }}>User Data Base</h1>

      {/* Second Core creating Component */}
      <Users></Users>
      <Users name='Manna Dey' email='mannadey@gmail.com' comment="50 later"></Users>


      {/* Lets Add Multiple  */}


    </div>
  );
}



const Users = (props) => {

  return (
    <div className='users' style={{marginTop:'10px', border:'2px solid black', borderRadius: '10px', margin:'10px'}}>
      <h3>{props.name} </h3>
      <h4>Email: {props.email}</h4>
      <p>{props.comment}</p>
    </div>
  )
}




export default App;

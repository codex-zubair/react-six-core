import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




// internal CSS will not work
// const internal = {
//   border:'2px solid black'
// }


function App() {

  // ! Declaring info Array of object.
  const userInfo = [
    {
      name: 'Manna dey',
      email: 'itsmemannadey@gmail.com',
      comment: 'million'
    },
    {
      name: 'Manna dey',
      email: 'itsmemannadey@gmail.com',
      comment: 'million'
    },
    {
      name: 'Manna dey',
      email: 'itsmemannadey@gmail.com',
      comment: 'million'
    },
    {
      name: 'Manna dey',
      email: 'itsmemannadey@gmail.com',
      comment: 'million'
    }
  ]

  return (
    <div className="App">

     {/* Lets Add Counter TO Check User State */}
     <Counter></Counter>




    {/* Lets load API Data */}

    

      
      {/* Adding CSS Style in three ways into Heading... */}

      <h1 className='heading' style={{ backgroundColor: 'red', color: 'white' }}>User Data Base</h1>



      {/* Adding Dynamically value from object array using map... map will return the value that's why we need map. here we are going to return array and div. if we use here Foreach that value will be not return for work.  for doing the work we have to return to react*/}
      {userInfo.map(user => <Users name={user.name} email={user.email} comment={user.comment}></Users>)}



      {/* Second Core creating Component */}
      <Users></Users>
      <Users name='Manna Dey' email='mannadey@gmail.com' comment="50 later"></Users>




     


    </div>
  );
}



// Let Make a Counter.
const Counter = ()=>{
  // ! Once we declare or change that will stay loaded until we closed the application totally
  const [counter, setState] = useState(50);
  
  // setState(30);
  // console.log(counter);


  // Setup for increment and Decrement value for states 
  const increment = ()=> setState(counter+1);
  const decrement = ()=> setState(counter-1);



  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increase Value</button>
      <button onClick={decrement} style={{marginLeft: '5px'}}>Decrease Value</button>
    </div>
  )
}





const Users = (props) => {

  return (
    <div className='users' style={{ marginTop: '10px', border: '2px solid black', borderRadius: '10px', margin: '10px' }}>
      <h3>{props.name} </h3>
      <h4>Email: {props.email}</h4>
      <p>{props.comment}</p>
    </div>
  )
}




export default App;

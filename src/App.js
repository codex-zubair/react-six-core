import logo from './logo.svg';
import './App.css';


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
      
      {/* Adding CSS Style in three ways into Heading... */}

      <h1 className='heading' style={{ backgroundColor: 'red', color: 'white' }}>User Data Base</h1>



      {/* Adding Dynamically value from object array using map... map will return the value that's why we need map. here we are going to return array and div. if we use here Foreach that value will be not return for work.  for doing the work we have to return to react*/}
      {userInfo.map(user => <Users name={user.name} email={user.email} comment={user.comment}></Users>)}



      {/* Second Core creating Component */}
      <Users></Users>
      <Users name='Manna Dey' email='mannadey@gmail.com' comment="50 later"></Users>


      {/* Lets Add Multiple  */}


    </div>
  );
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

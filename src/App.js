import './App.css';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";


function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newName, SetNewName] = useState("")
  const [newAge, SetNewAge] = useState(0)
  
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: newAge});
  }

  
  useEffect(()  => {
  const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  };

  getUsers();

  }, []);
  
  return <div className="App">
    <input placeholder="Name..." onChange={(event) => {
      SetNewName(event.target.value);
}}
/>
    <input type="number" placeholder="Age..."  onChange={(event) => {
      SetNewAge(event.target.value);
}}/>

    <button onClick={createUser}>Create User</button>
   
    {users.map((user)=>{

return ( 

<div>
{" "}
<h1>Name: {user.name}</h1>
<h1>Age: {user.age}</h1>
</div>
);
})}

  </div>
  } 

export default App;

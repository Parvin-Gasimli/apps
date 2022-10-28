import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc,updateDoc, doc ,deleteDoc} from "firebase/firestore";
import { async } from "@firebase/util";
function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };
  const updateuser=async(id,age)=>{
    const userDoc=doc(db,'users',id)
    const newFielsd={
      age:age+1
    }
    await updateDoc(userDoc,newFielsd)


  }
  const deleteUser=async(id)=>{
    const userDoc=doc(db,'users',id)
    await deleteDoc(userDoc)

  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
  
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        placeholder="Name..."
      />
      <input
        type="number"
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
        placeholder="Age"
      />
      <button onClick={createUser} type="submit">
        Create User
      </button>
      <h1>
        {users.map((el, id) => (
          <div key={id}>
            <h6>Name:{el.name}</h6>
            <h6>Age:{el.age}</h6>
            <button onClick={()=>{updateuser(el.id,el.age)}} type="submit">Increase Age</button>
            <button onClick={()=>{deleteUser(el.id)}} type="submit">DELETE User</button>
          </div>
        ))}
      </h1>
    </>
  );
}

export default App;

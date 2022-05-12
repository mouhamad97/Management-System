import React from 'react'
import {db} from './../../FireBaseConfig'
import {collection,getDocs} from "firebase/firestore"
import {useState , useEffect} from "react"



function ClientsForm() {

const [users , setUsers] = useState([]);
const userCollectionRef = collection(db,"clients");


useEffect(()=>{
    const getUsers =  async () =>{
        const data =  await getDocs(userCollectionRef);
        setUsers(data.docs.map((doc)=> ({...doc.data(),id:doc.id})));
    
    }

    getUsers();
},[])
  return (
    <div>
      {console.log(users)}
        <form action="">
            <label htmlFor="">name</label>
            <input type="text" />
            <br/>
            <label htmlFor="">Last name</label>
            <input type="text" />
            <br/>
            <label htmlFor="">region</label>
            <input type="text" />
            <br/>
            <label htmlFor="">Area</label>
            <input type="text" />
            <br/>
            <label htmlFor="">phone Number</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default ClientsForm
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

import List from "./components/List";

const BASE_URL="https://dummyapi.io/data/v1"
const APP_ID='61796ff48799095e703d9a3e'

function App(){
  const[contact,setContacts] =useState({data:[]})
  const[loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get(`${BASE_URL}/users?limit=5`,{headers:{"app-id":APP_ID}}).then(({data})=>setContacts(data)).catch(console.error).finally(()=>setLoading(false));

  },[])
  
  return(
    <div>
    <Header/>
    <List loading={loading}contacts={contact}/>
    <Footer/>

  </div>
  );
}

export default App;
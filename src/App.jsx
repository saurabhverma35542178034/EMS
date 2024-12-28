import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'
import { data } from 'autoprefixer'



const App = () => {
  // localStorage.clear();
  const [user ,setUser]= useState('');
  const [LoggedInUser , setLoggedInUser]=useState(null);
  const authData= useContext(AuthContext);

useEffect(()=>{
  const LoggedInUser=localStorage.getItem('loggedInUser');
  if(LoggedInUser)
  {
  const LoggedInUser=localStorage.getItem('loggedInUser');
    const userData= JSON.parse(LoggedInUser);
    console.log(userData);
    setUser(userData.role);
    setLoggedInUser(userData.data)
    
  }
},[])

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser= localStorage.getItem("loggedInUser");
  //     if(loggedInUser)
  //     {
  //       setUser(loggedInUser.role);
  //     }
  //   }
    
  // },[authData])
   const handlelogin=(email,password)=>{
     if(email=='admin@example.com' && password==123)
     {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}));
     }
     else if(authData)
      {
        const employee=authData.employees.find((e)=>email==e.email && e.password==password);
       
        if(employee)
        {
          setUser('employee');
          setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data:employee}));
        }
      }
      else{
        alert("Invalid Credential");
      }
   }
  // useEffect(()=>{
  //   //setLocalStorage();
  //   getLocalStorage();
  // });
   
   
   
  
   

  return (
    <>
    {!user?<Login handlelogin={handlelogin}/>: ''}
    {user=='admin'?<AdminDashboard/> :(user=='employee'?<EmployeeDashboard data={LoggedInUser}/>:null)}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
     
    </>
  )
}

export default App

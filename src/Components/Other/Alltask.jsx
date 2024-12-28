import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const Alltask = () => {

    const [user,setUser] = useContext(AuthContext);
    console.log("user", user);
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-40'>
        <div className='bg-red-400 py-2 mb-2  px-4 flex justify-between rounded'>
            <h2>Employee</h2>
            <h3>New Task</h3>
            <h5>Active Task</h5>
            <h5>Completed</h5>
            <h5>Failed</h5>
          </div>   

    <div className='h-[80%] overflow-auto'>    
    { user.employees.map(function(data,index){

        return (
            <div className='overflow-auto' key={index}>
                <div className='bg-red-400 py-2 mb-2  px-4 flex justify-between rounded overflow-auto'>
                    <h2>{data.firstName}</h2>
                    <h3>{data.taskCounts.newTask}</h3>
                    <h5>{data.taskCounts.active}</h5>
                    <h5>{data.taskCounts.completed}</h5>
                    <h5>{data.taskCounts.failed}</h5>
                </div> 
            </div>
          
        ) })
       }  
   </div>
      
    </div>
  )
}

export default Alltask

import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import Alltask from '../Other/Alltask';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-gray-400 p-10">
      <Header />
      <CreateTask/>
      <Alltask/>
      
    </div>
  );
};

export default AdminDashboard;

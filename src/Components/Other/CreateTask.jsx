import React, { useState } from 'react';

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    date: '',
    assignTo: '',
    category: '',
    description: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskData); // Optionally log the form data for submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field dynamically
    }));
  };

  return (
    <div>
      <div className="mt-8 bg-gray-300 p-8 rounded-lg shadow-lg">
        <form className="flex flex-wrap gap-8" onSubmit={submitHandler}>
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 ">Task Title</h3>
              <input
                type="text"
                name="title" // Use the `name` attribute for the field
                value={taskData.title} // Bind the value to state
                onChange={handleInputChange} // Update state on change
                placeholder="Give title to your task"
                className="w-full p-4 bg-black-50 border-2 border-black-1900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Date</h3>
              <input
                type="date"
                name="date"
                value={taskData.date}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Assign To</h3>
              <input
                type="text" 
                name="assignTo"
                value={taskData.assignTo}
                onChange={handleInputChange}
                placeholder="Employee Name"
                className="w-full p-4 bg-gray-50  border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Category</h3>
              <input
                type="text"
                name="category"
                value={taskData.category}
                onChange={handleInputChange}
                placeholder="Select the Category"
                className="w-full p-4 bg-gray-50 text-black border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <textarea 
                name="description"
                value={taskData.description}
                onChange={handleInputChange}
                placeholder="Enter task description"
                className="w-full text-black p-4 bg-gray-50 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="10"
                cols="30"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-end mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

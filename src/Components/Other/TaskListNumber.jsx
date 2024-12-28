import React from 'react';

const TaskListNumber = ({data}) => {
  
  return (
    <div className="flex mt-5 gap-6 justify-center  px-4 md:px-2 lg:px-10">
      {/* Task Card 1 */}
      <div className="bg-gradient-to-br from-red-400 to-yellow-500 p-8 w-[45%] rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-all hover:translate-y-[-10px] hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-white text-5xl font-bold mb-2 transition-all hover:text-yellow-300 duration-300">{data.taskCounts.newTask}</h2>
        <h3 className="text-white text-xl font-medium opacity-80">New Task</h3>
      </div>

      {/* Task Card 2 */}
      <div className="bg-gradient-to-br from-blue-400 to-orange-500 p-8 w-[45%] rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-all hover:translate-y-[-10px] hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-white text-5xl font-bold mb-2 transition-all hover:text-yellow-300 duration-300">{data.taskCounts.completed}</h2>
        <h3 className="text-white text-xl font-medium opacity-80">Completed Task</h3>
      </div>

      {/* Task Card 3 */}
      <div className="bg-gradient-to-br from-red-400 to-violet-500 p-8 w-[45%] rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-all hover:translate-y-[-10px] hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-white text-5xl font-bold mb-2 transition-all hover:text-yellow-300 duration-300">{data.taskCounts.active}</h2>
        <h3 className="text-white text-xl font-medium opacity-80">Active Task</h3>
      </div>

      {/* Task Card 4 */}
      <div className="bg-gradient-to-br from-red-400 to-orange-500 p-8 w-[45%] rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-all hover:translate-y-[-10px] hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-white text-5xl font-bold mb-2 transition-all hover:text-yellow-300 duration-300">{data.taskCounts.failed}</h2>
        <h3 className="text-white text-xl font-medium opacity-80">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;

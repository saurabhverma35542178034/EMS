import React from 'react';
import AcceptTask from './AcceptTask';  // Fixed typo: AcceptTAsk -> AcceptTask
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task}/>; // Using title as key
        } else if (task.newTask) {
          return <NewTask key={idx} data={task}/>; // Using title as key
        } else if (task.completed) {
          return <CompleteTask key={idx} data={task}/>; // Using title as key
        } else if (task.failed) { // Corrected condition for failed task
          return <FailedTask key={idx} data={task}/>; // Using title as key
        }

        return null; // Return null if no condition is met
      })}
    </div>
  );
};

export default TaskList;

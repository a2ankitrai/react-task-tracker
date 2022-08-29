import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Plan vacation days",
      day: "14 Oct 2022",
      reminder: true
    },
    {
      id: 2,
      text: "Complete ds problems",
      day: "15 Jul 2023",
      reminder: true
    },
    {
      id: 3,
      text: "Increase insurance coverage",
      day: "01 Nov 2022",
      reminder: false
    }
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    console.log("task add", newTask);
    setTasks([...tasks, newTask]);
  };

  //Delete tasks

  const deleteTask = (id) => {
    console.log("deleting..", { id });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // const name = 'Ankit';
  return (
    <div className="App container">
      <Header title="My todos.." />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task found!"
      )}
    </div>
  );
}

export default App;

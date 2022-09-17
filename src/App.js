import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  // Fetch all the tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    console.log(data);

    return data;
  }

  // Fetch specfic tasks
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    console.log(data);

    return data;
  }

  // Add task
  const addTask = async (task) => {


    console.log('task details', task);
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })

    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // console.log("task add", newTask);
    // setTasks([...tasks, newTask]);
  };



  //Delete tasks

  const deleteTask = async (id) => {
    console.log("deleting..", { id });

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updTask),
    })

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // const name = 'Ankit';
  return (
     <div className="App container">
      <Header title="My todos.." onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task found!"
      )}
      <Footer />
      <About/>
    </div>

  );
}

export default App;

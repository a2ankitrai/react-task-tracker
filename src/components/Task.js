import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p>Reminder: {`${task.reminder}`}</p>
    </div>
  );
}

export default Task;

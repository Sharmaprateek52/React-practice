import { useState } from "react";

interface Props {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;

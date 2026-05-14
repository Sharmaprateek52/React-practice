import { useState } from "react";
import type { Task } from "../types/task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(title: string) {
    const task: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([...tasks, task]);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(updatedTasks);
  }

  function completeTask(id: number) {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id == id) {
        task.completed = true;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
}

export default TaskPage;

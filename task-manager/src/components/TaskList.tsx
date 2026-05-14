import { useState } from "react";
import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

type FilterStatus = "all" | "completed" | "pending";

function TaskList({ tasks, onDeleteTask, onCompleteTask }: Props) {
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  //   const filteredTasks: Task[] = tasks.filter((task) => {
  //     if (filter == "pending") {
  //       return !task.completed;
  //     } else if (filter == "completed") {
  //       return task.completed;
  //     } else return true;
  //   });
  const filteredTasks: Task[] = tasks.filter((task) => {
    const matchesStatus =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          //   style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      {filteredTasks.length == 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

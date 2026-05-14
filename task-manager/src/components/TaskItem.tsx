import type { Task } from "../types/task";

interface Props {
  task: Task;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

function TaskItem({ task, onDeleteTask, onCompleteTask }: Props) {
  return (
    <div>
      <span style={{ padding: "10px" }}>
        {task.completed ? <s>{task.title}</s> : task.title}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      <button onClick={() => onCompleteTask(task.id)}>Complete</button>
    </div>
  );
}

export default TaskItem;

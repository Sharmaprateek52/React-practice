import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
    onCompleteTask: (id: number) => void;

}

function TaskList({ tasks, onDeleteTask, onCompleteTask }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
      ))}
    </div>
  );
}

export default TaskList;

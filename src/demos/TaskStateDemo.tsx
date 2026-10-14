import { useState } from "react";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Прочитать документацию",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Повторить работу с массивами",
    isCompleted: false,
  },
];

export function TaskStateDemo() {
  const [tasks, setTasks] =
    useState<Task[]>(initialTasks);

  const addTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: "Новая задача",
      isCompleted: false,
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  };

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted:
              !task.isCompleted,
          };
        }

        return task;
      }),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id,
      ),
    );
  };

  return (
    <section>
      <h2>Демонстрация состояния</h2>

      <button
        type="button"
        onClick={addTask}
      >
        Добавить задачу
      </button>

      {tasks.length === 0 ? (
        <p>Задач пока нет.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.isCompleted
                  ? "✓"
                  : "○"}{" "}
                {task.title}
              </span>

              <button
                type="button"
                onClick={() =>
                  toggleTask(task.id)
                }
              >
                Изменить статус
              </button>

              <button
                type="button"
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
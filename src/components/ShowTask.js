export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  // const tasks = [
  //   { id: 1, name: "TASK1", time: "2:09:01 AM 9/12/2020" },
  //   { id: 2, name: "TASK2", time: "2:09:01 AM 9/12/2020" },
  //   { id: 3, name: "TASK3", time: "2:09:01 AM 9/12/2020" },
  // ];
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTaskList);
  };
  const handleEdit = (id) => {
    const selectTask = tasklist.find((todo) => todo.id === id);
    setTask(selectTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

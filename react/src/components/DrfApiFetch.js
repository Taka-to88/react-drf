import React, { useState, useEffect } from "react";
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setselectedTask] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token 582df677626d45f5575389452965229386165c1b",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  const getTask = () => {
    axios
      .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token 582df677626d45f5575389452965229386165c1b",
        },
      })
      .then((res) => {
        setselectedTask(res.data);
      });
  };

  const deleteTask = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token 582df677626d45f5575389452965229386165c1b",
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
          </li>
        ))}
      </ul>
      Set id <br />
      <input
        type="text"
        value={id}
        onChange={(evt) => {
          setId(evt.target.value);
        }}
      />
      <br />
      <button type="button" onClick={() => getTask()}>
        Get task
      </button>
      <button type="button" onClick={() => deleteTask()}>
        Delete
      </button>
      <h3>
        {selectedTask.title} {selectedTask.id}
      </h3>
    </div>
  );
};

export default DrfApiFetch;

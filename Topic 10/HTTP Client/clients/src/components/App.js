import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [columns, setColumns] = useState([]);

  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3006/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">
          Add +
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>{item}</th>
            ))}

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`/update/${item.id}`}
                  className="btn btn-sm btn-success"
                >
                  Update
                </Link>
                <button
                  onClick={(e) => handleSubmit(item.id)}
                  className="btn btn-sm ms-1 btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleSubmit(id) {
    const confirm = window.confirm("Do want to delete?");
    if (confirm) {
      axios
        .delete("http://localhost:3006/users/" + id)
        .then((res) => {
          alert("Record has deleted");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }
}

export default App;

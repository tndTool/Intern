import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3006/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios.put("http://localhost:3006/users/" + id, data).then((res) => {
      alert("Data updated successfully!");
      navigate("/");
    });
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">ID:</label>
            <input
              type="text"
              disabled
              name="name"
              className="form-control"
              value={data.id}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;

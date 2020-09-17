import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    { name: "Dato1", state: "O" },
    { name: "Dato2", state: "A" }
  ]);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({});
  };

  return (
    <div className="App">
      <h1>Push Example</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <form onSubmit={onSubmit}>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          placeholder="state"
          name="state"
          type="text"
          value={form.state || ""}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

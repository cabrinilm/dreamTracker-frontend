import { useState } from "react";

export function Register() {
  const [register, setRegister] = useState({
    date: "",
    sleepAt: "",
    wokeUp: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        placeholder="Date"
        name="date"
        type="text"
        value={register.date}
        onChange={handleChange}
      />
      <input
        placeholder="Sleep At"
        name="sleepAt"
        type="number"
        value={register.sleepAt}
        onChange={handleChange}
      />
      <input
        placeholder="Woke Up"
        name="wokeUp"
        type="number"
        value={register.wokeUp}
        onChange={handleChange}
      />
      <input
        placeholder="Note"
        name="note"
        type="text"
        value={register.note}
        onChange={handleChange}
      />

      <button onClick={() => console.log(register)}>Register</button>
    </div>
  );
}
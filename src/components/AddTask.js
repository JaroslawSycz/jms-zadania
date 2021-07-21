import React from "react";
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Proszę dodaj zadanie");
      return;
    }

    onAddTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Zadanie</label>
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Dzień i czas</label>
        <input
          type="text"
          placeholder="Dodaj dzień i czas "
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Wykonane\Niewykonane</label>
        <input
          type="checkbox"
          placeholder="status zadania"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Zapisz zadanie"
        className="btn btn-block"
        onClick={onSubmit}
      />
    </form>
  );
};

export default AddTask;

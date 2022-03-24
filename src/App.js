import React, { useState } from 'react';


import Cards from './components/Cards.jsx';
import NoData from './components/NoData.jsx';


import s from './App.module.css'

const CARDS = [
  { name: "Some name", descr: "Description", id: 12321 },
  { name: "Cool", descr: "Description tuturu", id: 3473487 }
];

function App() {

  const [name, setValue] = useState("");
  const [descr, setDescr] = useState("");
  const [data, setData] = useState(CARDS);

  function handleNameChange(e) {
    setValue(e.target.value);
  }

  function handleDescrChange(e) {
    setDescr(e.target.value);
  }

  function handleCreateForm(e) {

    e.preventDefault();

    if (name.length === 0 || descr.length === 0) {
      console.log("passed a field");
    } else {
      const newData = {name: name, descr: descr, id: new Date().getTime()}
      setData([...data, newData])
      setValue("");
      setDescr("");
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateForm}>
        <label >
          Name:
          <div></div>
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <div></div>
        <label>
          Description:
          <div></div>
          <input type="text" value={descr} onChange={handleDescrChange} />
        </label>
        <div></div>
        <input type="submit" />
      </form>
      <Cards setData={setData} data={data} />
    </div>
  );
}

export default App;

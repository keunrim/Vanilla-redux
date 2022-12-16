import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onAdd = (e) => {
    console.log(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form>
        <input type={"text"} value={text} onChange={onChange} />
        <button type="button" onClick={onAdd}>
          Add
        </button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;

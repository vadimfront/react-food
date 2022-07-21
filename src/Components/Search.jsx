import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handlSubmit();
    }
  };

  const handlSubmit = () => {
    cb(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            id="search"
            placeholder="search"
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="btn" onClick={handlSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export { Search };

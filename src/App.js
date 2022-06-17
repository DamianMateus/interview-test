import { useEffect, useReducer } from "react";
import "./App.css";
import reducer from "./reducer";

const DATA = ["item 1", "item 2", "item 3"];

const initialState = {
  items: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "set_items",
      payload: {
        items: DATA,
      },
    });
  });

  return (
    <div className="App">
      <ul className="items-container">
        {state.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

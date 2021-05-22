import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
    console.log("Render App")
    const [theme, setTheme] = useState('red')

  return (
      <>
          <ThemeContext.Provider value={{ backgroundColor : theme}}>
              <h2>Counter</h2>
              <Counter initCounter={1}/>
              <h2>CounterHooks</h2>
              <CounterHooks initCounter={1}/>

              <button onClick={() => setTheme(
                  prevState => {
                      return prevState === 'red' ? 'green' : 'red'
                  })}>Toggle Theme</button>
          </ThemeContext.Provider>
      </>
  );
}

export default App;

// 4) Create a component
function App() {
  /* 
    // JSX can reference variables and other expressions using {}, but can only properly render numbers, strings, arrays?
    let message = "Bye there!";
    if (Math.random() > 0.5) {
      message = "Hello there!";
    }
    const date = new Date();
    const time = date.toLocaleTimeString();
    // return <h1>{time}</h1>;
    return <h1>{new Date().toLocaleTimeString()}</h1>; 
    */
  /*  
    // You can mix in plain text and multiple variables similar to template literals in JS
    const name = "Samantha";
    const age = 23;
    return (
      <h1>
        Hi, my name is {name} and my age is {age}
      </h1>
    );
   */
  /* 
    // JSX Prop(ertie)s System is similar to HTML attributes, and customize an element using property=value pairs
    // Trying to display an object doesn't work, but providing it to a prop as options is OK
    // Objects are also enclosed in {}
    const inputType = "number";
    const minValue = 5;
  
    const message = "Enter age";
  
    return (
      <input
        type={inputType}
        min={minValue}
        max={10}
        list={[1, 2, 3]}
        style={{ border: "3px solid red", color: "red" }}
        alt={message}
      />
    );
   */
  /* 
    // Names/vaues of attributes for JSX can be/are slightly different in JSX:
    // 1. Prop names are camelCase
    // return <textarea autoFocus={true} />; 
    */
  // 2. Prop values that are supposed to be numbers are passed with {} instead of ""
  // return <input maxLength={5} />;
  // 3. Props with boolean values default to true, but if the value is false, needs to be in {}
  // return <input spellCheck={false} />;
  // 4. JSX has 'className' instead of 'class' attribute (since JS has class keyword)
  // 5. JSX in-line styling is done by passing the style prop an object containing the CSS styling (CSS properties are camelCase as well!)
  // return <input style={{ border: "3px solid blue" }} />;

  return <h1>Bye there!</h1>;
}

export default App;

## 🥷 You can check This Project For Understanding 
- [**Github Repo**](https://github.com/Subham-Maity/next-hooks-master)
- [**Live Demo**](https://next-hooks-master.vercel.app/)
- [**Tutorial**](https://http://codexam.vercel.app/docs/Hooks/React)


### 🎉 A Beginner's Guide to useState in React 

Welcome to this fun and easy-to-understand guide on `useState` in React! We'll cover everything you need to know about `useState`, from what it is to how it works, and even provide some examples to help you get started. So, let's dive in! 🏊‍♂️

### 📚 What is useState? 

`useState` is a **hook** in React that allows you to add state to functional components. It's a way to manage and update the local state of a component without having to write a class component. With `useState`, you can easily create and update state variables in your functional components. 🎉

### 📍 Where is useState usually used? 

`useState` is typically used in functional components when you need to manage some local state. It's a great alternative to class components, as it simplifies the process of managing state and makes your code more readable and maintainable. 

### 🧪 How useState works 

`useState` is a function that takes an initial state value as its argument and returns an array with two elements:

1. The current state value
2. A function to update the state value

Here's a simple example:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, we're using `useState` to manage the `count` state variable. The initial value of `count` is `0`, and we use the `setCount` function to update its value when the button is clicked. 🖱️


## ⚡In our main [website](https://github.com/Subham-Maity/next-hooks-master) we use it like this 👇


```js
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // create a state variable called count and set it to 0

  const incrementCount = () => {
    setCount(count + 1); // update the count by adding 1
  };

  return (
    <div>
      <p>Count: {count}</p> // show the count on the screen
      <button onClick={incrementCount}>Increment Count</button> // call the incrementCount function when the button is clicked
    </div>
  );
};

export default Counter;
```

Here are the steps to understand how this example works:

- We import useState from React and use it in our Counter component.
- We call useState with an initial value of 0 and get back an array with two elements: count and setCount. We use array destructuring to assign them to variables with the same names.
- We create a custom function called incrementCount that calls setCount with the next count value, which is the current count value plus 1.
- We return some JSX that renders a paragraph with the count value and a button with an onClick prop. The onClick prop passes the incrementCount function as a callback that will be executed when the button is clicked.
- When the component is first rendered, count is 0 and setCount is a function that can update it. The paragraph shows "Count: 0" and the button says "Increment Count".
- When the user clicks the button, the incrementCount function is called. It calls setCount with count + 1 as an argument. This updates the count value to 1 and triggers a re-render of the component.
- When the component is re-rendered, count is 1 and setCount is still a function that can update it. The paragraph shows "Count: 1" and the button says "Increment Count".
- This process repeats every time the user clicks the button.





### 🚫 No need for classes or functions 

One of the main benefits of using `useState` is that you don't need to write a class component or use lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`. This makes your code cleaner and easier to understand. 

### 🆚 Class components vs useState 

- **Class components**

In class components, you manage state using the `this.state` object and update it using `this.setState()`. Class components also have lifecycle methods to handle side effects and updates.

- **useState**

With `useState`, you can manage state in functional components without having to write a class component. It simplifies state management and makes your code more readable.

- **State and local state**

**State** is the data that a component manages and can change over time. **Local state** is the state that is specific to a component and not shared with other components.

> Differences between classes, functions, and useState 🌟

- Classes: Require you to write a class component and use lifecycle methods to manage state.
> Class components can be more complex and harder to understand than functional components. They require you to write more boilerplate code and use lifecycle methods to manage state, which can make your code less readable and maintainable. 😕
- Functions: Stateless components that don't manage state by default.
- useState: Allows you to manage state in functional components without writing a class component.
> Before hooks like `useState` were introduced, functional components couldn't manage state or use lifecycle methods. This made them less powerful and flexible than class components. However, with the introduction of hooks, functional components can now manage state and side effects, making them a great alternative to class components. 🎊




## 📝 Examples of useState use cases 📝

### Example 1: Counter

``Type 1``

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
``Type 2``

```javascript
import React, { useState } from "react";

// Define a type for the props of the Counter component
type CounterProps = {
  // No props for this component
};

function Counter(props: CounterProps) {
  // Create a state variable called count and initialize it to 0
  // Use number as the type for count and setCount
  const [count, setCount] = useState<number>(0);

  // Define a function to increment the count by 1
  function increment() {
    setCount(count + 1);
  }

  // Define a function to decrement the count by 1
  function decrement() {
    setCount(count - 1);
  }

  // Return the JSX code for the component
  return (
    <div>
      <h1>Counter</h1>
      <p>The current count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
```

### Example 2: Toggles

```javascript
import React, { useState } from 'react';

function Toggles() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>The toggle is {isOn ? 'On' : 'Off'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggles me
      </button>
    </div>
  );
}
```

### Example 3: Input

```javascript
import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```

### Example 4: Todo list

```javascript
import React, { useState } from "react";

// Define a type for each task object
type Task = {
  id: number;
  text: string;
};

// Define a type for the props of the TodoList component
type TodoListProps = {
  // No props for this component
};

function TodoList(props: TodoListProps) {
  // Create a state variable called tasks and initialize it to an empty array
  // Use Task[] as the type for tasks and setTasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Create a state variable called input and initialize it to an empty string
  // Use string as the type for input and setInput
  const [input, setInput] = useState<string>("");

  // Define a function to handle the change of the input field
  // Use React.ChangeEvent<HTMLInputElement> as the type for event parameter
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Get the value of the input field from the event object
    const value = event.target.value;

    // Update the input state with the new value
    setInput(value);
  }

  // Define a function to handle the submission of the form
  // Use React.FormEvent<HTMLFormElement> as the type for event parameter
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevent the default behavior of the form (reloading the page)
    event.preventDefault();

    // Check if the input is not empty
    if (input) {
      // Create a new task object with a unique id and the input value
      const newTask: Task = { id: Date.now(), text: input };

      // Update the tasks state with the new task added to the end of the array
      setTasks([...tasks, newTask]);

      // Reset the input state to an empty string
      setInput("");
    }
  }

  // Define a function to handle the removal of a task
  // Use number as the type for id parameter
  function handleRemove(id: number) {
    // Filter out the task with the given id from the tasks array
    const newTasks = tasks.filter((task) => task.id !== id);

    // Update the tasks state with the new array
    setTasks(newTasks);
  }

  // Return the JSX code for the component
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemove(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```



That's it! Now you have a solid understanding of `useState` and how it can help you manage state in your React functional components. Happy coding! 🎉

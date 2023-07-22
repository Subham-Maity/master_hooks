<div align="center">

# Master Hooks in React & Next.js 

_________________


# 🔗 🌐 [Live Demo](https://next-hooks-master.vercel.app/) ⚡🔗

_________________


![image](https://user-images.githubusercontent.com/97989643/236401286-0156f8dc-c95b-4aea-8cb4-213d94e4c8cd.png)

</div>

________________

<div align="center">

## 📑 Table of Contents

| no |                 React Hooks                  |              Next.js Hooks               |                    Third Party Hooks                     |
|:--:|:--------------------------------------------:|:----------------------------------------:|:--------------------------------------------------------:|
| 1  |           [useState *](#usestate)            |         [useRouter](#-userouter)         |                    [useSWR](#-useswr)                    |
| 2  |          [useEffect *](#-useeffect)          |        [useSession](#-usesession)        |               [useSuspense](#-usesuspense)               |
| 3  |             [useRef *](#-useref)             |    [useTranslation](#-usetranslation)    |          [useErrorBoundary](#-useerrorboundary)          |
| 4  |            [useMemo *](#-usememo)            |    [useBreakpoints](#-usebreakpoints)    |            [useServerState](#-useserverstate)            |
| 5  |         [useCallback](#-usecallback)         |         [useLayout](#-uselayout)         |          [ useServerEvents](#-useserverevents)           |
| 6  |         [useContext *](#-usecontext)         |       [useDarkMode](#-usedarkmode)       |        [ useServerRedirect](#-useserverredirect)         |
| 7  |         [useReducer *](#-usereducer)         |     [useMediaQuery](#-usemediaquery)     |            [useServerFetch](#-useserverfetch)            |
| 8  | [useImperativeHandle](#-useimperativehandle) | [useOnClickOutside](#-useonclickoutside) |           [useServerConfig](#-useserverconfig)           |
| 9  |    [useLayoutEffect *](#-uselayouteffect)    |     [useWindowSize](#-usewindowsize)     | [useIsomorphicLayoutEffect](#-useisomorphiclayouteffect) |
| 10 |  [useInsertionEffect](#-useinsertioneffect)  |       [useDebounce](#-usedebounce)       |       [useIsomorphicLayout](#-useisomorphiclayout)       |
| 11 |         [useMemoOnce](#-usememoonce)         |                                          |        [useIsomorphicQuery](#-useisomorphicquery)        |
| 12 |       [useCallback *](#-usecallback-1)       |                                          |     [useIsomorphicMutation](#-useisomorphicmutation)     |
| 13 |         [ useWaitFor](#-usewaitfor)          |                                          |     [ useIsomorphicContext](#-useisomorphiccontext)      |
| 14 |         [usePrevious](#-useprevious)         |                                          |                                                          |






</div>

______
## UseState

- Syntax
```js
const [ state, setState ] = useState(initialState);
```
> - `state` is the current state value / State Variable
> - `setState` is the function that updates the state / State Setter Function
> - `initialState` is the initial value of the state / Initial State

- Example 1
> When you press the button, the count will increase by 1
```js
import React , {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p className="counter-count-text">Count: {count}</p>
            <button className="counter-count-button" onClick={incrementCount}>
                Increment Count
            </button>
        </div>
    );
};

export default Counter;
```
- Example 2
> Increasing and decreasing the count by 1
```js

import React , {useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p className="counter-count-text">Count: {count}</p>
            <button className="counter-count-button" onClick={incrementCount}>
                Increment Count
            </button>
            <button className="counter-count-button" onClick={decrementCount}>
                Decrement Count
            </button>
        </div>
    );
};

```
- Example 3
> Suppose you don't want decrement count below 0
```js
import React, {useState} from "react";

const CounterStopDecrement = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="counter-increment-decrement-flex">
            <p className="counter-increment-decrement-count-text">Count: {count}</p>
            <div className="counter-increment-decrement-count-space">
                <button
                    className="counter-increment-decrement-count-plus"
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    +
                </button>
                <button
                    className="counter-increment-decrement-count-minus"
                    onClick={() => (count == 0 ? setCount(0) : setCount(count - 1))}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default CounterStopDecrement;
```
- Example 4 
> If you want to change the state of an object, you can do it like this (Form Data)
```js
'use client';
import {useState} from "react";
import {Button, Checkbox, Label, TextInput} from 'flowbite-react';


export default function ShadowInputs() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        Repeat_Password: ""

    })

    const handleInput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prev: any) => {
            return {...prev, [name]: value};


        })


    }
    return (
        <div>
            <form className="md:ml-20 ml-0 flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        className="text-white"
                        id="email2"
                        placeholder="codexam.com"
                        required
                        name="email"
                        shadow
                        type="email"
                        value={formData.email}
                        onChange={handleInput}

                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="repeat-password"
                            value="Repeat password"

                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        required
                        shadow
                        type="password"
                        name="Repeat_Password"
                        value={formData.Repeat_Password}
                        onChange={handleInput}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree"/>

                </div>
                <Button type="submit">
                    Register new account
                </Button>
            </form>
            <p className="font-bold text-xl mt-2">{`my email is  ${formData.email}`}</p>
            <p className="font-bold text-xl mt-2">{`and my password is  ${formData.password}`}</p>
        </div>
    )
}
```

> Only display a text
```js
import React, {useState} from "react";
const FormInput = () => {
    const [data, updateData] = useState({
            text: ""
        }
    )
    const handleInput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        updateData((prev: any) => {
            return {...prev, [name]: value}

        })
    }
    return (
        <div>
            <input
                className="form-input-text"
                name="text"
                type="text"
                required={true}
                onChange={handleInput}
            />
            <p className="text-white font-bold text-2xl"> {data.text}</p>
        </div>

    );
};

export default FormInput;
```
```
import React from 'react';
import {useState} from "react";
const BasicForm = () => {
    const [data , setData] = useState("");
    return (
        <div>
            <input value={data} onChange={(e)=>setData(e.target.value)} />
            <p>this is the thing {data}</p>
        </div>
    );
};

export default BasicForm;
```
> Add an item (Todo List)
```js
import React, { useState } from "react";

type Task = {
  id: number;
  text: string;
};

type TodoListProps = {};

function TodoList(props: TodoListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [input, setInput] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInput(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (input) {
      const newTask: Task = { id: Date.now(), text: input };

      setTasks([...tasks, newTask]);

      setInput("");
    }
  }

  function handleRemove(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <div>
      <h1 className="todo-list-text">Todo List</h1>
      <form className="todo-list-form" onSubmit={handleSubmit}>
        <input
          className="todo-list-input"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button className="todo-list-add-button" type="submit">
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              className="todo-list-remove-button"
              onClick={() => handleRemove(task.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

```
> Toggles
```js
import React, { useState } from "react";

function Toggles() {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div>
      <p className="toggle-button-text">The toggle is {isOn ? "On" : "Off"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <button className="toggle-button-bg" onClick={() => setIsOn(!isOn)}>
          <span
            className={`${
              isOn ? "toggle-button-on" : "toggle-button-off"
            } toggle-button-rotate `}
          />
        </button>
      </div>
    </div>
  );
}

export default Toggles;

```
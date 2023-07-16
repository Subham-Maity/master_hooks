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
# 🎉 A Beginner's Guide to `useEffect`

![deps-compare-correct](https://user-images.githubusercontent.com/97989643/235735279-cb6ecbd2-fdf8-4e9d-9a02-6c25fff14c3e.gif)

Welcome to the world of React Hooks! Today, we'll dive into one of the most popular hooks: `useEffect`. Don't worry, we'll make it fun and easy to understand. So, let's get started! 🚀

## 📚 What is `useEffect`

`useEffect` is a **React Hook** that allows you to perform side effects in your functional components. Side effects are actions that happen outside of your component, like fetching data, updating the DOM, or subscribing to events. With `useEffect`, you can manage these side effects without writing a class or function. 🎉

## 📍 Where is `useEffect` commonly used?

`useEffect` is commonly used in various scenarios, such as:

- Fetching data from an API 🌐
- Setting up event listeners 🎧
- Updating the document title 📝
- Cleaning up resources when a component is unmounted 🧹
- Managing timers and intervals ⏲️
## 🧪 How `useEffect` works

`useEffect` is like a Swiss Army knife 🇨🇭🔪 for side effects in your functional components. It combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components into one simple hook.

Here's how it works:

1. You call `useEffect` with a function that contains your side effect.
2. React runs your side effect function after rendering the component.
3. If you provide a cleanup function, React will call it when the component is unmounted or when the dependencies change.

No need to write a class or function! 🤯

## ⚡ Different use cases

Let's explore some common use cases for `useEffect`:

1. **Fetching data**: You can use `useEffect` to fetch data from an API and update your component's state when the data is received. 📦
2. **Updating the document title**: Want to change the title of your webpage based on the component's state? `useEffect` to the rescue! 🦸‍♂️
3. **Setting up event listeners**: Need to listen for events like window resizing or keyboard input? `useEffect` can help you set up and clean up event listeners. 🎧
4. **Persisting state**: Want to save your component's state to local storage or a database? `useEffect` can handle that too! 💾
5. **Timers and intervals**: If you need to set up a timer or interval in your component, `useEffect` is the perfect tool for the job. You can start the timer when the component mounts and clear it when the component unmounts. ⏳






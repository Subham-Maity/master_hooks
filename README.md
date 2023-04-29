# Hooks

### **React Hooks**
* **useState:** declares a state variable that you can update directly.
* **useEffect:** connects a component to an external system and runs after every render.
* **useRef:** declares a ref that can hold any value and does not trigger re-rendering.
* **useMemo:** lets you cache the result of an expensive calculation and only recompute it when the dependencies change.
* **useCallback:** lets you cache a function definition and only recreate it when the dependencies change.
* **useContext:** reads and subscribes to a context that provides information from distant parents.
* **useReducer:** declares a state variable with the update logic inside a reducer function.
* **useImperativeHandle:** lets you customize the ref exposed by your component.
* **useLayoutEffect:** fires before the browser repaints the screen and lets you measure layout.
* **useInsertionEffect:** fires before React makes changes to the DOM and lets you insert dynamic CSS.
* **useMemoOnce:** This hook is similar to useMemo, but it only runs the provided function once, even if the dependencies change. This can be useful for performance reasons, or if you don't need to update the memoized value frequently.
* **useCallback:** This hook is similar to useMemo, but it only recreates the function when the dependencies change. This can be useful for performance reasons, or if you don't need to update the memoized function frequently.
* **useWaitFor:** This hook waits for a promise to resolve before continuing to render the component. This can be useful for asynchronous operations, such as fetching data from a remote server.
* **usePrevious:** This hook stores the previous value of a variable. This can be useful for tracking changes to a variable over time.

### **Next.js Hooks**
* **useRouter:** returns the router object that contains information about the current route.
* **useSession:** returns the session object that contains information about the current user authentication status.
* **useTranslation:** returns a translation function that allows you to localize your app with different languages.
* **useBreakpoints:** returns an object that indicates which breakpoints are active based on the window width.
* **useLayout:** returns an object that contains information about the current layout mode (desktop or mobile).
* **useDarkMode:** returns a boolean value that indicates whether dark mode is enabled or not.
* **useMediaQuery:** returns a boolean value that indicates whether a media query matches or not.
* **useOnClickOutside:** returns a ref that can be attached to an element and triggers a callback when clicked outside of it.
* **useWindowSize:** returns an object that contains the width and height of the window.
* **useDebounce:** returns a debounced version of a function that delays its execution until after a specified time has elapsed.
### **Third-party Hooks**

* **useSWR**: returns data and error from a remote data source with caching, revalidation, and mutation features.
* **useSuspense**: returns a promise that suspends the rendering of a component until it resolves or rejects.
* **useErrorBoundary**: returns an error boundary component that catches errors in its children and renders a fallback UI.
* **useServerState**: returns a state variable that is initialized from server-side props and can be updated on the client-side.
* **useServerEvents**: returns an event emitter that listens to server-sent events and triggers callbacks on the client-side.
* **useServerRedirect**: returns a function that redirects to another URL on the server-side or client-side depending on where it is called.
* **useServerFetch**: returns data and error from a server-side fetch request with caching and revalidation features.
* **useServerConfig**: returns an object that contains configuration values from the server-side environment variables or files.
* **useIsomorphicLayoutEffect**: runs an effect on both server-side and client-side with the same timing as useLayoutEffect.
* **useIsomorphicLayout**: returns an object that contains information about the current layout mode (desktop or mobile) on both server-side and client-side.
* **useIsomorphicQuery**: returns data and error from a remote data source with caching, revalidation, and mutation features on both server-side and client-side using React Query library.
* **useIsomorphicMutation**: returns a mutation object that allows you to perform mutations on a remote data source on both server-side and client-side using React Query library.
* **useIsomorphicContext**: reads and subscribes to a context that provides information from distant parents on both server-side and client-side.

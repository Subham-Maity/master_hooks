<div align="center">

# Master Hooks in React & Next.js 

___________


# 🔗 🌐 [Live Demo](https://next-hooks-master.vercel.app/) ⚡🔗


![image](https://user-images.githubusercontent.com/97989643/236401286-0156f8dc-c95b-4aea-8cb4-213d94e4c8cd.png)

</div>

___________

<div align="center">

## 📑 Table of Contents

| no |                 React Hooks                  |              Next.js Hooks               |                    Third Party Hooks                     |
|:--:|:--------------------------------------------:|:----------------------------------------:|:--------------------------------------------------------:|
| 1  |            [useState](#-usestate)            |         [useRouter](#-userouter)         |                    [useSWR](#-useswr)                    |
| 2  |           [useEffect](#-useeffect)           |        [useSession](#-usesession)        |               [useSuspense](#-usesuspense)               |
| 3  |              [useRef](#-useref)              |    [useTranslation](#-usetranslation)    |          [useErrorBoundary](#-useerrorboundary)          |
| 4  |             [useMemo](#-usememo)             |    [useBreakpoints](#-usebreakpoints)    |            [useServerState](#-useserverstate)            |
| 5  |         [useCallback](#-usecallback)         |         [useLayout](#-uselayout)         |          [ useServerEvents](#-useserverevents)           |
| 6  |          [useContext](#-usecontext)          |       [useDarkMode](#-usedarkmode)       |        [ useServerRedirect](#-useserverredirect)         |
| 7  |          [useReducer](#-usereducer)          |     [useMediaQuery](#-usemediaquery)     |            [useServerFetch](#-useserverfetch)            |
| 8  | [useImperativeHandle](#-useimperativehandle) | [useOnClickOutside](#-useonclickoutside) |           [useServerConfig](#-useserverconfig)           |
| 9  |     [useLayoutEffect](#-uselayouteffect)     |     [useWindowSize](#-usewindowsize)     | [useIsomorphicLayoutEffect](#-useisomorphiclayouteffect) |
| 10 |  [useInsertionEffect](#-useinsertioneffect)  |       [useDebounce](#-usedebounce)       |       [useIsomorphicLayout](#-useisomorphiclayout)       |
| 11 |         [useMemoOnce](#-usememoonce)         |                                          |        [useIsomorphicQuery](#-useisomorphicquery)        |
| 12 |        [useCallback](#-usecallback-1)        |                                          |     [useIsomorphicMutation](#-useisomorphicmutation)     |
| 13 |         [ useWaitFor](#-usewaitfor)          |                                          |     [ useIsomorphicContext](#-useisomorphiccontext)      |
| 14 |         [usePrevious](#-useprevious)         |                                          |                                                          |






</div>

______










<div align="center">

## ↪ 🔗⚡ **React Hooks** ⚡🔗 

</div>

### 📌 **useState:** 
> declares a state variable that you can update directly.
  
- Learn More About useState:
   - [**GitHub**](https://github.com/Subham-Maity/next-hooks-master/blob/main/docs/Hooks/React/useState.md)
   - [**CodeXam**](https://codexam.vercel.app/docs/Hooks/React/useState)
   - [**Hashnode**](https://codexam.hashnode.dev/mastering-usestate-a-guide-for-beginners)
   - [**dev.to**](https://dev.to/codexam/mastering-usestate-a-guide-for-beginners-2h30)
### 📌 **useEffect:**
> connects a component to an external system and runs after every render.
- Learn More About useEffect:
   - [**GitHub**](https://github.com/Subham-Maity/next-hooks-master/blob/main/docs/Hooks/React/useEffect.md)
   - [**CodeXam**](https://codexam.vercel.app/docs/Hooks/React/useEffect)
   - [**Hashnode**](https://codexam.hashnode.dev/a-beginners-guide-to-useeffect)
   - [**dev.to**](https://dev.to/codexam/a-beginners-guide-to-useeffect-3ej4)
### 📌 **useRef:** 
> declares a ref that can hold any value and does not trigger re-rendering.
- Learn More About useRef:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useMemo:** 
> lets you cache the result of an expensive calculation and only recompute it when the dependencies change.
- Learn More About useMemo:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useCallback:** 
> lets you cache a function definition and only recreate it when the dependencies change.
- Learn More About useCallback:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useContext:** 
> reads and subscribes to a context that provides information from distant parents.
- Learn More About useContext:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useReducer:** 
> declares a state variable with the update logic inside a reducer function.
- Learn More About useReducer:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useImperativeHandle:** 
> lets you customize the ref exposed by your component.
- Learn More About useImperativeHandle:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useLayoutEffect:** 
> fires before the browser repaints the screen and lets you measure layout.
- Learn More About useLayoutEffect:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useInsertionEffect:** 
> fires before React makes changes to the DOM and lets you insert dynamic CSS.
- Learn More About useInsertionEffect:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useMemoOnce:** 
> This hook is similar to useMemo, but it only runs the provided function once, even if the dependencies change. This can be useful for performance reasons, or if you don't need to update the memoized value frequently.
- Learn More About useMemoOnce:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useCallback:** 
> This hook is similar to useMemo, but it only recreates the function when the dependencies change. This can be useful for performance reasons, or if you don't need to update the memoized function frequently.
- Learn More About useCallback:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useWaitFor:** 
> This hook waits for a promise to resolve before continuing to render the component. This can be useful for asynchronous operations, such as fetching data from a remote server.
- Learn More About useWaitFor:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **usePrevious:** 
> This hook stores the previous value of a variable. This can be useful for tracking changes to a variable over time.
- Learn More About usePrevious:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()

<div align="center">

## ↪ 🔗⚡ **Next.js Hooks** ⚡🔗

</div>


### 📌 **useRouter:** 
> returns the router object that contains information about the current route.
- Learn More About useRouter:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useSession:** 
> returns the session object that contains information about the current user authentication status.
- Learn More About useSession:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useTranslation:** 
> returns a translation function that allows you to localize your app with different languages.
- Learn More About useTranslation:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useBreakpoints:** 
> returns an object that indicates which breakpoints are active based on the window width.
- Learn More About useBreakpoints:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useLayout:** 
> returns an object that contains information about the current layout mode (desktop or mobile).
- Learn More About useLayout:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useDarkMode:** 
> returns a boolean value that indicates whether dark mode is enabled or not.
- Learn More About useDarkMode:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useMediaQuery:** 
> returns a boolean value that indicates whether a media query matches or not.
- Learn More About useMediaQuery:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useOnClickOutside:** 
> returns a ref that can be attached to an element and triggers a callback when clicked outside of it.
- Learn More About useOnClickOutside:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useWindowSize:** 
> returns an object that contains the width and height of the window.
- Learn More About useWindowSize:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useDebounce:** 
> returns a debounced version of a function that delays its execution until after a specified time has elapsed.
- Learn More About useDebounce:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()

<div align="center">

## ↪ 🔗⚡ **Third-party Hooks** ⚡🔗

</div>

### 📌 **useSWR**: 
> returns data and error from a remote data source with caching, revalidation, and mutation features.
- Learn More About useSWR:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useSuspense**: 
> returns a promise that suspends the rendering of a component until it resolves or rejects.
- Learn More About useSuspense:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useErrorBoundary**: 
> returns an error boundary component that catches errors in its children and renders a fallback UI.
- Learn More About useErrorBoundary:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useServerState**: 
> returns a state variable that is initialized from server-side props and can be updated on the client-side.
- Learn More About useServerState:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useServerEvents**: 
> returns an event emitter that listens to server-sent events and triggers callbacks on the client-side.
- Learn More About useServerEvents:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useServerRedirect**: 
> returns a function that redirects to another URL on the server-side or client-side depending on where it is called.
- Learn More About useServerRedirect:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useServerFetch**: 
> returns data and error from a server-side fetch request with caching and revalidation features.
- Learn More About useServerFetch:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useServerConfig**: 
> returns an object that contains configuration values from the server-side environment variables or files.
- Learn More About useServerConfig:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useIsomorphicLayoutEffect**: 
> runs an effect on both server-side and client-side with the same timing as useLayoutEffect.
- Learn More About useIsomorphicLayoutEffect:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useIsomorphicLayout**: 
> returns an object that contains information about the current layout mode (desktop or mobile) on both server-side and client-side.
- Learn More About useIsomorphicLayout:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useIsomorphicQuery**: 
> returns data and error from a remote data source with caching, revalidation, and mutation features on both server-side and client-side using React Query library.
- Learn More About useIsomorphicQuery:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useIsomorphicMutation**: 
> returns a mutation object that allows you to perform mutations on a remote data source on both server-side and client-side using React Query library.
- Learn More About useIsomorphicMutation:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()
### 📌 **useIsomorphicContext**: 
> reads and subscribes to a context that provides information from distant parents on both server-side and client-side.
- Learn More About useIsomorphicContext:
  - [**GitHub**]()
  - [**CodeXam**]()
  - [**Hashnode**]()
  - [**dev.to**]()

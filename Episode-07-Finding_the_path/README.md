# Topics

## React Routing

- [Official Document](https://reactrouter.com/en/main/start/overview)
- [React Router V6 medium blog](https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd)
- Creating routes by using `createBrowserRouter, RouterProvider` from `react-router-dom`
- useRouteError => this hook returns the error occured while accessing any route.
- Link => always use link for routing user to a page because it will render only the component.(anchor tag will refresh the whole page)
- Client side routing (whole component loaded initially based on the route react will render the component ) Vs Server side routing (will take component from server based on the current route -> it involves network calls)

## useEffect

- If no dependency array => useEffect is called on every render
- if dependency array is empty [] => useEffect is called on initial render (only once)
- if dependency array has some dependency => useEffect will be called whenever the dependency is updated & initial render

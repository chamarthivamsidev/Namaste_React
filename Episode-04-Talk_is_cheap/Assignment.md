# Assignment-4

## Theory

- Is JSX mandatory for React?

  - No, JSX (JavaScript XML) is not mandatory for building React applications, but it is highly recommended and widely used in the React ecosystem. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and visualize the structure of your React components by mixing HTML-like tags with JavaScript logic.
  - While you can technically write React applications without JSX by using pure JavaScript to create and manipulate React elements, JSX provides a more declarative and concise way to define your UI components. JSX code is transformed into JavaScript using tools like Babel before it's executed in the browser. <br></br>

- Is ES6 mandatory for React ?

  - ES6 (ECMAScript 2015) is not strictly mandatory for building React applications, but it is highly recommended and widely used in the React community. React itself doesn't require ES6, but many modern JavaScript features and syntax enhancements introduced in ES6 make writing React code more concise, readable, and maintainable.
    - Arrow Functions
    - Classes
    - Import / Export
    - Destructuring
    - Template Literals
    - Spread Operator
  - While it's possible to write React applications using older JavaScript syntax, using ES6 and beyond is generally considered best practice because it enhances code readability, maintainability, and developer productivity. Moreover, many of the tools and libraries commonly used with React, such as Babel and webpack, are set up to work seamlessly with ES6 and modern JavaScript features<br></br>

- {`TitleComponent`} vs {`<TitleComponent/>`} vs {`<TitleComponent></TitleComponent>`}

  - `{TitleComponent}` : renders a React component named TitleComponent.
  - `{<TitleComponent/>}` : renders the JSX element `<TitleComponent/`> directly.
  - `{<TitleComponent></TitleComponent>}` renders the JSX element `<TitleComponent>` within another JSX element.<br></br>

- How can I write comments in JSX ?

  - In JSX, you can write comments just like you would in regular HTML, but with a small difference. JSX comments are wrapped in curly braces {} because they are treated as JavaScript expressions.
  - `{/* This is a JSX comment */}` is a JSX comment.<br></br>

- What is `<React.Fragment></React.Fragment>` and `<></>` ?

  - `<React.Fragment></React.Fragment> `and `<></>`(empty angle brackets) are both used in React to create fragments. Fragments allow you to group multiple JSX elements without introducing an additional DOM element in the rendered output. They are particularly useful when you need to return adjacent JSX elements from a component, as React enforces that you can only return a single JSX element from a component.
  - `<React.Fragment></React.Fragment>`
    - You can include any number of child JSX elements within `<React.Fragment>` without adding an extra DOM element to the output.
    - It's especially useful when you need to include a key or other attributes with your fragment.
  - `<></>`
    - It offers a more concise way to create fragments compared to other
    - You cannot include attributes like keys with this syntax.<br></br>

- What is Virtual DOM ?

  - In React, the Virtual DOM (Virtual Document Object Model) is a key concept and a performance optimization technique. It's a lightweight in-memory representation of the actual DOM (Document Object Model) of a web page. The Virtual DOM exists solely within the JavaScript memory and is used to improve the efficiency and speed of updating the user interface (UI).
  - `Initial Render:` When you create a React component and render it for the first time, React builds a Virtual DOM representation of the component's UI structure. This Virtual DOM is essentially a JavaScript tree with elements corresponding to the components in your application.
  - `Subsequent Updates:` When the state or props of a component change, React doesn't immediately update the actual DOM. Instead, it creates a new Virtual DOM representation of the updated UI.
  - `Reconciliation:` React then compares the new Virtual DOM with the previous one, a process known as "reconciliation" or "diffing." It identifies the differences between the two Virtual DOM representations.
  - `Minimal Updates:` After identifying the differences (or "diffs"), React calculates the most efficient way to update the actual DOM to reflect the changes. It minimizes direct manipulation of the real DOM by only applying the necessary updates to the specific elements that have changed.
  - `Batching Updates:` React often batches multiple updates together into a single operation to further optimize performance. This means that it can perform several updates to the Virtual DOM and then apply them all at once to the actual DOM.<br></br>

- What is Reconciliation in React ?

  - Reconciliation in React refers to the process by which React updates the user interface (UI) to reflect changes in the application's state or props. When a React component re-renders due to state or prop changes, React doesn't simply recreate the entire UI from scratch. Instead, it intelligently determines what has changed and efficiently updates only the parts of the UI that need to be updated.<br></br>

- What is React Fiber ?

  - React Fiber, often referred to simply as "Fiber," is a reimplementation of React's core algorithm for rendering and updating user interfaces. It was introduced in React version 16 to address key performance limitations in the previous rendering algorithm.
  - The primary goals of React Fiber are as follows:
    - Improved Rendering Performance
    - Better Support for Concurrent Mode
    - Priority Scheduling
    - Incremental Rendering
    - Error Handling
  - It's important to note that for most React developers, the introduction of React Fiber did not require any significant changes to their code. React Fiber was primarily an internal update to React's architecture, improving its performance and enabling new features like Concurrent Mode and Hooks.<br></br>

- Why we need keys in React ? When do we need keys in React ?

  - Keys in React are used to help React uniquely identify and track individual elements in a rendered list of components or DOM elements. They are essential when you render dynamic lists of elements, such as when you map over an array to create a series of components or DOM elements.<br></br>

- Can we use index a keys in React ?

  - While it is technically possible to use the index as keys in React, it is generally not recommended unless you have a specific use case where the items in the list are guaranteed to never change their order or be added/removed dynamically. Using index as keys can lead to issues in certain scenarios and should be used with caution.
  - To avoid the potential issues, it's recommended to use unique and stable keys whenever possible. If your data doesn't naturally provide unique keys, you can generate unique keys, such as using unique IDs from your data or using libraries like uuid to create keys that are less likely to collide. This ensures that React can properly manage and update your component tree, leading to a more reliable and efficient application.<br></br>

- What is props in React ?

  - In React, "props" is a shorthand for "properties," and it refers to a mechanism for passing data from a parent component to a child component. Props allow you to make your React components dynamic and reusable by providing a way to configure a component's behavior and appearance based on the data that is passed to it.<br></br>

- What is a Config Driven UI ?
  - A Config-Driven UI in React refers to an approach where the user interface (UI) of a web application is defined and generated based on configuration data rather than hardcoding the UI structure and behavior in code. In this approach, the UI elements, their layout, appearance, and behavior are driven by a configuration object or data structure.<br></br>

## Coding

- Build a Food Ordering App
  - Think of a cool name for your app
  - Build a AppLayout
  - Build a Header Component with Logo & Nav Items & Cart
  - Build a Body Component
    - Build RestaurantList Component
    - Build RestaurantCard Component
      - Use static data initially
      - Make your card dynamic (pass in props)
        - Props - passing arguments to a function - Use Destructuring & Spread operator
      - Render your cards with dynamic data of restaurants
      - Use Array.map to render all the restaurants


# Namaste React - Day 1 🚀

## Introduction to React

React is a powerful JavaScript library for building user interfaces, developed by Facebook. It excels at creating fast and interactive web applications, particularly single-page applications.

## Key Concepts 

### 1. What is a CDN (Content Delivery Network)?

A **CDN (Content Delivery Network)** is a system of distributed servers that deliver web content to a user based on their geographic location. CDNs help improve the performance, speed, and reliability of a website by reducing the distance between the server and the user.

- **How it works:**
  - When a user requests a web page, the CDN delivers the content from the server closest to the user, reducing load times and latency.
  - CDNs are widely used to deliver assets like images, videos, stylesheets, and scripts.

- **Example:**
  - React and other libraries can be delivered via CDN, allowing you to quickly include them in your projects without needing to install them locally.

### 2. What does "cross-origin" mean?

**Cross-Origin** refers to when a web page or resource is accessed from a different domain, protocol, or port than the one currently being used. This is common in web development when resources like images, fonts, or APIs are hosted on different domains.

- **Same-Origin Policy:**
  - Browsers enforce a security measure called the "Same-Origin Policy," which restricts how resources on one origin can interact with resources from another origin to prevent malicious attacks.

- **Cross-Origin Resource Sharing (CORS):**
  - CORS is a mechanism that allows servers to specify who can access their resources from different origins. It is implemented via HTTP headers.

- **Example:**
  ```html
  <script src="https://example.com/some-script.js" crossorigin></script>
  
# Namaste React - Day 2 🚀

## 1. What is Cross-Origin?

**Answer**: Cross-origin refers to making requests from one domain to another different domain. For example, if a web application on `example.com` requests data from `api.example.org`, it's a cross-origin request. 

---

## 2. What is `npm` at a Basic Level?

**Answer**: `npm` (Node Package Manager) is a tool used for managing packages (libraries and modules) in Node.js projects. It allows you to install, update, and manage dependencies for your project and access a large registry of open-source packages.

---

## 3. What is `package.json`?

**Answer**: `package.json` is a file in Node.js projects that contains metadata about the project, including its name, version, dependencies, and scripts. It helps manage project dependencies and configurations.

---

## 4. What is Babel in Short and Easy to Understand?

**Answer**: Babel is a JavaScript compiler that converts modern JavaScript code into an older version that is compatible with older browsers. It allows developers to use the latest JavaScript features while ensuring compatibility across different browsers.

---

## 5. What is a Bundler?

**Answer**: A bundler is a tool that combines multiple files (such as JavaScript, CSS, and HTML) into a single or a few bundles. This process helps optimize the loading of resources by reducing the number of HTTP requests and managing dependencies.

---

## 6. What is `npx`?

**Answer**: `npx` is a command-line tool that comes with npm, allowing you to run Node.js packages and commands without installing them globally. It is useful for executing commands and running packages on-the-fly.

---

## 7. What Does `-D` Mean in `npm install -D parcel`?

**Answer**: In `npm install -D parcel`, `-D` stands for `--save-dev`, indicating that the package should be installed as a development dependency, used only in the development phase of the project.

---

## 8. What is `package-lock.json`?

**Answer**: `package-lock.json` is an auto-generated file that locks the exact versions of dependencies installed in a project. It ensures consistent installations across different environments by recording the full dependency tree.

---

## 9. What is a Transitive Dependency?

**Answer**: A transitive dependency is a dependency of a dependency. If your project depends on `Library B`, and `Library B` depends on `Library C`, then `Library C` is a transitive dependency for your project.

---
# Namaste React - Day 3 🚀

## 1. What is the Difference Between React Elements and Components?

### **React Elements**
- **Definition**: React elements are the basic building blocks of a React application. They describe what should appear on the screen and are immutable.
- **Characteristics**: Simple units of UI, created using JSX or `React.createElement()`. They don't have internal logic or state.

### **React Components**
- **Definition**: React components are reusable pieces of UI that can be composed together to build more complex UIs. They can be functional or class-based.
- **Characteristics**: Components can manage state, accept props, and contain logic. They can return React elements and can be composed into other components.

## 2. What is Component Composition?

### **Definition**
- **Concept**: Component composition is the practice of combining multiple React components to build more complex UIs. It involves using components as building blocks to create a complete UI layout.
- **Benefits**: Enhances modularity and reusability, allowing for cleaner and more maintainable code. It helps in breaking down complex UIs into simpler, manageable parts.

## 3. How to Correct Common Syntax Errors in Functional Components?

### **Common Errors and Corrections**
- **Error**: Using incorrect syntax for returning JSX, such as mixing `return` statements with parentheses.
- **Correction**: Ensure that the JSX returned from a functional component is enclosed correctly within parentheses without the `return` keyword if using implicit returns. For explicit returns, use the `return` keyword properly.

## 4. What is JSX and How is it Used?

### **Definition**
- **JSX**: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript files. It makes it easier to describe what the UI should look like.
- **Usage**: JSX is compiled by tools like Babel into `React.createElement()` calls, which create React elements that are used to render the UI. It provides a more readable and expressive way to create elements compared to plain JavaScript.

# Namaste React - Day 4 🚀

## 1. Cloudinary
- **Definition**: Cloudinary is a cloud-based service for managing images and videos, providing features like optimization, transformation, and delivery.
- **Common Error**: `404 (Not Found)` indicates the requested image or resource could not be found. This often means the URL is incorrect or the resource has been deleted.

## 2. Carousel
- **Definition**: A carousel is a component that allows users to cycle through a series of items, typically images or content, in a slideshow format. It’s used to display multiple pieces of content in a confined space with navigation controls.

## 3. Props
- **Definition**: Props (short for properties) are used to pass data from a parent component to a child component in React. They allow components to be dynamic and reusable by providing them with different inputs.

## 4. Cuisine
- **Definition**: Cuisine refers to a style or method of cooking, especially as characteristic of a particular country, region, or establishment. For example, Italian cuisine includes dishes like pasta and pizza.

## 5. Conflict-Driven UI
- **Definition**: Conflict-driven UI refers to designing user interfaces that handle and resolve conflicts in data or user actions effectively. It involves ensuring that the UI provides clear feedback and resolution paths when conflicting actions or states arise.

# Namaste React - Day 5 🚀

## 1. Importance of the `src` folder
- The `src` folder contains the source code of the application.
- It organizes components, utilities, styles, and logic, making it easier to manage.

## 2. Types of Exports in JavaScript
- **Named Export**: Allows exporting multiple things from a module.
  - Example: `export const myVar = 42;`
- **Default Export**: Only one default export is allowed per module.
  - Example: `export default function() {...}`

## 3. Can We Use Default Export with Named Export?
- Yes, we can combine both in the same module.
  - Example:
    ```js
    export const myVar = 42;
    export default function() {...}
    ```

## 4. What are React Hooks?
- Hooks are functions that let you use state and lifecycle features in functional components.
- Common Hooks:
  - `useState`: For state management.
  - `useEffect`: For side effects like fetching data.
  
## 5. What is the Virtual DOM?
- A lightweight copy of the actual DOM, maintained in memory.
- React updates the Virtual DOM first, compares it with the real DOM, and only updates the necessary parts, improving performance.

## 6. Types of Algorithms in React
- **Diffing Algorithm**: React’s algorithm for comparing changes in the Virtual DOM with the actual DOM.
  
## 7. Reconciliation in React
- The process where React updates the actual DOM based on changes detected in the Virtual DOM using the diffing algorithm.

## 8. What is React Fiber?
- A new reconciliation engine in React 16+.
- Improves performance by breaking down the rendering process into units of work and prioritizing tasks.

# Namaste React - Day 6 🚀
#### 1. What is Shimmer?
Shimmer is a placeholder UI component used to indicate loading states. It typically displays a skeleton or shimmer effect to mimic the layout of the content that will be loaded, improving user experience by giving a visual cue that data is being fetched.

# Namaste React - Day 7 🚀

1. **React Router DOM**:
   - **Why use React Router DOM?**  
     React Router DOM allows you to implement dynamic routing in a web app, which helps in rendering different components or pages based on the URL.
   
   - **createBrowserRouter**:
     - A method in `react-router-dom` used to create the browser's routing system. It handles navigation via the URL.
   
   - **RouterProvider**:
     - This component is used to wrap your app and provide the router configuration to all child components.

   - **useParams**:
     - Hook that lets you extract dynamic parameters from the URL, such as an `id` of a restaurant or user.

   - **useRouterError**:
     - Provides error handling for routes that don't match any defined paths, enabling error boundary display.
    
# Namaste React - Day 8 🚀

1. **Class-Based Components:**
   - In React, class components extend `React.Component`.
   - They have lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
   - Use a constructor to initialize the state using `this.state`.

2. **State in Class Components:**
   - State is defined as an object, and updates to state are done using `this.setState()`.
   - Example:
     ```js
     this.state = { key: value };
     this.setState({ key: newValue });
     ```

3. **Props in Class Components:**
   - Props are passed to the component and accessed via `this.props`.
   - Props are read-only, used to display dynamic data.

4. **Lifecycle Methods:**
   - `componentDidMount()`: Executed after the component is rendered for the first time. Used for side effects such as API calls.
   - `componentDidUpdate()`: Runs after the component updates.
   - `componentWillUnmount()`: Cleanup actions like clearing timers or subscriptions.

5. **Fetching Data with Lifecycle Methods:**
- API calls are made inside `componentDidMount()`.
- Data can be stored in the state and rendered on the UI.

6. **Handling Component Updates:**
-Lifecycle methods handle the process of fetching, updating, and displaying data.
- React efficiently manages DOM updates when state changes.

# Namaste React - Day 9 🚀

1. **Custom Hooks**:
   - Functions that allow reusability of logic across different components.
   - Example: Fetching restaurant menu data using `useRestaurantMenu` hook.

2. **useEffect Hook**:
   - Used to handle side effects in React.
   - Runs after every render unless dependencies are specified.
   - Commonly used to fetch data, add event listeners, or manipulate DOM.

3. **Fetching API Data**:
   - Fetching data with `fetch` inside `useEffect` and handling async operations.
   - Updates state once data is retrieved successfully.

4. **CORS (Cross-Origin Resource Sharing)**:
   - Error occurs when a resource from a different domain is fetched without the correct headers.
   - CORS policy is enforced by browsers for security.
   
5. **Online Event Listener**:
   - An event listener that checks for the online/offline status of a user's browser.
   - `window.addEventListener("online", callback)` can be used to detect when a user goes online.
   
6. **Lazy Loading**:
   - A performance optimization technique in React to load components on demand.
   - React’s `React.lazy()` function is used to load components only when they are required.

7. **Suspense in React**:
   - React’s feature to show fallback content (e.g., a loading spinner) while lazy-loaded components are being fetched.
   - It works with `React.lazy()` to make the UI more user-friendly by displaying a fallback UI until the component is fully loaded.

8. **Chunking, Code Splitting, and Dynamic Bundling**:
   - **Chunking**: Breaking large files into smaller parts or "chunks".
   - **Code Splitting**: Dynamically loading parts of the application to reduce initial load time.
   - **Dynamic Bundling**: Only the required code is bundled based on how the app is being used.
   - **On-Demand Loading**: Load only what is required, deferring unnecessary code until later.
  
 9.  **Lazy Loading**:
     - A performance optimization technique in React to defer loading of components until they're needed.
     - Use `React.lazy()` to load components dynamically only when they are rendered.
     - Reduces the initial load time by splitting the code and loading the required part on demand.

10. **Suspense**:
     - Works with `React.lazy()` to allow React to display a fallback UI (like a loading spinner) while the lazy-loaded component is being fetched.


# Namaste React - Day 10 🚀

## 1. **Inline Styles**

### Description
- Inline styles involve applying CSS directly within HTML elements using the `style` attribute.

### Pros
- **Simplicity**: Easy to implement for small projects or individual elements.
- **Specificity**: High specificity due to inline application.
- **Scoped**: Styles are scoped to the component, avoiding global conflicts.

### Cons
- **Limited Features**: Lacks support for pseudo-classes, media queries, and complex styling.
- **Performance**: Can lead to performance issues if overused, as styles are recalculated frequently.
- **Maintainability**: Difficult to manage and update styles across multiple components.

## 2. **CSS Modules**

### Description
- CSS Modules provide a way to scope CSS by automatically generating unique class names.

### Pros
- **Scoped Styles**: Ensures styles are scoped to the component, avoiding global conflicts.
- **Maintainability**: Styles are organized in separate files, improving readability and maintainability.
- **Modularity**: Encourages modular design, making it easier to manage large codebases.

### Cons
- **Learning Curve**: Requires configuration and understanding of module bundlers (e.g., Webpack).
- **Class Name Management**: Auto-generated class names can be less readable compared to manually defined names.
- **Limited Global Styles**: Managing global styles or themes can be cumbersome.

## 3. **Styled Components**

### Description
- Styled Components is a library that allows for styling components using tagged template literals and JavaScript.

### Pros
- **Component-Based**: Styles are encapsulated within components, improving modularity.
- **Dynamic Styling**: Supports dynamic styling based on props and state.
- **CSS Features**: Full support for CSS features, including pseudo-classes and media queries.

### Cons
- **Performance**: May have a performance overhead due to runtime CSS generation.
- **Learning Curve**: Requires learning a new syntax and library.
- **Dependency**: Adds a dependency to the project, which may increase bundle size.

## 4. **Emotion**

### Description
- Emotion is a library for writing CSS styles with JavaScript, similar to Styled Components.

### Pros
- **Performance**: Optimized for performance with runtime CSS generation and caching.
- **Flexibility**: Offers both styled components and CSS-in-JS styles with high flexibility.
- **Dynamic Styles**: Supports dynamic styling and theming easily.

### Cons
- **Complexity**: Requires understanding of both CSS-in-JS and Emotion-specific APIs.
- **Bundle Size**: Adds additional dependencies which can impact the bundle size.
- **Tooling**: May require additional configuration for full-featured support in some environments.

## 5. **Tailwind CSS**

### Description
- Tailwind CSS is a utility-first CSS framework that allows styling through predefined classes.

### Pros
- **Utility-First**: Encourages reusable and composable styles, reducing the need for custom CSS.
- **Rapid Development**: Speeds up development with a comprehensive set of utility classes.
- **Consistency**: Ensures design consistency across the application through a standardized set of classes.

### Cons
- **Class Proliferation**: Can lead to verbose HTML with many utility classes.
- **Learning Curve**: Requires learning the utility classes and framework conventions.
- **Customization**: May require configuration to match specific design requirements or themes.

# Namaste React - Day 11 🚀

1. **Higher Order Components (HOC)**:
   - A function that takes a component as input and returns a new component.
   - Useful for code reuse and logic separation in React apps.

2. **Rendering Patterns**:
   - Use of `React.createContext()` to create context and pass data without props drilling.
   - How `Context.Provider` works to pass values down to nested components.

3. **Suspense and Lazy Loading**:
   - `React.lazy()` used for dynamic imports to load components lazily.
   - `Suspense` handles loading fallback until the lazy-loaded component is ready.

4. **useEffect Hook**:
   - Demonstrated making API calls and updating state within `useEffect`.
   - Ensuring cleanup and effect dependency management.

5. **User Context Implementation**:
   - How to implement and use `UserContext` for global state across components.
   - Passing the user object via context, allowing components to consume the context data.

6. **Routing in React**:
   - Dynamic routing with `react-router-dom` and nested routes using `Outlet`.
   - Error handling routes with `errorElement`.

7. **Optimizing Performance**:
   - Lazy loading components to optimize performance.
   - Minimizing re-renders with appropriate use of state and context.

8. **API Call Simulation**:
   - Simulated API call inside `useEffect` and updating state.
   - Using state to display dynamic data (e.g., username).
  
   ## What are Higher Order Components (HOC)?

**Higher Order Components (HOC)** are functions in React that take a component as input and return a new component. They enable code reusability and logic sharing across multiple components without modifying the component itself. HOCs are often used to inject additional props, handle state, or enhance the original component with extra functionality.

Example use cases:
- Authentication handling
- Caching data
- Logging

---

## What is Lifting State Up?

**Lifting State Up** refers to moving the shared state to the closest common ancestor of the components that need it. In React, this is necessary when two or more components need to share the same data. By lifting the state up, it can be passed down as props, ensuring that the shared state is centralized and the components stay in sync.

---

## What is Props Drilling?

**Props Drilling** is the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components. This can lead to complex and difficult-to-manage code, especially when many components don’t use the props themselves but are required to pass them down the tree.

---

## What is React Context?

**React Context** provides a way to share values (like global state) between components without having to explicitly pass props down through every level of the component tree. By using `React.createContext()`, values can be provided via a `Context.Provider` and consumed anywhere in the component hierarchy with `useContext`.

Use cases:
- User authentication data
- Theme settings (light/dark mode)
- Language preferences

---

## What is UserContext Provider?

The **UserContext Provider** in React is a part of the Context API that allows global state management. The provider component allows us to supply values to all the child components within its tree, so these components can consume the context without having to pass props down manually. It helps in avoiding props drilling and makes the code more scalable.

# Namaste React - Day 12 🚀

### 1. **Redux Fundamentals**
   - Introduction to Redux as a state management library.
   - The concept of having a **single source of truth**.
   - Use of **actions**, **reducers**, and **store** to manage the state.

### 2. **Redux Toolkit (RTK)**
   - Simplified approach to work with Redux using **@reduxjs/toolkit**.
   - Explanation of **configureStore**, **createSlice** for state management.
   - Discussed Redux DevTools for easy state inspection.

### 3. **Provider and Connect in Redux**
   - The role of **Provider** to make the Redux store available to all components.
   - Using **useSelector** and **useDispatch** hooks to interact with Redux in functional components.

### 4. **Understanding Immer**
   - **Immer** is used internally by Redux Toolkit to allow immutable updates.
   - Explanation of how Immer simplifies state updates in reducers without manually copying the state.





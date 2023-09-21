# Topics

## Testing

- Manual Testing (General)
- Developer Testing

  - Unit Testing - => It refers to the practice of testing individual units or components of your React application in isolation
  - Integration Testing => This tests focus on how components interact with one another and with the overall application.
  - End to End Testing => e2e testing => It is a testing approach that focuses on testing the entire application from start to finish.

- Component will be rendered in jsdom environment which is similar to the browser like environment during running test cases.(render method)

## Installation & Setup

- Install React Testing Library - [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)
- Install Jest -[Jest Docs](https://jestjs.io/docs/getting-started)
- Install Babel dependencies - [babel config in Jest Docs](https://jestjs.io/docs/getting-started#using-babel)
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation => [Parcel Docs](https://parceljs.org/languages/javascript/#usage-with-other-tools)
- Jest Configuration
  - npx jest --init => It will create the jest config file
- Install jsdom library - [RTL Docs](https://testing-library.com/docs/react-testing-library/setup#jest-28)
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config.
- Install npm i -D @testing-library/jest-dom

## Important Points

- We need to wrap our component with

  - act when any state is updating or async operations are taking place in the component
  - BrowserRouter when Link is used.
  - Provider when redux store is used.

- beforeAll(()=>{}) => this function will be before the all tests
- beforeEach(()=>{}) => this function will be before the each test
- afterAll(()=>{}) => this function will be after the all tests
- afterEach(()=>{}) => this function will be after the each test

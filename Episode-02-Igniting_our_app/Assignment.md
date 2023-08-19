# Assignment-2

## Theory

- What is NPM ?
  - $\color{green}{NPM}$ is used to manage the node packages for Javascript and Nodejs.npm allows developers to easily manage and share reusable pieces of code, called packages or modules, that can be integrated into their projects. <br><br>
- What is parcel/webpack ? Why do we need it ?

  - Both Parcel and webpack are popular build tools in the JavaScript ecosystem that are used to bundle, optimize, and manage the assets of web applications. They help streamline the development process by handling tasks such as code splitting, minification, transpilation, and more
  - Parcel is a modern, zero-config build tool that aims to simplify the setup and configuration process for developers. It requires minimal configuration out of the box and is designed to be easy to use for both beginners and experienced developers. Some key features of Parcel include, Zero Configuration, Built-in Asset Types, Hot Module Replacement (HMR), Automatic Dependency Management, Code Splitting.
  - webpack is a powerful and highly configurable build tool that offers a wide range of features for bundling and optimizing assets. It has a steeper learning curve compared to Parcel due to its extensive configuration options, but it provides more fine-grained control over the build process. Some key features of webpack include, High Customizability, Module System, Loaders and Plugins, Code Splitting and Chunking, Extensive Ecosystem.
  - Both Parcel and webpack address the complexity of modern web development, where applications are built using multiple files, frameworks, libraries, and assets. The need for efficient asset management, code optimization, and performance improvements has led to the development of these tools. They help developers bundle assets, optimize code, and create production-ready builds, ultimately leading to faster-loading web applications with better user experiences. The choice between Parcel and webpack often depends on factors such as project complexity, developer preferences, and the desired level of control over the build process. <br><br>

- What is .parcel-cache ?
  - The .parcel-cache directory is a directory created by the Parcel bundler during the build process. Parcel is a build tool that is used to bundle and optimize assets such as JavaScript, CSS, images, and more for web applications. The .parcel-cache directory serves as a caching mechanism to improve the build performance for subsequent builds. <br><br>
- What is npx ?
  - npx is a command-line tool that comes with npm and is used to execute Node.js packages. It stands for "Node Package Execute" and it's primarily designed to make it easier to run packages that are distributed and installed via npm without the need to globally install them. <br><br>
- What is difference between dependencies vs devDependencies ?

  - Dependencies are packages that are essential for the normal operation of your application when it's in production or being used by end-users. These packages are required for the application to function as intended. They typically include runtime libraries, frameworks, and tools that are necessary for the application's core functionality.
  - "DevDependencies" are packages that are only needed during the development and testing phases of your application's lifecycle. They include tools, libraries, and utilities that aid in tasks such as building, testing, linting, and debugging your code. These packages are not required for the application to run in a production environment and are not included when the application is deployed.DevDependencies are typically used for tools like testing frameworks, build tools, mock data generators, and code linting utilities. They help maintain code quality, ensure proper testing, and facilitate the development process, but they don't impact the runtime behavior of the application. <br><br>

- What is Tree Shaking ?
  - Tree shaking is a technique used in modern JavaScript build tools, such as bundlers like Webpack, to eliminate dead code (unused or unreachable code) from your application's final bundled output. The term "tree shaking" comes from the idea of "shaking" the dependency tree of your application to remove any unnecessary parts, leaving only the code that is actually being used.
  - It is often associated with optimizing the size of JavaScript bundles, which can lead to faster loading times and better performance for web applications <br><br>
- What is Hot Module Replacement
  - Hot Module Replacement (HMR) is a development feature that allows developers to update parts of a web application in real time without requiring a full page reload. It's a powerful tool that significantly speeds up the development process by providing a more dynamic and interactive development environment.
  - It is commonly used in combination with bundlers like Webpack or Parcel and development servers to enhance the developer experience
  - It is especially valuable for front-end development, where the development cycle can involve a lot of small changes and adjustments. It saves a significant amount of time that would otherwise be spent on manually refreshing the browser and navigating back to the state you were testing.
- List down your 5 superpowers of Parcel and describe any 3 of them in your own words ?
  - Dev Build
  - Local Server
  - HMR -> Hot Module Replacement
  - Caching
  - Image Optimization
  - Minification
  - Bundling
  - Code Splitting
  - Differential Bundling
  - Error Handling
  - HTTPs
  - Tree Shaking - remove unused code
  - Different dev and production bundles <br><br>
- What is .gitignore ? What should we add and not add into it ?
  - The .gitignore file is a configuration file used by the version control system Git to specify which files and directories should be excluded from being tracked and committed in a Git repository. It's particularly useful for preventing certain types of files, such as build artifacts, temporary files, and sensitive information, from being included in the repository history.
  - We should add folders/files like node-modules, build, and .env etc to aviod committing them to git repository.
  - We should not add things like source code, README.md and config files etc. <br><br>
- Whats is the difference between package.json and package-lock.json ?
  - `package.json` is a metadata file for your Node.js project. It contains information about the project, such as its name, version, author, description, and most importantly, the list of dependencies (and devDependencies) required for the project to run. These dependencies are listed with their names and version ranges.
  - `package-lock.json` is a lockfile automatically generated by npm when dependencies are installed or updated. It ensures that a specific version of each dependency is installed consistently across different environments, regardless of potential updates to the dependencies' versions. <br><br>
- Why should i not modify package-lock.json ?
  - `package-lock.json` is a file generated by npm to ensure deterministic and consistent installations of dependencies in a Node.js project. While it might be tempting to modify this file directly, it's generally recommended to avoid doing so for several important reasons like Dependency Consistency, Version Conflicts, Security and Stability,Maintenance Overhead etc. <br><br>
- What is node-modules ? Is it a good idea to push that on git ?
  - node_modules is a directory that is automatically created by Node.js when you use package managers like npm or Yarn to install project dependencies. It contains all the packages (libraries) that your project depends on, including their own dependencies (known as "sub-dependencies"). These packages are downloaded from the npm registry or other specified sources.
  - We should not push the node-modules to git repository because of the reasons like Large code, duplication etc
- What is the dist folder ?
  - It's a directory where the final, optimized, and production-ready version of your application is generated. The contents of the dist folder are what you would deploy to a web server or hosting platform to make your React app available to users.
  - The dist folder is created as part of the build process, where your source code is transformed, bundled, and optimized for production. This process usually involves :
  - `Transpilation` : Converting modern JavaScript (ES6+) code into a version of JavaScript that is compatible with a wide range of browsers.
  - `Bundling` : Combining multiple JavaScript, CSS, and other assets into a smaller number of files to reduce the number of requests the browser needs to make.
  - `Minification` : Removing unnecessary whitespace, comments, and renaming variables to create smaller file sizes.
  - `Tree Shaking` : Removing unused code to further reduce the size of the output bundle.
  - `Asset Optimization` : Optimizing images, fonts, and other assets to reduce their size while maintaining quality.
  - `Hashing` : Adding unique hashes to file names to ensure cache busting, so that users get the latest version of your app when changes are made. <br><br>
- What is browserslist ? Read about different bundlers like vite, webpack, parcel ?
  - `browserslist` is a configuration file used in web development projects, including React applications, to define the range of browser versions that your code should support. It's a tool that helps you ensure that your web application is compatible with a specific set of browsers and their versions.
  - You can also include this configuration in your package.json file under the "browserslist" field.
  - [browserslist_docs](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) <br><br>
- Read about carent ("^") and tilde ("~")
  - The `caret` (^) and `tilde` (~) symbols are used in version ranges within a package.json file in the context of npm (Node Package Manager) to specify which versions of a package are acceptable for your project's dependencies. These symbols help control how aggressively updates to dependencies are applied while still maintaining compatibility.
  - Version 1.2.3 refers to Major(1).Minor(2).Patch(3).
  - The caret (^) is used for automatically updating the minor updates along with patch updates.
  - The tilde (~) is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.<br><br>
- Read about script types in html (MDN Docs)
  - In the context of HTML, "scripts" refer to blocks of code written in JavaScript that are embedded within an HTML document. These scripts are executed by the web browser when the HTML page is loaded or interacted with by users. JavaScript is a programming language commonly used for adding interactivity, dynamic behavior, and functionality to web pages.

export const technologiesList = [
  {
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) is a standard markup language used to create web pages and applications. It is used to structure and present content on the World Wide Web. HTML consists of a series of elements, represented by tags, which are used to define the structure and content of a document. These elements can be manipulated with CSS (Cascading Style Sheets) to change their appearance and layout. HTML is written in the form of HTML elements, which consist of tags enclosed in angle brackets. HTML documents are made up of two main parts: the head and the body. The head contains metadata about the document, such as the title and any linked CSS or JavaScript files, while the body contains the actual content of the document.',
    thumb: require('../../images/tecnologies/HTML5_logo_and_wordmark.png'),
  },
  {
    name: 'CSS',
    description: 'CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML. It is used to control the presentation of web pages and applications, and can be used to create consistent, visually appealing designs across multiple pages or devices. CSS is a flexible way to style HTML elements and can be applied to text, images, and other content. It is written in the form of rules, which consist of a selector (identifies the element or elements to be styled) and a declaration block (specifies the styling to be applied). CSS can be applied to a single element, multiple elements, or an entire web page. It can be linked to an HTML document or placed in a separate file, and can be edited or modified to change the appearance of a website or application.',
    thumb: require('../../images/tecnologies/CSS3_logo_and_wordmark.png'),
  },
  {
    name: 'JAVASCRIPT',
    description: `JavaScript is a programming language that is widely used to create interactive websites and web applications. It is used to add dynamic and interactive elements to HTML pages, such as dropdown menus, pop-up windows, and more. JavaScript is a client-side language, which means that it runs in the user's web browser rather than on the server. This allows it to respond to user input and interactivity in real time. JavaScript is an object-oriented language, which means it is organized around objects rather than actions. It is also a lightweight, interpreted language, which means that it is easier to learn and use than some other programming languages. JavaScript can be used to create a wide range of applications, including games, mobile apps, and desktop applications.`,
    thumb: require('../../images/tecnologies/JavaScript-Logo.png'),
  },
  {
    name: 'C#',
    description: 'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It is a statically-typed language, which means that the data type of a variable must be specified when it is declared. C# is widely used to create a variety of applications, including Windows desktop applications, Windows Store apps, and web applications. C# is part of the .NET framework, which provides a set of tools and libraries for building and running applications. C# is designed to be simple, powerful, and easy to learn, with a syntax that is similar to other C-style languages such as C++ and Java. It also supports features such as inheritance, polymorphism, and encapsulation, which allow developers to create reusable and modular code. C# is a popular language for building a wide range of applications, and is used by many companies and organizations around the world.',
    thumb: require('../../images/tecnologies/c-sharp.png'),
  },
  {
    name: 'REACT',
    description: 'React is a JavaScript library for building user interfaces (UI). It is used to create reusable UI components, which can be combined to build complex and interactive user interfaces. React is designed to be declarative, meaning that it describes the desired state of the UI and the changes that should be made to achieve that state, rather than specifying how the UI should be implemented. This makes it easier to reason about and debug React code. React is often used in combination with other tools and libraries, such as Redux or React Router, to create modern, scalable web applications. It is widely used by companies and organizations around the world, including Facebook, Airbnb, and Netflix.',
    thumb: require('../../images/tecnologies/React-icon.svg.png'),
  },
  {
    name: 'REDUX',
    description: `Redux is a state management library for JavaScript applications. It is often used in combination with a library like React to manage the state of a user interface (UI) in a predictable and transparent way.

    In a Redux-based application, the entire state of the app is stored in a single, immutable state tree, which is managed by a central store. This state tree can only be modified through the dispatch of actions, which are plain JavaScript objects that describe a change to the state.
    
    Redux uses a set of functions called reducers to handle these actions and update the state tree in a predictable way. These reducers are pure functions that take the current state of the application and an action, and return a new state based on the action.
    
    Redux is designed to be simple, flexible, and easy to test. It is widely used to build modern, scalable web applications, and is particularly popular among developers who work with React.`,
    thumb: require('../../images/tecnologies/reduex.png'),
  },
  {
    name: 'TAILWIND',
    description: `Tailwind CSS is a utility-first CSS framework that is designed to make it easy to build custom designs without having to write a lot of custom CSS. It provides a set of low-level utility classes that can be combined to style HTML elements in a flexible and customizable way.

    Tailwind is based on the idea of "functional CSS," which means that it uses a declarative, utility-based approach to styling. Instead of defining traditional CSS styles for things like font size and color, Tailwind provides a set of utility classes that can be applied directly to HTML elements. These classes are designed to be composable, so that you can combine multiple classes to achieve the desired style.
    
    Tailwind is designed to be easy to learn and use, and it is particularly popular among developers who want to build custom designs without having to write a lot of CSS. It is also highly customizable, allowing you to define your own styles and design patterns to use in your projects.`,
    thumb: require('../../images/tecnologies/Tailwind_CSS_Logo.svg.png'),
  },
  {
    name: 'JEST',
    description: `Jest is a JavaScript testing framework that is widely used for unit, integration, and end-to-end testing. It is designed to be fast, easy to use, and flexible, with a focus on simplicity. Jest is built on top of Jasmine, a popular behavior-driven development (BDD) testing framework, and it includes many of the same features, such as support for assertions, mocks, and spies.

    Jest is often used in combination with a library like React, and it includes a set of utilities for working with React components, such as a powerful snapshot testing feature that can be used to test the rendering of React components. Jest also includes a command-line interface (CLI) that makes it easy to run tests, generate test coverage reports, and integrate with continuous integration (CI) systems.
    
    Jest is highly popular among developers and is widely used by companies and organizations around the world. It is known for its speed, simplicity, and flexibility, making it a popular choice for testing a wide range of applications.`,
    thumb: require('../../images/tecnologies/jest.png'),
  },
  {
    name: 'REACT TESTING LIBRARY',
    description: `React Testing Library is a testing library for testing React components. It is designed to be simple, flexible, and easy to use, with a focus on testing the behavior of React components rather than their implementation.

    React Testing Library provides a set of utility functions that can be used to test React components in a way that is similar to how a user would interact with them. It encourages developers to write tests that are more focused on the user experience, rather than on the implementation details of the components being tested.
    
    React Testing Library is often used in combination with a library like Jest, and it includes a set of utilities for working with Jest, such as the ability to create mock functions and test async code. It is highly popular among developers and is widely used by companies and organizations around the world.`,
    thumb: require('../../images/tecnologies/rtl.png'),
  },
  {
    name: 'FIGMA',
    description: `Figma is a cloud-based design and prototyping tool that is used to create and collaborate on user interfaces (UI) and user experience (UX) designs. It is used by designers to create and iterate on wireframes, mockups, and prototypes for websites, mobile apps, and other software products.

    Figma is a browser-based tool that can be used on any device with an internet connection, and it includes a range of features for designing and prototyping, such as vector graphics editing, layout tools, and collaboration tools. It also includes a built-in prototyping feature, which allows designers to create interactive prototypes that can be tested and reviewed by stakeholders.
    
    Figma is known for its simplicity and ease of use, and it is widely used by designers and teams in a variety of industries. It is also highly popular among developers, who use it to create and collaborate on designs for web and mobile applications.`,
    thumb: require('../../images/tecnologies/figma.png'),
  },
  {
    name: 'GIT',
    description: `Git is a version control system that is used to track changes to files and collaborate on projects with other developers. It allows developers to keep a history of their work, roll back changes if necessary, and work on projects with multiple developers without overwriting each other's changes.

    Git is a distributed version control system, which means that each developer has a copy of the entire project on their local machine. This allows developers to work offline and commit changes to their local repository, and then push those changes to a central server when they are ready to be shared with other developers.
    
    Git is widely used by developers and organizations around the world, and it is particularly popular for managing source code for software projects. It is known for its speed, reliability, and flexibility, and it is used by a wide range of companies and organizations to manage their development projects.`,
    thumb: require('../../images/tecnologies/git.png'),
  },
  {
    name: 'GIT HUB',
    description: `GitHub is a web-based platform for hosting and collaborating on Git repositories. It is used by millions of developers around the world to share and work on projects with other developers. GitHub provides a range of tools and features for collaborative development, such as version control, project management, and team communication.

    In addition to hosting Git repositories, GitHub also provides a range of tools for continuous integration, code review, and project management. It is used by companies and organizations of all sizes to host and manage their software projects, and it is particularly popular among open-source developers and communities.
    
    GitHub also provides a range of social features, such as the ability to follow other users and organizations, and to discover and contribute to open-source projects. It is a central hub for the development community, and is widely used by developers, companies, and organizations around the world.`,
    thumb: require('../../images/tecnologies/GitHub-Logo.png'),
  },
];

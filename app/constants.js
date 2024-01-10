export const SKILLS_DATA = {
  frontend: [
    {
      title: 'React.js',
      avatar: '/react.png',
      description:
        'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.',
    },
    {
      title: 'Next.js',
      avatar: '/next.webp',
      description: `Next.js is a JavaScript framework built on React for developing modern web applications. It supports server-side rendering, static site generation, automatic code splitting, and simplified routing. With features like API routes and a plugin system, Next.js simplifies the development process and enhances performance. It's widely used for building scalable and maintainable web applications in the React ecosystem.`,
    },
    {
      title: 'Tailwind CSS',
      avatar: '/tailwind.webp',
      description:
        'Tailwind CSS is a utility-first CSS framework that offers a set of pre-designed, low-level utility classes for direct use in HTML. It emphasizes flexibility, customization, and simplicity in styling web applications.',
    },
    {
      title: 'MaterialUI',
      avatar: '/mui.png',
      description: `Material-UI is a React UI framework that implements Google's Material Design principles. It provides a set of pre-designed React components with a consistent look and feel, following Material Design guidelines. Material-UI simplifies the development of visually appealing and responsive user interfaces in React applications.`,
    },
    {
      title: 'Bootstrap 5',
      avatar: '/bootstrap.webp',
      description: `Bootstrap 5 is a popular open-source front-end framework for building responsive and mobile-first web applications. It provides a collection of pre-designed HTML, CSS, and JavaScript components, such as navigation bars, buttons, forms, and modals, to streamline the development process. Bootstrap 5 focuses on flexibility, customization, and a lighter footprint compared to its predecessors. It's widely used for creating modern and visually appealing websites and web applications.`,
    },
    {
      title: 'React Admin',
      avatar: '/ra.jpg',
      description: `React Admin is a frontend framework for creating admin interfaces in React. It simplifies the process with declarative configuration, ready-to-use components, and support for various data providers. It's commonly used for building admin panels, offering features like authentication, responsive design, and easy theming.`,
    },
  ],
  backend: [
    {
      title: 'Node.js',
      avatar: '/node.png',
      description: `Node.js is a server-side JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code on the server, enabling the development of scalable and high-performance web applications. Node.js is known for its event-driven, non-blocking I/O model, which makes it well-suited for building real-time applications, APIs, and server-side components. It has a large and active ecosystem of packages and modules available through npm (Node Package Manager), facilitating easy integration of third-party libraries. Node.js is widely used for building backend services, server-side applications, and asynchronous web applications.`,
    },
    {
      title: 'Express.js',
      avatar: '/express.png',
      description: `Express.js is a minimal and flexible Node.js web application framework that simplifies the development of web servers and APIs. It features easy routing, middleware support, template engines, and a straightforward syntax, making it widely used for building web applications and APIs in the Node.js ecosystem.`,
    },
    {
      title: 'GraphQL',
      avatar: '/gql.png',
      description: `GraphQL is a query language and runtime for APIs that provides a more efficient and flexible alternative to traditional REST APIs. With GraphQL, clients can request exactly the data they need, and the server responds with a JSON payload tailored to the specific request. It allows for a single endpoint, reducing over-fetching and under-fetching of data. GraphQL is language-agnostic and has gained popularity for its ability to simplify data fetching and improve the efficiency of communication between clients and servers.`,
    },
    {
      title: 'Socket IO',
      avatar: '/socket.png',
      description: `Socket.IO is a JavaScript library for real-time web applications, enabling bidirectional communication between clients and servers. It uses WebSockets for low-latency communication and supports event-driven interactions, making it ideal for real-time applications like chat and gaming.`,
    },
  ],
  databases: [
    {
      title: 'MongoDB',
      avatar: '/mongo.png',
      description: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability, high performance, and ease of development. MongoDB uses a document-oriented model, where data is stored in collections of documents, and each document is a set of key-value pairs. It is widely used for various applications, including web development, mobile applications, and big data solutions. MongoDB supports dynamic schema, automatic sharding, and provides a rich set of features for querying and indexing data.`,
    },
    {
      title: 'MySQL',
      avatar: '/mysql.png',
      description: `MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing and manipulating data. It is widely used for various applications, including web development, business applications, and more. MySQL follows the traditional relational database model, organizing data into tables with rows and columns. It supports ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity. MySQL is known for its reliability, performance, and scalability, making it a popular choice for both small and large-scale database applications.`,
    },
    {
      title: 'PostgreSQL',
      avatar: '/postgre.png',
      description: `PostgreSQL is an open-source relational database management system (RDBMS) known for its advanced features, extensibility, and standards compliance. It follows the SQL standard and supports ACID (Atomicity, Consistency, Isolation, Durability) properties for reliable data management. PostgreSQL uses a robust and extensible architecture, allowing the creation of custom functions, data types, and indexing methods. It supports complex queries, joins, and transactions, making it suitable for a wide range of applications. PostgreSQL is often chosen for its performance, extensibility, and support for geographic information systems (GIS) capabilities.`,
    },
  ],
  orm: [
    {
      title: 'Prisma',
      avatar: '/prisma.jpg',
      description: `Prisma is a database toolkit that provides a type-safe and auto-generated query builder for various databases, such as PostgreSQL and MySQL. It simplifies database access, supports type-safe queries, and facilitates database migrations. Prisma is often used in GraphQL and REST API servers.`,
    },
    {
      title: 'Mongoose',
      avatar: '/mongoose.png',
      description: `Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to define data models and interact with MongoDB databases using JavaScript or TypeScript. Mongoose abstracts the complexities of MongoDB queries, validation, and schema definition, making it easier for developers to work with MongoDB in a Node.js environment. It includes features like middleware, schema-based validation, and support for building queries using a fluent API. Mongoose is widely used for building applications with MongoDB, offering an organized and expressive way to interact with the database.`,
    },
    {
      title: 'Sequelize',
      avatar: '/sqlize.png',
      description: `Sequelize is a promise-based Node.js ORM for relational databases. It simplifies database interactions by allowing developers to work with JavaScript objects, providing features like model definition, data validation, querying, associations, migrations, and hooks.`,
    },
  ],
  baas: [
    {
      title: 'Firebase',
      avatar: '/firebase.png',
      description: `Firebase is a Google-backed platform providing services for mobile and web app development. It includes features like a real-time database, authentication, cloud functions, hosting, and cloud storage. Firebase simplifies development, offering tools and infrastructure for building interactive applications with ease.`,
    },
    {
      title: 'Supabase',
      avatar: '/supabase.png',
      description: `Supabase is an open-source platform that provides a set of tools and services for building backend applications. It includes features like a real-time database, authentication, file storage, and more. Supabase is designed to be an alternative to traditional backend-as-a-service (BaaS) platforms, and it focuses on simplicity, extensibility, and open-source collaboration. It is built on top of PostgreSQL, allowing developers to leverage the power and flexibility of a relational database while benefiting from Supabase's user-friendly API and real-time capabilities.`,
    },
    {
      title: 'Parse Platform',
      avatar: '/parse.png',
      description: `Parse Platform is an open-source framework for building scalable backend applications. It offers services like database management, user authentication, file storage, real-time data synchronization, and push notifications. Developers can use Parse Platform for building server-side components for mobile, web, and IoT applications.`,
    },
  ],
  web3: [
    {
      title: 'Web3.js',
      avatar: '/web3.png',
      description: `Web3.js is a JavaScript library for interacting with the Ethereum blockchain, facilitating the development of decentralized applications (DApps). It enables tasks like querying blockchain data, interacting with smart contracts, handling events, and managing Ethereum accounts.`,
    },
    {
      title: 'Ether.js',
      avatar: '/ether.png',
      description: `It appears there might be a slight confusion. The correct library is "ethers.js" (not "ether.js"). Ethers.js is a JavaScript library for interacting with the Ethereum blockchain, similar to Web3.js. It provides a simple and powerful API for tasks such as creating wallets, sending transactions, and interacting with smart contracts. Ethers.js is often chosen for its clean design, ease of use, and support for both browser and Node.js environments.`,
    },
    {
      title: 'Immutable.js',
      avatar: '/immuttable.png',
      description: `Immutable.js is a JavaScript library that offers persistent, immutable data structures. It promotes a functional programming approach, optimizing memory usage and supporting concurrency control. It is often used in React and Redux applications for predictable state management.`,
    },
  ],
  ai: [
    {
      title: 'ml5.js',
      avatar: '/ml5.png',
      description: `ml5.js is a JavaScript library simplifying the integration of machine learning models in web applications. It provides pre-trained models, a user-friendly API, browser compatibility, and encourages community collaboration. Ideal for creative coding and art projects.`,
    },
    {
      title: 'Tensorflow',
      avatar: '/tfjs.png',
      description: `TensorFlow.js is a JavaScript library by Google for machine learning in the browser or Node.js. It enables training and deployment of models directly in web applications, supports transfer learning, and provides a high-level neural network API. Widely used for browser-based ML applications and interactive demos.`,
    },
    {
      title: 'HuggingFace',
      avatar: '/hf.png',
      description: `Hugging Face is an NLP-focused company and open-source platform, known for its Transformers library offering pre-trained models for various NLP tasks. The Model Hub allows users to discover and share models, and the platform provides tokenizers, training pipelines, and fosters community contributions in the NLP space.`,
    },
    {
      title: 'LangChain',
      avatar: '/langchain.png',
      description: `LangChain streamlines intermediate steps to develop such data-responsive applications, making prompt engineering more efficient. It is designed to develop diverse applications powered by language models more effortlessly, including chatbots, question-answering, content generation, summarizers, and more.`,
    },
  ],
  ar: [
    {
      title: 'AFrame.js',
      avatar: '/aframe.png',
      description: `A-Frame is a web framework for building virtual reality (VR) experiences. It simplifies the creation of VR content on the web by utilizing HTML-like markup. Developers can use A-Frame to build immersive 3D scenes and VR applications that can be experienced directly in a web browser, supporting a wide range of VR devices. It's known for its simplicity and accessibility, making VR development more approachable for web developers.`,
    },
    {
      title: 'AR.js',
      avatar: '/arjs.png',
      description: `AR.js is an open-source JavaScript library for creating augmented reality (AR) experiences on the web. It allows developers to integrate AR content into web applications using a simple HTML-based syntax. AR.js utilizes computer vision techniques to track images or markers in the user's environment and overlay virtual elements on the real world through the device's camera. It's lightweight and accessible, making it a popular choice for web-based AR development.`,
    },
  ],
};

export const PORTFOLIO_DATA = [
  {
    title: 'RTSN',
    avatar: '/rtsn.png',
    description: `Join to discover exciting Metaverse Creators to Collaborate and launch NFTs. Find opportunities to Build exciting Virtual worlds, Avatars, Wearables.`,
    tags: ['Next.js', 'Ether.js', 'Express.js', 'MaterialUI', 'MongoDB'],
    link: 'https://rtsn.xyz/',
  },
  {
    title: 'Greenbox Mobile Energy',
    avatar: '/greenbox.jpg',
    description: `Greenbox Mobile Energy facilitates the rapid shift towards emission-free mobility by supplying energy precisely where it's needed. Through partnerships with industry leaders in infrastructure and energy, we develop innovative p2x solutions.
    
    We target players in the energy, infrastructure, and mobility markets seeking innovation in green energy supply, specifically focusing on green electricity and hydrogen.
    
    Our expertise lies in creating mobile off-grid stations for charging electric vehicles with green electricity or refueling them with green hydrogen.
    
    To ensure a continuous supply of green energy, our proprietary software solution, GME OS, utilizes data intelligence and machine learning to oversee the Energy-as-a-Service operation. This guarantees uninterrupted access to environmentally friendly energy for our customers.`,
    tags: ['React.js', 'GoLang', 'MaterialUI', 'PostgreSQL'],
    link: 'https://greenboxmobile.app/',
  },
  {
    title: 'Yaeger CPA Review',
    avatar: '/yaeger.jpg',
    description: `Yaeger CPA Review fully integrates the AICPA Blueprints into all study materials. Rather than waste time on rote memorization, our instructors teach you to understand the concepts and apply your critical thinking skills.`,
    tags: ['React.js', 'Express.js', 'MaterialUI', 'Stripe', 'MySQL'],
    link: 'https://yaegercpareview.com/',
  },
  {
    title: 'UptechHunt',
    avatar: '/uptechhunt.jpeg',
    description: `Find Global Technical Talent Remotely. Our platform offers, Top quality freelancers from around the world to server any industry, company or individual software development projects.`,
    tags: ['React.js', 'MaterialUI', 'DJango', 'MongoDB'],
    link: 'https://www.uptechunt.com/',
  },
  {
    title: 'Fetchit.AI',
    avatar: '/fetchit.png',
    description: `Find Short Term Rental Properties at Lightning Speed!
    We get it, time is valuable, especially when searching for the perfect Airbnb investment. We'll handle the research so you can focus on what matters. Say goodbye to tab overload and hello to more time in your day.`,
    tags: ['Next.js', 'MaterialUI', 'Prisma', 'Stripe'],
    link: 'https://www.fetchit.ai/',
  },
  {
    title: 'Attendance Management',
    avatar: '/attendance.png',
    description: `The MERN stack-based Attendance Management System is a web application designed for organizations and educational institutions. It offers a user-friendly interface, real-time attendance updates, secure authentication, scalability, and comprehensive reporting. Leveraging MongoDB, Express.js, React, and Node.js, it provides an efficient solution for tracking and managing attendance.`,
    tags: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Socket IO'],
    link: 'https://github.com/orgs/ConsoleDot-com/ams-client',
  },
  // {
  //   title: 'RANKOLI IBM',
  //   avatar: '/ibm.png',
  //   description: `An integrated business model created using the MERN (MongoDB, Express.js, React, Node.js) stack is a comprehensive web application that seamlessly combines various business functionalities. MongoDB serves as the database, Express.js handles the backend logic, React provides a dynamic and interactive user interface, and Node.js powers the server-side operations. This technology stack enables the development of a unified, scalable, and responsive platform that streamlines data management, business processes, and user interactions, offering a cohesive solution for modern and efficient business operations.`,
  //   tags: ['React.js', 'Bootstrap 5', 'Express.js', 'MongoDB'],
  //   link: 'https://github.com/i-abdul-raheem/fyp-client',
  // },
];

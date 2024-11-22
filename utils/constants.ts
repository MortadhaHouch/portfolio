import { Project, Skill, Status } from "./types";
const images = {
  taskManagement:[
    "/assets/projects/task-management/Capture0.png",
    "/assets/projects/task-management/Capture1.png",
    "/assets/projects/task-management/Capture2.png",
    "/assets/projects/task-management/Capture3.png",
    "/assets/projects/task-management/Capture5.png",
    "/assets/projects/task-management/Capture6.png",
    "/assets/projects/task-management/Capture8.png"
  ],
  travelImages:["/assets/projects/travel/Capture.PNG"],
  textEditorImages:["/assets/projects/text-editor/text-editor.jpg"],
  schoolImages:["/assets/projects/school-management/school.png"],
  translateImages:["/assets/projects/google-translate/translate.jpg"],
  searchEngineImages:["/assets/projects/google-search/search.jpg"],
  fileUploadImages:["/assets/projects/file-upload/file-upload.jpg"],
  eCommerceMobileImages:["/assets/projects/e-commerce-mobile/e-commerce-mobile.jpg"],
  eCommerceImages:["/assets/projects/e-commerce/e-commerce.png"],
  codeEditorImages:["/assets/projects/code-editor/code-editor.jpg"],
  chatbotImages:["/assets/projects/chatbot/chatbot.png"],
  chatImages:["/assets/projects/chat/image.png"],
  canvaImages:["/assets/projects/canva/canva.png"],
  authSystemImages:["/assets/projects/auth-system/auth.jpg"],
  apiTestingImages:['/assets/projects/api-testing/api.jpg']
}
const icons = {
  css: "/assets/tech/skills/css.png",
  docker: "/assets/tech/skills/docker.png",
  figma: "/assets/tech/skills/figma.png",
  git: "/assets/tech/skills/git.png",
  html: "/assets/tech/skills/html.png",
  javascript: "/assets/tech/skills/javascript.png",
  mongodb: "/assets/tech/skills/mongodb.png",
  nodejs: "/assets/tech/skills/nodejs.png",
  reactjs: "/assets/tech/skills/reactjs.png",
  redux: "/assets/tech/skills/redux.png",
  tailwind: "/assets/tech/skills/tailwind.png",
  threejs: "/assets/tech/skills/threejs.svg",
  typescript: "/assets/tech/skills/typescript.png",
  aceternity: "/assets/tech/skills/aceternity-ui.png",
  express: "/assets/tech/skills/express.png",
  fastify: "/assets/tech/skills/fastify.png",
  mongoose: "/assets/tech/skills/mongoose.png",
  mysql: "/assets/tech/skills/mysql.png",
  shadcn: "/assets/tech/skills/shadcn.png",
  spring: "/assets/tech/skills/spring.png",
  prisma: "/assets/tech/skills/prisma.png",
  bootstrap: "/assets/tech/skills/bootstrap.png",
  socket: "/assets/tech/skills/socket.png",
  next: "/assets/tech/skills/nextjs.jpg",
  jwt: "/assets/tech/skills/jwt.png",
  clerk: "/assets/tech/skills/clerk.png",
  java: "/assets/tech/skills/java.png",
  navigation: "/assets/tech/skills/react-native-navigation.png",
  reactNative: "/assets/tech/skills/react-native.png",
  reactRouter: "/assets/tech/skills/react-router.png",
  tldraw: "/assets/tech/skills/tldraw.png",
  dotnet: "/assets/tech/skills/dotnet.png",
  postgres: "/assets/tech/skills/postgres.jpg",
  electron:"/assets/tech/skills/electron.png"
};
const projects: Project[] = [
  {
    title: "Task Management",
    description: "A comprehensive tool for managing tasks with advanced features such as calendar integration, analytics, and user authentication.",
    features: [
      "User authentication with role-based access control",
      "Task creation, updating, and deletion",
      "Calendar integration for scheduling tasks",
      "Dashboard with advanced analytics and charts",
      "Task state management (pending, completed, overdue)",
      "Feedback and comments functionality",
      "Search with filters for task management",
      "Responsive design and mobile-first approach"
    ],
    technologies: [
      "React.js", "Node.js", "Tailwind CSS", "Aceternity",
      "ShadCN", "Fastify", "Prisma", "TypeScript",
      "Next.js", "JWT", "PostgreSQL"
    ],
    images: images.taskManagement,
    icons: [
      icons.reactjs, icons.nodejs, icons.tailwind, icons.aceternity,
      icons.shadcn, icons.fastify, icons.prisma, icons.typescript,
      icons.next, icons.jwt, icons.postgres
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/task-management-client","https://github.com/MortadhaHouch/task-management-server"]
  },
  {
    title: "Travel Agency",
    description: "An interactive website for booking trips and exploring travel packages with secure user authentication.",
    features: [
      "Interactive UI for browsing travel packages",
      "User authentication with secure login",
      "Booking system for trips",
      "Integration with payment gateways",
      "Real-time package availability updates",
      "User reviews and feedback section",
      "Responsive design with Bootstrap"
    ],
    technologies: [
      "Node.js", "React.js", "Express.js", "Mongoose",
      "Bootstrap", "JWT", "React Router"
    ],
    images: images.travelImages,
    icons: [
      icons.nodejs, icons.reactjs, icons.express, icons.mongoose,
      icons.bootstrap, icons.jwt, icons.reactRouter
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/travelling-web-app-client","https://github.com/MortadhaHouch/travelling-web-app-backend"]
  },
  {
    title: "Google Drive Clone",
    description: "A web application replicating Google Drive functionalities, including file uploads, folder management, and sharing options.",
    features: [
      "File upload functionality with progress tracking",
      "Folder creation and nested folder management",
      "File sharing with role-based access control",
      "Drag-and-drop interface for file organization",
      "Responsive design for a seamless user experience"
    ],
    technologies: [
      "Node.js", "React.js", "Express.js", "Mongoose",
      "Bootstrap", "JWT", "React Router"
    ],
    images: images.fileUploadImages,
    icons: [
      icons.nodejs, icons.reactjs, icons.express, icons.mongoose,
      icons.bootstrap, icons.jwt, icons.reactRouter
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/google-drive-clone-client","https://github.com/MortadhaHouch/google-drive-clone-server"]
  },
  {
    title: "Chat Web App",
    description: "A real-time chat application with user authentication and instant messaging features powered by WebSockets.",
    features: [
      "User authentication for secure communication",
      "Real-time messaging with WebSockets",
      "Responsive design for all devices",
      "Group chats and private messaging",
      "Online/offline status indicators"
    ],
    technologies: [
      "Node.js", "React.js", "Express.js", "Mongoose",
      "Bootstrap", "Socket.IO", "JWT", "React Router"
    ],
    images: images.chatImages,
    icons: [
      icons.nodejs, icons.reactjs, icons.express, icons.mongoose,
      icons.bootstrap, icons.socket, icons.jwt, icons.reactRouter
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/chat-app-client","https://github.com/MortadhaHouch/chat-app-server"]
  },
  {
    title: "Chatbot Web App",
    description: "A chatbot application integrating AI responses with a user-friendly interface and secure authentication.",
    features: [
      "AI-powered responses for queries",
      "Customizable chatbot interface",
      "Secure authentication with Clerk",
      "Integration with external APIs for extended functionality",
      "Mobile-first design"
    ],
    technologies: [
      "Next.js", "React.js", "TypeScript", "Tailwind CSS",
      "ShadCN", "Aceternity", "JWT", "Clerk"
    ],
    images: images.chatbotImages,
    icons: [
      icons.next, icons.reactjs, icons.typescript, icons.tailwind,
      icons.shadcn, icons.aceternity, icons.jwt, icons.clerk
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/chatgpt-clone-server","https://github.com/MortadhaHouch/chatgpt-clone-client"]
  },
  {
    title: "Google Search Clone",
    description: "A functional clone of Google Search with basic querying capabilities and a minimalist design.",
    features: [
      "Search functionality with basic query capabilities",
      "Minimalist and responsive design",
      "User-friendly interface"
    ],
    technologies: [
      "CSS", "HTML", "JavaScript", "Node.js", "Express.js"
    ],
    images: images.searchEngineImages,
    icons: [
      icons.css, icons.html, icons.javascript, icons.nodejs, icons.express
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/google-search-clone"]
  },
  {
    title: "Google Translate Clone",
    description: "A web application mimicking Google Translate functionalities, supporting multiple languages.",
    features: [
      "Text translation between multiple languages",
      "Minimalist design for usability",
      "Support for transliteration and pronunciation",
      "Mobile-friendly interface"
    ],
    technologies: [
      "CSS", "HTML", "JavaScript", "Node.js", "Express.js"
    ],
    images: images.translateImages,
    icons: [
      icons.css, icons.html, icons.javascript, icons.nodejs, icons.express
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/google-translate-server","https://github.com/MortadhaHouch/google-translate-client"]
  },
  {
    title: "School Management API",
    description: "An API built for managing school operations, including student records and class schedules.",
    features: [
      "CRUD operations for student and teacher records",
      "Class and schedule management",
      "Relational database integration",
      "Role-based access control"
    ],
    technologies: [
      "MySQL", "Spring Boot", "Java"
    ],
    images: images.schoolImages,
    icons: [
      icons.mysql, icons.spring, icons.java
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/spring-boot-MYSQL-CRUD"]
  },
  {
    title: "Text Editor",
    description: "A simple text editor built with React for creating and saving documents.",
    features: [
      "Basic text formatting options",
      "Save documents locally",
      "Responsive interface for desktop and mobile",
      "Autosave functionality"
    ],
    technologies: [
      "React.js", "React Router"
    ],
    images: images.textEditorImages,
    icons: [
      icons.reactRouter, icons.reactjs
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/text-editor"]
  },
  {
    title: "Code Editor",
    description: "A customizable online code editor supporting multiple programming languages and live previews.",
    features: [
      "Syntax highlighting for multiple languages",
      "Live preview for HTML, CSS, and JavaScript",
      "Save and share code snippets",
      "User authentication for private projects"
    ],
    technologies: [
      "React.js", "React Router", "Node.js", "Express.js", 
      "JWT", "Mongoose"
    ],
    images: images.codeEditorImages,
    icons: [
      icons.reactjs, icons.reactRouter, icons.nodejs, icons.express,
      icons.jwt, icons.mongoose
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/vs-code-clone-server","https://github.com/MortadhaHouch/vs-code-clone-client"]
  },
  {
    title: "API Testing Tool",
    description: "A lightweight API testing tool replicating basic Postman functionalities.",
    features: [
      "Send requests to APIs with custom parameters",
      "View and save response data",
      "Support for GET, POST, PUT, and DELETE methods",
      "User-friendly interface with Electron"
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "React.js", "Electron"
    ],
    images: images.apiTestingImages,
    icons: [
      icons.html, icons.css, icons.javascript, icons.reactjs, icons.electron
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/postman-clone"]
  },
  {
    title: "Dezynify",
    description: "A graphics editor built with React, offering drag-and-drop features and pre-made templates.",
    features: [
      "Drag-and-drop for elements",
      "Pre-made templates for quick designs",
      "Layer-based editing for flexibility",
      "Export designs as images or PDFs"
    ],
    technologies: [
      "React Router", "Bootstrap", "Tldraw"
    ],
    images: images.canvaImages,
    icons: [
      icons.reactRouter, icons.bootstrap, icons.tldraw
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/canva-clone-client","https://github.com/MortadhaHouch/canva-clone-server"]
  },
  {
    title: "Image Editor",
    description: "A web application for editing images with basic functionalities like cropping and filters.",
    features: [
      "Crop, rotate, and resize images",
      "Apply basic filters like brightness and contrast",
      "Save edited images locally",
      "Responsive UI for ease of use"
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Electron"
    ],
    images: images.canvaImages,
    icons: [
      icons.html, icons.css, icons.javascript, icons.electron
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/software"]
  },
  {
    title: "Simple Fastify-Prisma API",
    description: "A minimal API built with Fastify and Prisma, featuring JWT-based authentication.",
    features: [
      "CRUD operations with Prisma ORM",
      "JWT-based user authentication",
      "Integration with PostgreSQL",
      "Efficient and lightweight Fastify server"
    ],
    technologies: [
      "Fastify", "Prisma", "JWT", "PostgreSQL"
    ],
    images: images.apiTestingImages,
    icons: [
      icons.fastify, icons.prisma, icons.jwt, icons.postgres
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/fastify-prisma-api"]
  },
  {
    title: "E-commerce Mobile App",
    description: "A mobile app for browsing products, managing orders, and making secure purchases.",
    features: [
      "Browse and search products",
      "Add items to cart and manage orders",
      "Secure payment integration",
      "Push notifications for order updates"
    ],
    technologies: [
      "React Native", "Navigation", "Dotnet", "MongoDB"
    ],
    images: images.eCommerceMobileImages,
    icons: [
      icons.navigation, icons.reactNative, icons.dotnet, icons.mongodb
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/e-commerce-mobile-app-backend","https://github.com/MortadhaHouch/e-commerce-mobile-app"]
  },
  {
    title: "Simple Custom Auth System",
    description: "A secure authentication system implementing JWT for user login and registration.",
    features: [
      "JWT-based user authentication",
      "User registration and login functionality",
      "Role-based access control",
      "Database integration with Mongoose"
    ],
    technologies: [
      "Express.js", "Node.js", "JWT", "Mongoose"
    ],
    images: images.authSystemImages,
    icons: [
      icons.express, icons.nodejs, icons.jwt, icons.mongoose
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/simple-auth-system"]
  },
];
const specialties = {
  frontend:{
    stack:"frontend development",
    technologies:["HTML", "CSS","bootstrap","tailwind","Javascript","typescript","react","next.js"],
    image:[
      "/assets/tech/specialties/html.webp",
      "/assets/tech/specialties/css.png",
      "/assets/tech/specialties/js.webp",
      "/assets/tech/specialties/tailwind.webp",
      "/assets/tech/specialties/ts.webp",
      "/assets/tech/specialties/react.png",
    ],
    description:"I bring ideas to life with stunning, responsive designs powered by React, Next.js, Tailwind CSS, and Bootstrap. From sleek websites to dynamic apps, I deliver interfaces that captivate and engage users across all devices."
  },
  backend:{
    stack:"backend development",
    technologies:["Javascript","typescript","nodejs","express","fastify","springBoot","mysql","mongodb","mongoose","prisma","postgres"],
    image:[
      "/assets/tech/specialties/spring.webp",
      "/assets/tech/specialties/sql.webp",
      "/assets/tech/specialties/nodejs.png",
      "/assets/tech/specialties/mysql.webp",
      "/assets/tech/specialties/api-programming.png",
      "/assets/tech/specialties/fullstack.jpg"
    ],
    description:"Building fast, secure, and scalable backends is my forte. Using Node.js, Express, Fastify, and Prisma, I design APIs and databases that ensure your application runs smoothly, even under heavy demands."
  },
  fullstack:{
    stack:"fullstack development",
    technologies:["react","nodejs","express","mongodb/mongoose","springBoot","mysql","postgres"],
    image:[
      "/assets/tech/specialties/3988051.webp",
      "/assets/tech/specialties/6454136.webp",
      "/assets/tech/specialties/6454138.webp",
      "/assets/tech/specialties/dev.webp",
      "/assets/tech/specialties/developer.webp",
    ],
    description:"Seamlessly bridging frontend creativity with backend power, I offer end-to-end solutions tailored to your needs. From intuitive UI to secure authentication, I deliver polished, functional, and scalable applications."
  },
  mobile:{
    stack:"mobile development",
    technologies:["react native"],
    image:[
      "/assets/tech/specialties/ts.webp",
      "/assets/tech/specialties/react.png",
      "/assets/tech/specialties/mobile.webp",
    ],
    description:"Reach your audience anywhere with cross-platform mobile apps. With React Native, I develop sleek, intuitive applications that deliver exceptional performance on both iOS and Android."
  },
  uxui:{
    stack:"ux/ui design",
    technologies:["figma","sketch","adobe XD"],
    images:[
      "/assets/tech/specialties/figma.webp",
      "/assets/tech/specialties/xd.webp",
      "/assets/tech/specialties/uxui1.webp",
      "/assets/tech/specialties/uxui2.webp",
      "/assets/tech/specialties/uxui3.webp",
    ],
    description:"I craft user-centric designs that blend beauty with functionality. From intuitive navigation to pixel-perfect layouts, I ensure every interaction feels seamless and engaging, leaving a lasting impression on your users."
  },
  vcs:{
    stack:"git && github",
    technologies:["git"],
    images:[
      "/assets/tech/specialties/git.webp",
      "/assets/tech/specialties/vcs1.webp",
      "/assets/tech/specialties/vcs2.webp",
    ],
    description:"I excel in collaborative environments, leveraging Git and platforms like GitHub to streamline workflows. With a strong focus on version control, I ensure seamless teamwork, efficient code integration, and minimal conflicts for faster project delivery."
  },
};
const skills: Skill[] = [
    {
        title: "HTML5",
        description: "A markup language used for structuring and presenting content on the web.",
        image: icons.html
    },
    {
        title: "CSS3",
        description: "A style sheet language used for describing the presentation of a document written in HTML.",
        image: icons.css
    },
    {
        title: "JavaScript",
        description: "A versatile programming language primarily used for creating dynamic web pages.",
        image: icons.javascript
    },
    {
        title: "TypeScript",
        description: "A strongly typed programming language that builds on JavaScript.",
        image: icons.typescript
    },
    {
        title: "Bootstrap",
        description: "A popular CSS framework for creating responsive and mobile-first websites.",
        image: icons.bootstrap
    },
    {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for building custom designs efficiently.",
        image: icons.tailwind
    },
    {
        title: "React",
        description: "A JavaScript library for building user interfaces, primarily for single-page applications.",
        image: icons.reactjs
    },
    {
        title: "Next.js",
        description: "A React framework for building fast, server-rendered, and statically generated web applications.",
        image: icons.next
    },
    {
        title: "Node.js",
        description: "A runtime environment for executing JavaScript code on the server-side.",
        image: icons.nodejs
    },
    {
        title: "Express",
        description: "A minimal and flexible Node.js web application framework.",
        image: icons.express
    },
    {
        title: "Fastify",
        description: "A fast and low-overhead web framework for Node.js.",
        image: icons.fastify
    },
    {
        title: "MongoDB",
        description: "A NoSQL database that uses a flexible, JSON-like document schema.",
        image: icons.mongodb
    },
    {
        title: "Mongoose",
        description: "An Object Data Modeling (ODM) library for MongoDB and Node.js.",
        image: icons.mongoose
    },
    {
        title: "MySQL",
        description: "A relational database management system based on SQL.",
        image: icons.mysql
    },
    {
        title: "Java",
        description: "A versatile, platform-independent programming language used for a variety of applications.",
        image: icons.java
    },
    {
        title: "Spring Boot",
        description: "A framework for building production-grade applications in Java with minimal configuration.",
        image: icons.spring
    }
];
export {skills}
export {projects,specialties,icons}
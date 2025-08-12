import { Certificate, Experience, Project, Skill, Status } from "./types";
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
  apiTestingImages:['/assets/projects/api-testing/api.jpg'],
  furnituresImages:[],
  skillineImages:["/assets/projects/skilline/skilline.png"],
  taskVortexImages:[],
}
const icons = {
  css: "/assets/tech/skills/css.png",
  docker: "/assets/tech/skills/docker.png",
  figma: "/assets/tech/skills/figma.png",
  postman: "/assets/tech/skills/postman.png",
  insomnia: "/assets/tech/skills/insomnia.png",
  rest: "/assets/tech/skills/rest.jpg",
  swagger: "/assets/tech/skills/swagger.png",
  graphQL: "/assets/tech/skills/graphql.png",
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
  postgres: "/assets/tech/skills/postgres.png",
  electron:"/assets/tech/skills/electron.png",
  microservices:"/assets/tech/skills/microservices.png",
  python:"/assets/tech/skills/python.png",
  adobe:"/assets/tech/specialties/xd.webp",
  flask:"/assets/tech/skills/flask.png",
  fastapi:"/assets/tech/skills/fastapi.png",
  pandas:"/assets/tech/skills/pandas.svg",
  numpy:"/assets/tech/skills/numpy.png",
  sympy:"/assets/tech/skills/sympy.svg",
  matplotlib:"/assets/tech/skills/matplotlib.png",
  angular:"/assets/tech/skills/Angular.png",
  ionic:"/assets/tech/skills/ionic.png",
  nginx:"/assets/tech/skills/nginx.png",
  redis:"/assets/tech/skills/redis.png",
  nest:"/assets/tech/skills/nest.png",
  MUI:"/assets/tech/skills/MUI.png",
  antd:"/assets/tech/skills/antd.png",
  firebase:"/assets/tech/skills/firebase.png",
  gemini:"/assets/tech/skills/gemini.png",
  reactquery:"/assets/tech/skills/react-query.png",
  reacthookform:"/assets/tech/skills/react-hook-form.png",
  zod:"/assets/tech/skills/zod.png",
  csharp:"/assets/tech/skills/csharp.png"
};
const projects: Project[] = [
  {
    title: "Task Management",
    description: "A comprehensive tool for managing tasks with advanced features such as calendar integration, analytics, and user authentication.",
    features: [
      "User authentication with role-based access control",
      "Task creation, updating,recovery, and deletion",
      "Calendar integration for scheduling tasks",
      "Dashboard with advanced analytics and charts",
      "Task state management (pending, completed, overdue)",
      "Feedback and comments functionality",
      "Search with filters for task management",
      "community integration for feedback and discussions",
      "Responsive design and mobile-first approach"
    ],
    technologies: [
      "React.js", "Node.js", "Tailwind CSS", "Aceternity UI",
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
    urls:[
      "https://github.com/MortadhaHouch/task-management-client",
      "https://github.com/MortadhaHouch/task-management-server",
    ],
  },
  {
    title: "Travel Agency",
    description: "An interactive website for booking trips and exploring travel packages with secure user authentication.",
    features: [
      "Interactive UI for browsing travel packages",
      "User authentication with secure login",
      "Role based authentication for admin and user",
      "Booking system for trips",
      "Integration with payment gateways",
      "Real-time package availability updates",
      "User reviews and feedback section",
      "Responsive design with Bootstrap",
      "community integration for feedback and discussions",
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
    urls:[
      "https://github.com/MortadhaHouch/travelling-web-app-client",
      "https://github.com/MortadhaHouch/travelling-web-app-backend"
    ]
  },
  {
    title: "Google Drive Clone",
    description: "A web application replicating Google Drive functionalities, including file uploads, folder management, and sharing options.",
    features: [
      "File upload functionality with progress tracking",
      "Folder creation ,upload and nested folder management",
      "file and folder deletion ,recovery",
      "File and sharing with role-based access control",
      "Drag-and-drop interface for file and folder organization",
      "community integration for feedback and discussions",
      "Responsive design for a seamless user experience",
    ],
    technologies: [
      "Node.js", "React.js", "Express.js", "Mongoose",
      "Bootstrap", "JWT", "React Router"
    ],
    images: images.fileUploadImages,
    icons: [
      icons.nodejs, icons.reactjs, icons.express, icons.mongoose,
      icons.bootstrap, icons.jwt, icons.reactRouter,
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/google-drive-clone-client","https://github.com/MortadhaHouch/google-drive-clone-server"]
  },
  {
    title: "Chat Web App",
    description: "A real-time chat application with user authentication and instant messaging features powered by WebSockets.",
    features: [
      "User authentication for secure communication",
      "video and audio streaming",
      "file sharing with drag-and-drop functionality",
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
      "message organization settings based on discussions organized based workspaces settings",
      "Customizable chatbot interface",
      "Secure authentication with Clerk",
      "Integration with external APIs for extended functionality",
      "Mobile-first design"
    ],
    technologies: [
      "Next.js", "React.js", "TypeScript", "Tailwind CSS",
      "ShadCN", "Aceternity UI", "JWT", "Clerk"
    ],
    images: images.chatbotImages,
    icons: [
      icons.next, icons.reactjs, icons.typescript, icons.tailwind,
      icons.shadcn, icons.aceternity, icons.jwt, icons.clerk
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/chatgpt-clone-client","https://github.com/MortadhaHouch/chatgpt-clone-server"]
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
      "CSS3", "HTML5", "JavaScript", "Node.js", "Express.js"
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
      "Text translation and language detection",
      "Minimalist design for usability",
      "Support for transliteration and pronunciation",
      "Mobile-friendly interface"
    ],
    technologies: [
      "CSS3", "HTML5", "JavaScript", "Node.js", "Express.js"
    ],
    images: images.translateImages,
    icons: [
      icons.css, icons.html, icons.javascript, icons.nodejs, icons.express
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/google-translate-client","https://github.com/MortadhaHouch/google-translate-server"]
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
      "File conversion support",
    ],
    technologies: [
      "HTML5","CSS3","javascript","React Router", "React.js"
    ],
    images: images.textEditorImages,
    icons: [
     icons.html,icons.css,icons.javascript, icons.reactRouter, icons.reactjs
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/text-editor"]
  },
  {
    title: "Code Editor",
    description: "A customizable online code editor supporting multiple programming languages and live previews.",
    features: [
      "Syntax highlighting for multiple languages",
      "Wide language support for multiple languages",
      "wide framework support for multiple technologies",
      "Save and share code snippets",
      "User authentication for private projects",
      "community integration for feedback and discussions",
    ],
    technologies: [
      "HTML5","CSS3","javascript","React.js", "React Router", "Node.js", "Express.js",
      "JWT", "Mongoose"
    ],
    images: images.codeEditorImages,
    icons: [
      icons.html,icons.css,icons.javascript, icons.reactjs, icons.reactRouter, icons.nodejs, icons.express,
      icons.jwt, icons.mongoose
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/vs-code-clone-client","https://github.com/MortadhaHouch/vs-code-clone-server"]
  },
  {
    title: "API Testing Tool",
    description: "A lightweight API testing tool replicating basic Postman functionalities.",
    features: [
      "Send requests to APIs with custom parameters",
      "View and save response data",
      "Support for GET, POST, PUT, and DELETE methods",
      "User-friendly interface with Electron",
      "Request and response processing and storage based on collections"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Electron"
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
      "Export designs as images or PDFs",
      "Advanced design for performance",
      "authentication enabled for secure storage",
      "community integration for feedback and discussions",
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React.js", "React Router", "Bootstrap", "Tldraw"
    ],
    images: images.canvaImages,
    icons: [
      icons.html,icons.css,icons.javascript,icons.reactjs,icons.bootstrap, icons.reactRouter, icons.tldraw
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
      "Fastify", "Prisma", "JWT", "PostgreSQL", "Typescript"
    ],
    images: images.apiTestingImages,
    icons: [
      icons.fastify, icons.prisma, icons.jwt, icons.postgres, icons.typescript
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
      "React Native", "Navigation","csharp", "Dotnet", "MongoDB"
    ],
    images: images.eCommerceMobileImages,
    icons: [
      icons.reactNative,icons.navigation ,icons.csharp, icons.dotnet, icons.mongodb
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
      "Database integration with Mongoose",
      "password encryption"
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
  {
    title: "Furniture E-commerce",
    description: "A e-commerce website for selling furniture.",
    features: [
      "JWT-based user authentication",
      "User registration and login functionality",
      "Role-based access control",
      "Database integration with Mongoose",
      "password encryption",
      "notifications for order updates",
      "Order management",
      "Product management",
      "User management",
    ],
    technologies: [
      "Express.js", "Node.js", "JWT", "Mongoose","Next.js","Typescript","Javascript","HTML5","CSS3","tailwindcss","shadcn UI","Aceternity UI"
    ],
    images: images.furnituresImages,
    icons: [
      icons.express, icons.nodejs, icons.jwt, icons.mongoose, icons.next, icons.typescript,
      icons.javascript, icons.html, icons.css, icons.tailwind, icons.shadcn, icons.aceternity
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/furniture-client","https://github.com/MortadhaHouch/furniture-server"]
  },{
    title: "Skilline",
    description: "A platform for learning and sharing skills.",
    features: [
      "User registration and login functionality",
      "Role-based access control",
      "Database integration with Mongoose",
      "password encryption",
      "notifications for order updates",
      "Course management",
      "User management",
      "Quizz management",
      "Social Media integration",
      "Leaderboard for competitions",
      "AI integration for personalized learning",
    ],
    technologies: [
      "Express.js", "Node.js", "JWT", "Mongoose","Gemini AI API","HTML5","CSS3","Javascript","Typescript","shadcn UI"
    ],
    images: images.skillineImages,
    icons: [
      icons.express, icons.nodejs, icons.jwt, icons.mongoose, icons.gemini,
      icons.html, icons.css, icons.javascript, icons.typescript, icons.shadcn
    ],
    status: Status.DONE,
    urls:["https://github.com/MortadhaHouch/skilline-client","https://github.com/MortadhaHouch/skilline-server"]
  },{
    title: "TaskVortex",
    description: "A platform for managing tasks.",
    features: [
      "User registration and login functionality",
      "Role-based access control",
      "Database integration with Mongoose",
      "password encryption",
      "notifications for order updates",
      "Task management",
      "User management",
      "Project management",
      "Calendar integration",
      "Dashboard with advanced analytics and charts",
      "Feedback and comments functionality",
      "Search with filters for task management",
      "community integration for feedback and discussions",
      "Responsive design and mobile-first approach",
      "Blog for sharing knowledge",
      "AI integration for personalized tasks",
      "Kanban board for task management and project management",
      "Team management",
      "Real time notifications",
      "Real time collaboration",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "javascript",
      "typescript",
      "react query",
      "zod",
      "Node.js", 
      "JWT", 
      "Mongoose",
      "React",
      "Socket.IO",
      "Nest JS",
      "Docker",
      "Nginx",
      "Redis",
      "FastAPI",
      "microservices"
    ],
    images: images.taskVortexImages,
    icons: [
      icons.html,
      icons.css,
      icons.javascript,
      icons.typescript,
      icons.reactquery,
      icons.zod,
      icons.nodejs,
      icons.jwt,
      icons.mongoose,
      icons.reactjs,
      icons.socket,
      icons.nest,
      icons.docker,
      icons.nginx,
      icons.redis,
      icons.fastapi,
      icons.microservices
    ],
    status: Status.IN_PROGRESS,
    urls:["https://github.com/MortadhaHouch/nestJS_starter"]
  }
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
      "/assets/tech/skills/ionic.png",
    ],
    description:"Reach your audience anywhere with cross-platform mobile apps. With React Native, I develop sleek, intuitive applications that deliver exceptional performance on both iOS and Android."
  },
  ux_ui:{
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
  // --- Frontend ---
  {
    title: "HTML5",
    description: "A markup language used for structuring and presenting content on the web.",
    image: icons.html,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "CSS3",
    description: "A style sheet language used for describing the presentation of a document written in HTML.",
    image: icons.css,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "JavaScript",
    description: "A versatile programming language primarily used for creating dynamic web pages.",
    image: icons.javascript,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "TypeScript",
    description: "A strongly typed programming language that builds on JavaScript.",
    image: icons.typescript,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Git",
    description: "A distributed version control system for tracking changes in source code during software development.",
    image: icons.git,
    category: 'frontend',
    proficiency: 'advanced'
  },

  // --- Frontend Frameworks ---
  {
    title: "React",
    description: "A JavaScript library for building user interfaces, primarily for single-page applications.",
    image: icons.reactjs,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Next.js",
    description: "A React framework for building fast, server-rendered, and statically generated web applications.",
    image: icons.next,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Angular",
    description: "A framework for building client-side applications.",
    image: icons.angular,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "React Query",
    description: "A data fetching library for React.",
    image: icons.reactquery,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "React Hook Form",
    description: "A form management library for React.",
    image: icons.reacthookform,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Zod",
    description: "A runtime type checking library for JavaScript.",
    image: icons.zod,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "React Router",
    description: "A routing library for React.",
    image: icons.reactRouter,
    category: 'frontend',
    proficiency: 'advanced'
  },

  // --- UI & Styling Frameworks ---
  {
    title: "Bootstrap",
    description: "A popular CSS framework for creating responsive and mobile-first websites.",
    image: icons.bootstrap,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for building custom designs efficiently.",
    image: icons.tailwind,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Shadcn",
    description: "A collection of ready-to-use React components that are built with Tailwind CSS and TypeScript.",
    image: icons.shadcn,
    category: 'frontend',
    proficiency: 'advanced'
  },
  {
    title: "Aceternity",
    description: "A blockchain platform for building decentralized applications.",
    image: icons.aceternity,
    category: 'frontend',
    proficiency: 'advanced'
  },
  // --- Backend Frameworks & Libraries ---
  // --- Backend ---
  {
    title: "Node.js",
    description: "A runtime environment for executing JavaScript code on the server-side.",
    image: icons.nodejs,
    category: 'backend',
    proficiency: 'advanced'
  },
  {
    title: "Express",
    description: "A minimal and flexible Node.js web application framework.",
    image: icons.express,
    category: 'backend',
    proficiency: 'advanced'
  },
  {
    title: "Fastify",
    description: "A fast and low-overhead web framework for Node.js.",
    image: icons.fastify,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "Nest JS",
    description: "A framework for building server-side applications.",
    image: icons.nest,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "Socket.io",
    description: "A real-time communication library for Node.js.",
    image: icons.socket,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "JWT",
    description: "A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.",
    image: icons.jwt,
    category: 'backend',
    proficiency: 'advanced'
  },
  {
    title: "Clerk",
    description: "A user authentication and authorization service for web and mobile applications.",
    image: icons.clerk,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "REST API",
    description: "A set of rules and protocols for building and interacting with web services.",
    image: icons.rest,
    category: 'backend',
    proficiency: 'advanced'
  },
  {
    title: "GraphQL API",
    description: "A query language for APIs and a runtime for executing those queries with your existing data.",
    image: icons.graphQL,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "Postman",
    description: "A tool for testing and debugging APIs.",
    image: icons.postman,
    category: 'testing',
    proficiency: 'advanced'
  },
  {
    title: "Insomnia",
    description: "A tool for testing and debugging APIs.",
    image: icons.insomnia,
    category: 'testing',
    proficiency: 'intermediate'
  },
  {
    title: "Swagger",
    description: "A tool for testing and debugging APIs.",
    image: icons.swagger,
    category: 'testing',
    proficiency: 'intermediate'
  },
  {
    title: "C#",
    description: "A strongly typed language for the backend",
    image: icons.csharp,
    category: 'backend',
    proficiency: 'intermediate'
  },
  // --- Database ---
  {
    title: "MongoDB",
    description: "A NoSQL database that uses a flexible, JSON-like document schema.",
    image: icons.mongodb,
    category: 'database',
    proficiency: 'intermediate'
  },
  {
    title: "Mongoose",
    description: "An Object Data Modeling (ODM) library for MongoDB and Node.js.",
    image: icons.mongoose,
    category: 'database',
    proficiency: 'intermediate'
  },
  {
    title: "MySQL",
    description: "A relational database management system based on SQL.",
    image: icons.mysql,
    category: 'database',
    proficiency: 'intermediate'
  },
  {
    title: "PostgreSQL",
    description: "A powerful, open source object-relational database system that uses and extends the SQL language.",
    image: icons.postgres,
    category: 'database',
    proficiency: 'intermediate'
  },
  {
    title: "Prisma",
    description: "A database toolkit for Node.js and TypeScript.",
    image: icons.prisma,
    category: 'database',
    proficiency: 'intermediate'
  },
  {
    title: "Redis",
    description: "An in-memory data structure store, used as a database, cache, and message broker.",
    image: icons.redis,
    category: 'database',
    proficiency: 'beginner'
  },

  // --- DevOps & Tools ---
  {
    title: "Docker",
    description: "A platform for building, shipping, and running applications.",
    image: icons.docker,
    category: 'devops',
    proficiency: 'intermediate'
  },
  {
    title: "Nginx",
    description: "A web server and reverse proxy server.",
    image: icons.nginx,
    category: 'devops',
    proficiency: 'beginner'
  },
  {
    title: "Git",
    description: "A distributed version control system for tracking changes in source code.",
    image: icons.git,
    category: 'devops',
    proficiency: 'advanced'
  },

  // --- UI/UX ---
  {
    title: "Figma",
    description: "A collaborative interface design tool.",
    image: icons.figma,
    category: 'ui-ux',
    proficiency: 'intermediate'
  },
  {
    title: "Adobe XD",
    description: "A user experience design tool for web and mobile apps.",
    image: icons.adobe,
    category: 'ui-ux',
    proficiency: 'intermediate'
  },
  
  // --- Other Tools ---
  {
    title: "Electron",
    description: "A framework for building cross-platform desktop applications using web technologies.",
    image: icons.electron,
    category: 'other',
    proficiency: 'beginner'
  },

  // --- Python & Data Science ---
  {
    title: "Python",
    description: "A high-level, general-purpose programming language.",
    image: icons.python,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "Flask",
    description: "A lightweight WSGI web application framework in Python.",
    image: icons.flask,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "FastAPI",
    description: "A modern, fast (high-performance) web framework for building APIs with Python 3.7+.",
    image: icons.fastapi,
    category: 'backend',
    proficiency: 'intermediate'
  },
  {
    title: "Pandas",
    description: "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool.",
    image: icons.pandas,
    category: 'data-science',
    proficiency: 'intermediate'
  },
  {
    title: "NumPy",
    description: "A library for the Python programming language, adding support for large, multi-dimensional arrays and matrices.",
    image: icons.numpy,
    category: 'data-science',
    proficiency: 'intermediate'
  },
  {
    title: "SymPy",
    description: "A Python library for symbolic mathematics.",
    image: icons.sympy,
    category: 'data-science',
    proficiency: 'beginner'
  },
  {
    title: "Matplotlib",
    description: "A comprehensive library for creating static, animated, and interactive visualizations in Python.",
    image: icons.matplotlib,
    category: 'data-science',
    proficiency: 'intermediate'
  },

  // --- Mobile Development ---
  {
    title: "React Native",
    description: "A framework for building cross-platform mobile applications using React.",
    image: icons.reactNative,
    category: 'mobile',
    proficiency: 'intermediate'
  },
  {
    title: "Ionic",
    description: "An open-source UI toolkit for building cross-platform mobile and desktop apps using web technologies.",
    image: icons.ionic,
    category: 'mobile',
    proficiency: 'intermediate'
  },

  // --- Java & Backend ---
  {
    title: "Java",
    description: "A versatile, platform-independent programming language used for a variety of applications.",
    image: icons.java,
    category: 'backend',
    proficiency: 'advanced'
  },
  {
    title: "Spring Boot",
    description: "A framework for building production-grade applications in Java with minimal configuration.",
    image: icons.spring,  
    category: 'backend',
    proficiency: 'advanced'
  },

  // --- Architecture & Others ---
  {
    title: "Microservices",
    description: "A design that splits an application into smaller, independent services that communicate with each other.",
    image: icons.microservices,
    category: 'architecture',
    proficiency: 'intermediate'
  },
];
const socialMediaLinks = [
  {
    title:"Github",
    url:"https://github.com/MortadhaHouch"
  },
  {
    title:"Linkedin",
    url:"https://www.linkedin.com/in/mortadha-houch/"
  },
  {
    title:"Codepen",
    url:"https://codepen.io/morta_hch"
  },{
    title:"Stackoverflow",
    url:"https://stackoverflow.com/users/18767346/houch-mortadha"
  },{
    title:"Behance",
    url:"https://www.behance.net/mortadhahouch"
  },{
    title:"Dev.to",
    url:"https://dev.to/mortadha_houch_f979719670"
  },{
    title:"Medium",
    url:"https://medium.com/@mortadha-houch"
  },{
    title:"Daily.dev",
    url:"https://app.daily.dev/mortadhahouch"
  },{
    title:"roadmap.sh",
    url:"https://roadmap.sh/u/mortadha"
  },{
    title:"leetcode",
    url:"https://leetcode.com/u/Mortadha_Hch/"
  },{
    title:"Codewars",
    url:"https://www.codewars.com/users/MortadhaHouch"
  },{
    title:"freecodecamp",
    url:"https://www.freecodecamp.org/fcc5edde310-807d-4ada-8f1e-88997c871369"
  },{
    title:"Coursera",
    url:"https://www.coursera.org/user/3372a7acd086aa8760f4f78e24e17909"
  },{
    title:"Microsft Learning",
    url:"https://learn.microsoft.com/en-us/users/mortadhahouch-0997/"
  },{
    title:"Sololearn",
    url:"https://www.sololearn.com/en/profile/20156681"
  },{
    title:"HackerRank",
    url:"https://www.hackerrank.com/profile/supremeutilisat1"
  }
]
const resumes = [
  {
    title:"Full Stack Developer",
    url:"/assets/statics/MORTADHA_HOUCH_FULL_Stack_Developer__.pdf"
  },{
    title:"Frontend Developer",
    url:"/assets/statics/Mortadha_Houch_Frontend_Developer.pdf"
  },{
    title:"Backend Developer",
    url:"/assets/statics/Mortadha_Houch_backend_Developer.pdf"
  }
]
const experiences:Experience[] = [
  {
    company:"Hippomed AI",
    position:"Full stack developer",
    startDate:new Intl.DateTimeFormat().format(new Date().setFullYear(2024,7)),
    endDate:new Intl.DateTimeFormat().format(new Date().setFullYear(2025,8)),
    tasks:[
      "Collaborated on cross-functional projects using Angular for responsive frontend development with component-based architecture and RxJS-based state management.",
      "Built and consumed RESTful APIs with Spring Boot, implementing backend logic, authentication, and role-based access control.",
      "Worked on internal tools and admin panels using Django, focusing on database models, views, and template rendering.",
      "Developed hybrid mobile applications with Ionic Framework, targeting both iOS and Android platforms with Angular integration and native plugins.",
      "Utilized Git for version control and Postman for API testing throughout the development cycle.",
    ],
    description:"",
    technologies:[
      icons.angular,
      icons.tailwind,
      icons.python,
      icons.postgres,
      icons.postman
    ]
  },{
    company:"WowSoft",
    position:"Full stack developer",
    startDate:new Intl.DateTimeFormat().format(new Date().setFullYear(2025,5)),
    endDate:new Intl.DateTimeFormat().format(new Date().setFullYear(2025,12)),
    tasks:[
      "Built full-stack applications with Next.js, Fastify, PostgreSQL, TypeScript, and Prisma",
      "Implemented REST APIs, SSR, and efficient database models",
      "Ensured type-safe, scalable, and maintainable architecture",
    ],
    description:"",
    technologies:[
      icons.reactjs,
      icons.next,
      icons.tailwind,
      icons.docker,
      icons.shadcn,
      icons.aceternity,
      icons.prisma,
      icons.postgres,
      icons.postman
    ]
  }
]
const certificates:Certificate[] = [
  {
    title: "Backend Developer",
    description: "Comprehensive backend development certification covering Node.js, Express, MongoDB, and RESTful API design principles. Demonstrated ability to build secure and scalable server-side applications.",
    url: "/cetificates/backend_certificate.pdf",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API", "Authentication", "API Security", "Database Design"],
    date: new Date(2023, 7, 18).toDateString(),
    issuer: "freeCodeCamp"
  },
  {
    title: "C# Programming",
    description: "Mastery of C# programming language including object-oriented principles, .NET framework, and application development. Covered advanced topics like LINQ, async/await, and design patterns.",
    url: "/cetificates/c#_certificate.pdf",
    technologies: ["C#", ".NET", "OOP", "LINQ", "Async/Await", "Design Patterns", "Unit Testing"],
    date: new Date(2024, 10, 3).toDateString(),
    issuer: "freeCodeCamp"
  },
  {
    title: "React Native Development",
    description: "Professional certification in cross-platform mobile application development using React Native. Covered state management, navigation, and integrating with native device features.",
    url: "/cetificates/Coursera React Native.pdf",
    technologies: ["React Native", "JavaScript", "Mobile Development", "Redux", "React Navigation", "Expo"],
    date: new Date(2023, 11, 16).toDateString(),
    issuer: "Coursera & Meta"
  },
  {
    title: "Data Analysis with Python",
    description: "Certification in data analysis techniques using Python, including data manipulation, visualization, and statistical analysis using libraries like Pandas, NumPy, and Matplotlib.",
    url: "/cetificates/data_analysis_certificate.pdf",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "Data Cleaning", "Statistical Analysis"],
    date: new Date(2024, 11, 12).toDateString(),
    issuer: "freeCodeCamp"
  },
  {
    title: "Full Stack Web Development",
    description: "Immersive full-stack development program covering both frontend and backend technologies. Built multiple full-stack applications using modern web technologies and best practices.",
    url: "/cetificates/mortadha-el-houch.pdf",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs", "Authentication", "Deployment"],
    date: new Date(2025, 4, 10).toDateString(),
    issuer: "Coding Dojo"
  },
  {
    title: "Responsive Web Design",
    description: "Certification in creating responsive and accessible web interfaces using HTML5, CSS3, and modern layout techniques like Flexbox and CSS Grid.",
    url: "/cetificates/responsive_web_design_certificate.pdf",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Accessibility", "UI/UX Principles"],
    date: new Date(2022, 5, 6).toDateString(),
    issuer: "freeCodeCamp"
  }
].sort((c1,c2)=>new Date(c2.date).getTime() - new Date(c1.date).getTime())

export {skills}
export {projects,specialties,icons,socialMediaLinks,resumes,experiences,certificates}
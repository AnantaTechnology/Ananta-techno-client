import imgTailwind from '../assets/blog/featured-blog-post.webp';
import imgNodeSec from '../assets/blog/nodejs_security.jpg';
import imgNextDeploy from '../assets/blog/images.jfif';
import imgGraphQL from '../assets/blog/Banner-3.png';
import imgWebpack from '../assets/blog/hq720.jpg';
import imgDocker from '../assets/blog/Docker-Image-Creation.png';




const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/web.png",
    },
    {
        title: "React Developer",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/frontend.png",
    },
    {
        title: "Backend Developer",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/backend.png",
    },
    {
        title: "Full Stack Developer",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/fullStack.png",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/html.png",
    },
    {
        name: "CSS 3",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/css.png",
    },
    {
        name: "JavaScript",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/javascript.png",
    },
    {
        name: "Tailwind CSS",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/tailwind.png",
    },
    {
        name: "React JS",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/reactjs.png",
    },
    {
        name: "Redux",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/redux.png",
    },
    {
        name: "Formik",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/formik-icon.png",
    },
    {
        name: "Matirial UI",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/material-ui.png",
    },

    {
        name: "Scss",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/scss.png",
    },
    {
        name: "Node JS",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/nodejs.png",
    },
    {
        name: "Express JS",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/expressjs.png",
    },
    {
        name: "MongoDB",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/mongodb.png",
    },
    {
        name: "Mongoose",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/mongoose.png",
    },
    {
        name: "Git",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/git.png",
    },
    {
        name: "GitHup",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/github.png",
    },
    {
        name: "EC2",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/ec2.png",
    },
    {
        name: "S3",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/Amazon-S3.png",
    },
];

const tools = [
    {
        name: "VS Code",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/vscode.png",
    },
    {
        name: "ChatGPT",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/ChatGPT.png",
    },
    {
        name: "Chrome",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/chrome.png",
    },
    {
        name: "Impress",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/Impress.png",
    },
    {
        name: "Mongodb Compass",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/mongodbCompass.png",
    },
    {
        name: "Postman",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/postman.png",
    },
    {
        name: "Ubuntu",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/ubuntu.png",
    },
];

const experiences = [
    {
        title: "Frontend Development",
        company_name: "React.js, Redux, Formik with Yup",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/frontend.png",
        iconBg: "#383E56",
        date: "Jun 2022 - Present",
        points: [
            "Advanced skills in React.js for building dynamic web applications.",
            "Expertise in Redux for efficient state management.",
            "Experience with Formik and Yup for seamless form handling and validation.",
            "Applied Flux architecture to enhance data flow and maintainability.",
            "Implemented advanced architectural patterns for scalable applications.",
            "These are just a few of the many libraries",
        ],
    },
    {
        title: "UI Designing",
        company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/design.png",
        iconBg: "white",
        date: "Sep 2022 - Present",
        points: [
            "Proficient in Material UI for creating modern and responsive user interfaces.",
            "Expertise in Framer Motion for crafting smooth and interactive animations.",
            "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
            "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
            "Ability to create responsive layouts for diverse screen sizes and devices.",
            "Prioritizing user experience and usability in UI design projects.",
        ],
    },
    {
        title: "Backend Development",
        company_name: "Node js, Express js, Mongoose, S3",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/backend.png",
        iconBg: "#383E56",
        date: "Dec 2022 - Present",
        points: [
            "Proficient in Node.js for building robust and scalable server-side applications.",
            "Strong command of Express.js for creating RESTful APIs and routing.",
            "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
            "Strategies for optimizing application performance and scalability.",
            "Integration of AWS S3 for secure and scalable file storage and retrieval",
            "Skillful use of Postman for API testing, validation, and documentation",
            "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
            "Application of Clean Architecture principles for modular and testable codebases",
            "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
            "Expertise in error handling, debugging, and performance optimization.",
        ],
    },
    {
        title: "AWS and other ",
        company_name: "EC2, S3, IAM, DSA",
        icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/cloud.png",
        iconBg: "black",
        date: "Jun 2023 - Present",
        points: [
            "Proficiency in managing AWS Elastic Compute Cloud (EC2) instances for scalable computing.",
            "Skillful use of AWS S3 for secure and scalable object storage.",
            "Experience in configuring AWS Identity and Access Management (IAM) for user and resource access control.",
            "Strong understanding of fundamental data structures and algorithms for efficient problem-solving. Knowledge of Big O notation for analyzing algorithmic complexity and performance.",
            "Eager to expand cloud service expertise and contribute to cloud-based solutions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients success like Rajesh does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rajesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Shop",
        description:
            "A web-based platform that allows users to search, and order products. admin can manage products, orders, reviews, and users. Providing a convenient and efficient solution for people who need the best online shopping experience.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "Retux",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image:
            "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/e-commerce.png",
        alt: "E-Commerce",
        source_code_link: "https://github.com/Rajeshesh/newShop",
        live_link: "http://3.82.129.40:8000/",
    },
    {
        name: "Pro Connect Up",
        description:
            "A web application that enables users to find people with the same interest in their career, find a person for freelance work, search for job openings, and locate available jobs based on their current location.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image:
            "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/proConnectup.jpg",
        alt: "Pro Connect Up",

        source_code_link: "https://github.com/Rajeshesh/ProConnectUp",
        live_link: "https://github.com/Rajeshesh/ProConnectUp",
    },
    {
        name: "My Portfolio",
        description:
            "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image:
            "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png",
        alt: "Portfolio",
        source_code_link: "https://github.com/Rajeshesh/portfolio",
        live_link: "https://mern-rajesh-portfolio.web.app/",
    },
    // {
    //   name: "PG Management",
    //   description:
    //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
    //   source_code_link: "https://github.com/Rajeshesh",
    //   live_link: "http://3.82.129.40:8000/",
    // },
];


 const posts = [
    {
      id: 1,
      title: "10 Tailwind CSS Tricks You Didn’t Know",
      date: "April 12, 2025",
      img: imgTailwind,
      content: `
  **Introduction**
  Tailwind CSS has exploded in popularity, but many powerful utilities remain underused.
  
  **Key Tricks**
  1. \`bg-clip-text\` for gradient text.
  2. \`line-clamp\` plugin for truncating blocks.
  3. \`aspect-w/h\` for aspect ratio control.
  
  **Conclusion**
  By mastering these, your designs will be much more efficient and flexible.
  `,
    },
    {
      id: 2,
      title: "Node.js Security Best Practices",
      date: "March 28, 2025",
      img: imgNodeSec,
      content: `
  **Overview**
  Node.js apps face unique security challenges. Here are the top practices.
  
  **Best Practices**
  - Validate all user input to prevent injection.
  - Use \`helmet\` middleware to set HTTP headers.
  - Keep dependencies up to date via \`npm audit\`.
  
  **Next Steps**
  Integrate automated scans into your CI pipeline.
  `,
    },
    {
      id: 3,
      title: "Deploying Next.js on Vercel",
      date: "February 19, 2025",
      img: imgNextDeploy,
      content: `
  **Why Vercel?**
  Vercel offers instant static & serverless deployments for Next.js.
  
  **Steps**
  1. Install \`vercel\` CLI: \`npm i -g vercel\`.
  2. Run \`vercel\` in your project root.
  3. Configure environment variables in dashboard.
  
  **Tips**
  Use preview deployments for each PR.
  `,
    },
    {
      id: 4,
      title: "GraphQL vs REST: When to Use Which",
      date: "January 05, 2025",
      img: imgGraphQL,
      content: `
  **REST**
  - Stable and simple for CRUD.
  - Use HTTP verbs: GET, POST, PUT, DELETE.
  
  **GraphQL**
  - Fetch multiple resources in one request.
  - Strongly-typed schema.
  
  **When to Choose**
  - Use REST for simple CRUD apps.
  - Use GraphQL for complex data relationships.
  `,
    },
    {
      id: 5,
      title: "Webpack Performance Optimization",
      date: "December 15, 2024",
      img: imgWebpack,
      content: `
  **Bundle Size**
  - Use \`SplitChunksPlugin\`.
  - Enable tree-shaking with \`sideEffects\`.
  
  **Build Speed**
  - Use \`thread-loader\`.
  - Cache with \`cacheDirectory\`.
  
  **Analysis**
  Use \`webpack-bundle-analyzer\` to inspect.
  `,
    },
    {
      id: 6,
      title: "Containerizing Node Apps with Docker",
      date: "November 30, 2024",
      img: imgDocker,
      content: `
  **Dockerfile Basics**
  \`\`\`dockerfile
  FROM node:16-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  CMD ["npm", "start"]
  \`\`\`
  
  **Multi-stage**
  Use builder pattern to reduce final image size.
  
  **Deployment**
  Push to Docker Hub and run with \`docker run\`.
  `,
    },
  ];
  


export {
    navLinks,
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    tools,
    posts,
};

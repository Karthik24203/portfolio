const projectData = {
  aipdfreader: {
    id: "aipdfreader",
    title: "AI PDF Reader",
    description:
      "An intelligent PDF reader that extracts key insights and summaries from PDF documents using AI.",
    description1:
      "An intelligent PDF reader that leverages AI to extract key insights and summaries from PDF documents." +
      " This tool allows users to upload PDF files, and once uploaded, it analyzes the content to generate a" +
      " comprehensive summary of the document. Users can then ask specific questions about the document, and " +
      "the AI provides accurate, context-aware answers, making it easier to understand and extract relevant information " +
      "without needing to read through the entire file.[*Not designed for mobile applications]",
    techStack: [
      "Next.js (Full-Stack Framework)",
      "Drizzle ORM + NeonDB (Database)",
      "Convex (Vector Storage)",
      "Clerk (Authentication)",
      "Tailwind CSS (Styling)",
      "LangChain (Embedding & Search)",
      "Gemini (AI Integration)",
    ],
    visit:
      "https://pdf-reader-dozr-git-main-karthiks-projects-4aaf9aac.vercel.app/",
    images: [
      { name: "Home Page", path: "/pdf-reader/1.jpg" },
      { name: "Dashboard", path: "/pdf-reader/2.jpg" },
      { name: "Pricing", path: "/pdf-reader/3.jpg" },
      { name: "Workspace", path: "/pdf-reader/4.jpg" },
    ],
  },
  hfds: {
    id: "hfds",
    title: "Hospital Food Delivery Management System",
    description:
      "The Hospital Food Delivery Management System is a comprehensive web application designed to streamline hospital food operations for patients.",
    description1:
      "This system centralizes processes such as managing patient details, creating personalized diet charts for Morning, Evening, and Night, overseeing food preparation and delivery tasks, and tracking delivery statuses. It ensures efficient communication between hospital food managers, pantry staff, and delivery personnel while providing real-time updates and alerts for seamless operations.",
    techStack: [
      "Next.js (Full-Stack  Framework)",
      "Drizzle ORM + NeonDB (Database)",
      "Tailwind CSS (Styling)",
    ],
    images: [
      {
        name: "Hospital Food Manager Dashboard",
        path: "/hdfs/hfds1.jpg",
      },
      { name: "Patient Detail Form", path: "/hdfs/hfds2.jpg" },
      { name: "Food Prep and Assignment Form", path: "/hdfs/hfds3.jpg" },
      { name: "Staff List", path: "/hdfs/hfds4.jpg" },
      { name: "Inner Pantry Dashboard", path: "/hdfs/hfds5.jpg" },
      { name: "Delivery Personnel Dashboard", path: "/hdfs/hfds6.jpg" },
    ],
  },

  wsa: {
    id: "wsa",
    title: "Chrome Extension: Web Style Analyser",
    description:
      "A Chrome extension to instantly extract colors and fonts from any website.",
    description1:
      "A Chrome extension to instantly extract colors and fonts from any website, empowering web designers, developers, and creatives with a streamlined source of design inspiration.",
    techStack: ["Vite + React (Frontend)", "Tailwind CSS (Styling)"],
    visit:
      "https://chromewebstore.google.com/detail/web-style-analyzer/hjijjiefhnapbfgmaibbhgkphnchmjem",
    images: [
      { name: "Published in Chrome web store", path: "/wsa/wsa1.jpg" },
      { name: "screenshot1", path: "/wsa/wsaframe1.png" },
      { name: "screenshot2", path: "/wsa/wsaframe2.png" },
    ],
  },
  hms: {
    id: "hms",
    title: "Hostel Managment system",
    description:
      "The Hostel Management System is a web-based application for streamline hostel operations.",
    description1:
      "The Hostel Management System (HMS) is a web-based application designed to streamline hostel operations by" +
      " centralizing processes like leave requests, damage reporting, complaints, and meal management, improving" +
      "efficiency and communication between residents and authorities. It provides a student portal for submissions" +
      "and menu updates and an admin portal for managing approvals, meal headcounts, and issue resolution.",
    techStack: [
      "Vite + React (Frontend)",
      "Express.js (Backend)",
      "PostgreSql (Database)",
      "Tailwind CSS(Styling)",
    ],
    images: [
      { name: "Home page", path: "/hms/hms1.jpg" },
      { name: "student dashboard", path: "/hms/hms2.jpg" },
      { name: "request page", path: "/hms/hms3.jpg" },
      { name: "staff dashboard", path: "/hms/hms4.jpg" },
      { name: "Approval page", path: "/hms/hms5.jpg" },
    ],
  },

  cms: {
    id: "cms",
    title: "Car Marketplace",
    description:
      "A platform designed for users to list, buy, and sell cars with ease, providing a streamlined and user-friendly experience.",
    description1:
      "The Car Marketplace is a web-based application where users can list their cars for sale and browse available vehicles for purchase. " +
      "This platform allows sellers to showcase their cars with detailed descriptions, images, and pricing, while buyers can filter and search " +
      "for their desired vehicles. With a focus on simplicity and efficiency, the marketplace fosters trust and transparency between buyers and sellers.",
    techStack: ["Vite + React (Frontend)", "Tailwind CSS (Styling)"],
    images: [
      { name: "Home Page", path: "/cms/car1.jpg" },
      { name: "Browse Cars", path: "/cms/car2.jpg" },
      { name: "Car Details", path: "/cms/car3.jpg" },
      { name: "Post a Listing", path: "/cms/car4.jpg" },
    ],
  },
  dp: {
    id: "dp",
    title: "My Design Portfolio",
    description:
      "This is my design portfolio, where I have designed posters and web applications using Photoshop and Figma.",
    description1:
      "This is my design portfolio, where I have designed posters and web applications using Photoshop and Figma. <br/>" +
      "Click below to view my album.",
    images: [{ name: "Flickr Album", path: "/d1.jpg" }],
  },
};

export default projectData;

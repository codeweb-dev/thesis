import {
  Clock,
  Brain,
  CalendarDays,
  Utensils,
  Search,
  BookOpen,
  GraduationCap,
  QrCode,
} from "lucide-react";

export const groups = [
  {
    id: 1,
    title: "DutyTrack",
    description: "A Web-Based OJT Attendance and Duty Hours Monitoring System",
    icon: Clock,
    color: "#FFB3B3", // Light Red
    fullDescription: `This study focuses on the design and development of DutyTrack: A Web-Based OJT Management and Performance Tracking System for Computer Science (CS) and Information Technology (IT) students of EARIST Cavite Campus. The system aims to address the challenges associated with traditional manual monitoring of on-the-job training (OJT), such as inefficient record management, difficulty in tracking student attendance, delayed submission of reports, and limited visibility of student productivity and performance.
DutyTrack provides a centralized online platform that enables students to submit requirements, log daily activities, record attendance, track assigned tasks, and monitor completed duty hours. The system also allows company supervisors and OJT coordinators to evaluate student performance, monitor progress in real time, and manage OJT-related records efficiently. By integrating features such as task assignment, activity logging, time tracking, performance evaluation, and report generation, the system enhances transparency, accountability, and communication among all stakeholders involved in the OJT program.
The study is grounded on the Technology Acceptance Model (TAM), Systems Theory, and Process Automation concepts, which support the development of a user-friendly, efficient, and integrated monitoring system. Through the implementation of DutyTrack, the researchers aim to improve the overall management of OJT programs, promote student compliance and productivity, and provide a more organized and reliable approach to monitoring internship activities.`,
    leader: "Allen Labrague",
    roles: {
      Frontend: "Allen Labrague",
      Backend: "Allen Labrague",
      Designer: "Allen Labrague"
    },
    members: [
      "Khian Banatlao",
      "Drexel Malilay",
      "Shanley Datiles",
      "Althea Entona"
    ],
    images: [
      "/pictures/g1/p1.jpg",
      "/pictures/g1/p2.jpg",
      "/pictures/g1/p3.jpg"
    ],
    landingImage: "/pictures/g1/landing.png",
  },
  {
    id: 2,
    title: "Adaptive Science",
    description: "Educational Game Using Machine Learning Techniques",
    icon: Brain,
    color: "#B3D4FF", // Light Blue
    fullDescription: "ASHRAL is a 2D top-down educational adventure game developed using Unity that combines interactive gameplay with chemistry learning. The game is designed to provide students with an engaging environment where they can explore scientific concepts through exploration, resource gathering, crafting, and problem-solving. The story takes place in a post-catastrophe world affected by a failed scientific project conducted by the ASHRAL Corporation. Players assume the role of one of two twin protagonists who embark on a journey to uncover the truth behind the disaster while learning the fundamentals of chemistry. Throughout the game, players collect chemical elements from the environment, combine them to create compounds, and apply their knowledge to overcome obstacles and progress through the storyline. The game incorporates educational mechanics based on real chemical elements and compounds found in the periodic table. Players must identify element sources, understand basic chemical combinations, and utilize crafted materials to solve environmental puzzles and complete objectives. This approach promotes active learning by allowing players to apply scientific concepts within a meaningful and interactive context. ASHRAL aims to address the challenge of making science education more engaging by integrating chemistry lessons into a narrative-driven game experience. Through its combination of exploration, crafting, and problem-solving mechanics, the game seeks to enhance students' understanding of chemistry concepts while maintaining motivation and enjoyment. The project demonstrates how game-based learning can serve as an alternative educational tool that supports traditional classroom instruction and encourages self-directed learning.",
    leader: "Martin Belbider",
    roles: {
      Frontend: "Walter Jake De Lara",
      Backend: "Kenshin Alejandro",
      Designer: "Patricio Delacruz"
    },
    members: [
      "Kurt Rom"
    ],
    images: [
      "/pictures/g2/p1.jpg",
      "/pictures/g2/p2.jpg",
    ],
    landingImage: "/pictures/g2/landing.jpg",
  },
  {
    id: 3,
    title: "Resourcely",
    description: "A Web-Based Resource Allocation and Scheduling System for Municipal Facilities",
    icon: CalendarDays,
    color: "#B3FFC6", // Light Green
    fullDescription: "The GMA Municipal Digital Services is a centralized platform that provides accessible municipal services, information, and communication for residents and local government personnel.",
    leader: "Augusto Villanueva",
    roles: {
      Frontend: "John Clark Abordo",
      Backend: "John merco Ting",
      Designer: "Augusto Villanueva"
    },
    members: [
      "Shan chester cariaga",
      "Dustin Kim embate"
    ],
    images: [
      "/pictures/g3/p1.jpg",
      "/pictures/g3/p2.jpg",
    ],
    landingImage: "/pictures/g3/landing.png",
  },
  {
    id: 4,
    title: "Dietary Recommendation System",
    description: "Web-Based Dietary Food Recommendation System for Healthy Lifestyle",
    icon: Utensils,
    color: "#FFE0B2", // Light Orange
    fullDescription: "Eat smarter. Live better. NutriSmart calculates your BMI, daily calorie needs, and generates personalized meal plans — then adapts to your habits over time. Your intelligent nutrition companion, always learning.",
    leader: "Jexter Villamor",
    roles: {
      Frontend: "Faizal Manzano",
      Backend: "Grant Palermo",
      Designer: "Kyle Sacapanio"
    },
    members: [
      "John Robert Maceda",
      "Christian Gierran"
    ],
    images: [
      "/pictures/g4/p1.jpg",
      "/pictures/g4/p2.jpg",
    ],
    landingImage: "/pictures/g4/landing.jpg",
  },
  {
    id: 5,
    title: "Truth Lense",
    description: "AI-Powered Fake News Detection Platform",
    icon: Search,
    color: "#D1C4E9", // Light Purple
    fullDescription: "The study aims to develop a web-based Al-powered fact-checking platform (TruthLens) that detects and flags misinformation using Google Gemini's multimodal Al. It specifically seeks to: provide a centralized system for verifying claims from text, URLs, and images; use an Al consensus engine to generate truth scores with cited evidence; and evaluate the system using ISO/IEC 25010 in terms of performance, usability, reliability, and security.",
    leader: "Reymart P. Romano",
    roles: {
      Frontend: "Reymart P. Romano",
      Backend: "Justine Marc O. Fortaleza",
      Designer: "Reymart P. Romano"
    },
    members: [
      "Justine Marc O. Fortaleza",
      "Daniella S. Bantugan",
      "Reynante T. Boiser II",
      "Johnlloyd Bacos"
    ],
    images: [
      "/pictures/g5/p1.jpg",
      "/pictures/g5/p2.jpg",
    ],
    landingImage: "/pictures/g5/landing.webp",
  },
  {
    id: 6,
    title: "ThesisHub for EARIST",
    description: "Mobile App for Thesis Guidance and Monitoring",
    icon: BookOpen,
    color: "#F8BBD0", // Light Pink
    fullDescription: "ThesisHUB provides EARIST Cavite with document manager, AI tools such as grammar checker, templates and guides  based on EARIST's Official Thesis Guide in one application for thesis document making.",
    leader: "Louie John Adarle",
    roles: {
      Frontend: "Rhon Niel Dag-uman",
      Backend: "Rhon Niel Dag-uman",
      Designer: "Mark Jims Llanera"
    },
    members: [
      "Tey Hon Lee",
      "Ginerose Manes",
      "Shaira Nicole Fennis"
    ],
    images: [
      "/pictures/g6/p1.jpg",
      "/pictures/g6/p2.jpg",
    ],
    landingImage: "/pictures/g6/landing.jpg",
  },
  {
    id: 7,
    title: "EARIST Career Assessment (ECA)",
    description: "EARIST Career Assessment (ECA): Machine Learning-Based Career Path Recommendation System for Incoming First Year Students at EARIST Cavite Campus",
    icon: GraduationCap,
    color: "#B2EBF2", // Light Cyan
    fullDescription: "The EARIST Career Assessment (ECA) is a career guidance and recommendation system designed to help incoming first-year students of EARIST Cavite Campus choose academic programs and career paths that match their skills, interests, and abilities. The system utilizes Machine Learning and Hybrid Filtering Techniques to analyze student assessment results and generate personalized career recommendations. It also integrates the RIASEC Career Model and CHED curriculum standards to ensure that the suggested programs are aligned with students' profiles and educational requirements. Through data-driven recommendations, the system aims to support informed decision-making, reduce course mismatch, and assist students in selecting suitable career paths for their future academic and professional development.",
    leader: "Jonalyn Cruz",
    roles: {
      Frontend: "Francine Rexia Regalado",
      Backend: "Francine Rexia Regalado",
      Designer: "Jonalyn Cruz & Justin Aron Jacala"
    },
    members: [
      "Judy Ann Subico",
      "John Bernard Miranda"
    ],
    images: [
      "/pictures/g7/p1.jpg",
      "/pictures/g7/p2.jpg",
    ],
    landingImage: "/pictures/g7/landing.png",
  },
  {
    id: 8,
    title: "QRGuard",
    description: "A Secure Web-Based QR Code Attendance System for EARIST Cavite Students",
    icon: QrCode,
    color: "#FFF9C4", // Light Yellow
    fullDescription: "QRGuard is a web-based campus presence monitoring system designed to track and manage student entry and exit activities through a semester-based QR code and authenticated user accounts. The system automatically records and stores presence logs in a centralized database, enabling efficient monitoring, reporting, and data management. It provides administrators with comprehensive oversight of campus presence records, while allowing teachers to access student presence information as a supplementary reference for attendance monitoring. By digitizing the recording process, QRGuard aims to improve the accuracy, accessibility, and efficiency of student presence tracking within the university environment.",
    leader: "Joshua Belleza",
    roles: {
      Frontend: "Roberto Razonable",
      Backend: "Roberto Razonable",
      Designer: "John Brix Benitua"
    },
    members: [
      "Jomari Petipit",
      "Roberto Razonable",
      "John Brix Benitua"
    ],
    images: [
      "/pictures/g8/p1.jpg",
      "/pictures/g8/p2.jpg",
      "/pictures/g8/p3.jpg",
    ],
  },
];

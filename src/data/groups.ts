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

const fullDescription = `This study focuses on the design and development of DutyTrack: A Web-Based OJT Management and Performance Tracking System for Computer Science (CS) and Information Technology (IT) students of EARIST Cavite Campus. The system aims to address the challenges associated with traditional manual monitoring of on-the-job training (OJT), such as inefficient record management, difficulty in tracking student attendance, delayed submission of reports, and limited visibility of student productivity and performance.
DutyTrack provides a centralized online platform that enables students to submit requirements, log daily activities, record attendance, track assigned tasks, and monitor completed duty hours. The system also allows company supervisors and OJT coordinators to evaluate student performance, monitor progress in real time, and manage OJT-related records efficiently. By integrating features such as task assignment, activity logging, time tracking, performance evaluation, and report generation, the system enhances transparency, accountability, and communication among all stakeholders involved in the OJT program.
The study is grounded on the Technology Acceptance Model (TAM), Systems Theory, and Process Automation concepts, which support the development of a user-friendly, efficient, and integrated monitoring system. Through the implementation of DutyTrack, the researchers aim to improve the overall management of OJT programs, promote student compliance and productivity, and provide a more organized and reliable approach to monitoring internship activities.`;

const leader = "Allen Labrague";

const members = [
  "Khian Banatlao",
  "Drexel Malilay",
  "Shanley Datiles",
  "Althea Entona"
];

const images = [
  "/pictures/g1/p1.jpg",
  "/pictures/g1/p2.jpg",
  "/pictures/g1/p3.jpg"
];

const landingImage = "/pictures/g1/landing.png";

const teamData = {
  fullDescription,
  leader,
  members,
  roles: {
    Frontend: "Allen Labrague",
    Backend: "Allen Labrague",
    Designer: "Allen Labrague"
  },
  images,
  landingImage
};

export const groups = [
  {
    id: 1,
    title: "DutyTrack",
    description: "A Web-Based OJT Attendance and Duty Hours Monitoring System",
    icon: Clock,
    color: "#FFB3B3", // Light Red
    ...teamData,
  },
  {
    id: 2,
    title: "Adaptive Science",
    description: "Educational Game Using Machine Learning Techniques",
    icon: Brain,
    color: "#B3D4FF", // Light Blue
    ...teamData,
  },
  {
    id: 3,
    title: "Resourcely",
    description: "A Web-Based Resource Allocation and Scheduling System for Municipal Facilities",
    icon: CalendarDays,
    color: "#B3FFC6", // Light Green
    ...teamData,
  },
  {
    id: 4,
    title: "Dietary Recommendation System",
    description: "Web-Based Dietary Food Recommendation System for Healthy Lifestyle",
    icon: Utensils,
    color: "#FFE0B2", // Light Orange
    ...teamData,
  },
  {
    id: 5,
    title: "Truth Lense",
    description: "AI-Powered Fake News Detection Platform",
    icon: Search,
    color: "#D1C4E9", // Light Purple
    ...teamData,
  },
  {
    id: 6,
    title: "ThesisHub for EARIST",
    description: "Mobile App for Thesis Guidance and Monitoring",
    icon: BookOpen,
    color: "#F8BBD0", // Light Pink
    ...teamData,
  },
  {
    id: 7,
    title: "Nexus ALS",
    description: "Machine Learning-Based Career Path Recommendation System for ALS Learners",
    icon: GraduationCap,
    color: "#B2EBF2", // Light Cyan
    ...teamData,
  },
  {
    id: 8,
    title: "QRGuard",
    description: "A Secure Web-Based QR Code Attendance System for EARIST Cavite Students",
    icon: QrCode,
    color: "#FFF9C4", // Light Yellow
    ...teamData,
  },
];

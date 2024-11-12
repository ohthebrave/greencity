import { Handshake } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "About us", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Handshake />,
    text: "Empower the youth",
    description:
      "Engaging youth in sustainable urban development practices to help achieve livable cities in low socioeconomic regions in Kenya.",
  },
  {
    icon: <Fingerprint />,
    text: "Impact of Information",
    description:
      "Educating and disseminating information to youths involved in urban development on available technologies and best practices that contribute to smart cities and ensuring sustainable built environments/environmental sustainability.",
  },
  {
    icon: <ShieldHalf />,
    text: "Research",
    description:
      "For sustainable urban development to flourish, there is a need for continuous innovation in planning and design. Therefore, research is a key pillar to improve livability and ensure sustainable built environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Analyzing the power of corporate lock-ins",
    description:
      "Technological change cannot be considered without taking corporate power into account because corporate actors have a strong influence on how we develop cities, and what technologies get implemented in the built environment.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration",
    description:
      "Recognizing the potential synergy between the public and private realms, Kenya has the opportunity to transcend traditional boundaries and forge collaborations that lead to groundbreaking solutions.",
  },
  {
    icon: <GlobeLock />,
    text: "Climate Change",
    description:
      "In the tempest of global climate change, cities stand as vulnerable entities navigating uncharted waters. Kenya, acutely aware of the threat posed by climate change to its urban areas, acknowledges the imperative for strategic investments in adaptation and mitigation.",
  },
];

export const checklistItems = [
  {
    description:
      "Transforming the built environment in Kenya through innovative consultancy services.",
  },
  {
    description:
      "Our expertise spans urban planning, project management, research and Innovation, environmental planning/conservation, and building code/zoning guidelines.",
  },
  {
    description:
      "We collaborate with local government agencies, private developers, and community organizations to design sustainable, resilient, and inclusive spaces.",
  },
  {
    description:
      "Our commitment to excellence ensures that every project adheres to the highest standards of quality and compliance, fostering growth and sustainability in Kenya's urban and rural landscapes. Partner with us to shape the future of our cities and communities.",
  },
];

export const pricingOptions = [
  {
    title: "Urban Design",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Development applications ",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Master planning",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    title: "Environmental planning and Research",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    title: "Environmental Impact Assessment (EIA)",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    title: "Agro ecology and sustainable food systems",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

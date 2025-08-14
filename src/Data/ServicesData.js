import webmaindev from '../assets/webdevbackground.png'
import webdev from '../assets/webdev.png'
import mobiledev from '../assets/mobiledev.png'
import mobilemaindev from '../assets/mobiledevbackground.png'
import embededdev from '../assets/embededdev.png'
import embededmaindev from '../assets/embededmaindev.png'
import aimlbanner from '../assets/AIMLBanner.png'
import aiml from '../assets/AIMLcard.png'

const services = [
  {
    id: "1",
    title: "Web Development",
    heading: "WEB APPLICATION DEVELOPMENT",
    subheading: "Scalable Web Solutions Turning Ideas into Reality",
    description:
      "This refers to creating scalable web applications that can grow and adapt to increasing user demands while delivering reliable performance. It emphasizes transforming innovative ideas into fully functional, user-friendly web solutions that meet both current needs and future expansion requirements. The focus is on combining technical expertise with creativity to turn concepts into reality through effective web development practices.",
    features: [
      "Custom-Built Web Applications",
      "User-Friendly & Engaging Designs",
      "Scalable & High-Performance",
      "Seamless Functionality & Security",
    ],
    heroImage: webmaindev,
    icon: webdev,
  },
  {
    id: "2",
    title: "Mobile Application Development",
    heading: "MOBILE APPLICATION DEVELOPMENT",
    subheading: "Build user-friendly, high-performing native and cross-platform apps that work flawlessly across devices.",
    description:
      "We develop mobile applications that are tailored to meet our clients’ needs, turning their ideas into functional, user-friendly, and high-performance apps. Our solutions ensure seamless usability, engaging design, and reliable performance, helping clients connect with their audience and achieve their business goals effectively.",
    features: [
      "Cross-Platform & Native Apps",
      "Optimized for Performance",
      "User-Centered Design",
      "Secure & Reliable",
    ],
    heroImage: mobilemaindev,
    icon: mobiledev,
  },
  {
    id: "3",
    title: "Embeded and Internet of things",
    heading: "EMBEDED AND IOT",
    subheading: "Smart Embedded Systems & IoT Innovations",
    description:
      "We specialize in creating innovative embedded systems integrated with IoT technologies.Our solutions enable devices to communicate, collect, and process data in real time.From smart automation to remote monitoring, we deliver intelligent, connected products.This empowers businesses with efficiency, control, and future-ready technology.",
    features: [
      "Real-Time Data Processing",
      "Seamless Connectivity",
      "Low Power Consumption",
      "Scalability",
    ],
    heroImage: embededmaindev,
    icon: embededdev,
  },
   {
    id: "4",
    title: "AI & ML",
    heading: "AIML",
    subheading: "AI & Machine Learning Solutions",
    description:
      "We deliver AI and Machine Learning solutions that enable smarter decision-making, automation, and personalized experiences. Our expertise helps businesses leverage data to drive innovation and efficiency.",
    features: [
      "Predictive Analytics",
      "Automation",
      "Natural Language Processing",
      "Personalization",
    ],
    heroImage: aimlbanner,
    icon: aiml,
  },
];
export default services;
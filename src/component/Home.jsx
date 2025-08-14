import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './HeroSection';
import TechScroll from './TechScroll';
import BranchAndWorkflow from './BranchAndWorkflow';
import Float from './Float';

const themes = [
    { title: "Empowering Students & Shaping Future", description: "We are not just building products — we are building people and their futures" },
    { title: "Where Ideas Take Root and Projects Come to Life", description: "Every project starts with a spark. We cultivate that spark by helping students turn their creative thoughts into working prototypes and meaningful solutions" },
    { title: "Learn by Building & Grow by Solving", description: "We believe the best learning happens by doing & Our mission is to shape the next generation of thinkers and makers through real project experience" }
];

function Home({ scrollToSection }) {
    const [index, setIndex] = useState(0);
    const heroRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % themes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Allow parent (Navbar) to trigger scroll
    useEffect(() => {
        if (scrollToSection === 'services' && heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToSection]);

    return (
        <div>
            <Float />
            <div className="home-wrapper">
                <div className="theme-overlay">
                    <div className="home_themebox_border">
                        <h1 className="theme-title">{themes[index].title}</h1>
                        <p className="theme-description">{themes[index].description}</p>
                    </div>

                    <div className="info-row mt-3">
                        <div><h1>--: Our Process :--</h1></div>
                        <div className='d-flex flex-row justify-content-center align-items-center align-content-center'>
                            <div className="info-box">
                                <h3>APPROCH & PLAN</h3>
                                <h6>We analyze project needs, plan clearly, and guide students step-by-step to ensure understanding and success</h6>
                            </div>
                            <div className="info-box">
                                <h3>DESIGN</h3>
                                <h6>We craft clear, user-friendly designs that help students visualize and build their projects effectively</h6>
                            </div>
                            <div className="info-box">
                                <h3>DEVELOP</h3>
                                <h6>We help transform ideas into working projects with clean, efficient, and scalable code</h6>
                            </div>
                            <div className="info-box">
                                <h3>DEPLOY</h3>
                                <h6>We deliver and deploy your project with full support, ensuring it's live, secure, and ready to use</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="techscroll-container">
                <TechScroll />
            </div>

            {/* 👇 Add ref here */}
            <section id="hero-section">
                <HeroSection />
            </section>
            <BranchAndWorkflow />
        </div>
    );
}
export default Home;
import React from 'react';
import './AboutUs.css'
import MissionVisionSection from './Mission';
import ShapeExample from './ImageGrid';
import Float from './Float';

const AboutUs = () => {
  return (
    <>
      <div className='abback'>
        <div className="about-container">

          <Float />
          {/* Top Banner Section */}
          <section style={{ textAlign: 'center', marginTop: '60px' }}>
            <div className="container">

              <h1 style={{ fontSize: '48px', marginBottom: '10px', paddingTop: '50px' }}>
                About <span style={{ color: '#56f1e6ff' }}>S</span><span style={{ color: '#f55966ff' }}>M</span> Technologies
              </h1>
              <p style={{ fontSize: '18px', color: '#555', }}>
                Home &nbsp; &gt; &nbsp; About SM Technologies
              </p>
            </div>
          </section>


          <section className="section">
            <h2 className="title">Who We Are</h2>
            <p className="desc">
              We’re a young, dynamic force with vast knowledge — building next-gen digital experiences with passion and precision.
              At SM Technologies, we specialize in delivering innovative software solutions. From web and mobile development
              to AI integrations, our goal is to simplify technology and empower growth.
            </p>
          </section>

          <section className="section">
            <h2 className="title">What We Do</h2>
            <p className="desc">
              Our expertise spans across full-stack development, cloud deployment, UI/UX design, and performance optimization.
              We focus on building scalable, secure, and user-friendly digital products.
            </p>
          </section>

          <section className="section">
            <h2 className="title">Our Approach</h2>
            <p className="desc">
              We believe in listening first, building second. With an agile mindset and a collaborative work style,
              we ensure that every project reflects our client’s vision — delivered on time, every time.
            </p>
          </section>
        </div>

        {/* About Extendec Part */}
        <MissionVisionSection />
        <ShapeExample />
      </div>
    </>
  );
};
export default AboutUs;
import React from 'react';
import './TechScroll.css'; // Import the CSS file

const techs = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'javascript', logo: '/logos/javascript.png' },
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'html', logo: '/logos/html.png' },
  { name: 'css', logo: '/logos/css.png' },
  { name: 'php', logo: '/logos/php.png' },
  { name: 'MySql', logo: '/logos/sql.png' },
  { name: 'Flutter', logo: '/logos/flutter.png' },
  { name: 'Java', logo: '/logos/java.png' },
];

const TechScroll = () => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center align-content-center'>
      <div className="tech-scroll-container d-flex flex-column justify-content-center align-items-center align-content-center">
        <div className='text-center text-dark mt-5'><h1>Technologies We Offer</h1></div>

        <div className="tech-scroll-track ">
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="tech-logo">
              <img src={tech.logo} alt={tech.name} />
              <p className='text-center text-dark'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TechScroll;
import './Style/index.css';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faTypo3,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Experience {
  title: string;
  role: string;
  description: string;
  period: string;
  color: 'purple' | 'cyan' | 'green' | 'red' | 'blue' | 'yellow';
}

const experiences: Experience[] = [
  {
    title: 'FRONTEND DEVELOPER',
    role: 'FULLSTACK BINGO WEBSITE',
    description:
      'Built a fullstack bingo website currently running across 12 branches.',
    period: '2024 – PRESENT',
    color: 'red',
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    role: 'CAR DEALERSHIP WEBSITE',
    description:
      'Developed a static website for a car seller client.',
    period: '2024 ',
    color: 'blue',
  },
  {
    title: 'BACHELOR OF COMPUTER SCIENCE',
    role: 'ADDIS ABABA UNIVERSITY',
    description: '',
    period: '2022 – 2026',
    color: 'green',
  },
];

function Skills() {
  return (
    <div className="bg-[#121121] text-white py-5 ">
      <div
        id="skill"
       className="
+          p-2 
+          flex flex-col md:flex-row 
+          items-center justify-center 
+          gap-10
+          min-h-screen      /* base: at least full viewport */
+          overflow-hidden
+          pb-[300px]        /* mobile-only extra bottom padding */
+          sm:pb-0           /* reset padding on small (≥640px) up */
+        "
         data-aos="zoom-in"
         data-aos-duration="700"
         data-aos-delay="400"
       >
        {/* Experience Section (Left Side) */}
        <section className="w-full md:w-1/2 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Experience & Education
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex items-start">
                  <div
                    className={`flex-shrink-0 mt-1 h-4 w-4 rounded-full bg-${exp.color}-500 border-2 border-${exp.color}-500`}
                  ></div>
                  <div className="ml-6 pt-0.5 pb-4 pl-4 pr-6 bg-gray-800 rounded-xl shadow-md w-full">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    {exp.role && (
                      <p className="text-base text-gray-200 mb-1">{exp.role}</p>
                    )}
                    {exp.description && (
                      <p className="text-sm text-gray-400">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cube Section (Right Side) */}
        <div className="icon w-full md:w-1/2 flex justify-center">
          <div
            className="
              stage-cube-cont 
              mt-[40px]        /* give it space on mobile */
              md:mt-0         /* reset margin on tablets & up */
            "
          >
            <div className="cube-spiner">
              <div className="face1">
                <FontAwesomeIcon icon={faTypo3} color="#007ACC" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

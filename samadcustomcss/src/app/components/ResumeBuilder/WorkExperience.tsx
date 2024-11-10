// src/components/ResumeBuilder/WorkExperience.tsx
const WorkExperience = () => {
    return (
      <div>
        <h3 className="text-3xl font-bold text-gray-500">WORK EXPERIENCE</h3>
        <hr className="border-gray-500 my-2" />
        <div className="mt-4">
          <h3 className="text-gray-700 text-2xl font-semibold">Tech Innovations Ltd</h3>
          <span className="text-gray-500">2023-Present</span>
          <ul className="list-disc pt-5 ml-6 mb-4">
            <li>Developed and maintained responsive websites and applications.</li>
            <li>Optimized front-end performance to enhance user experience.</li>
            <li>Collaborated with cross-functional teams for API integrations.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-700 text-2xl font-semibold">Junior Web Developer</h3>
          <span className="text-gray-500">2022-2023</span>
          <ul className="list-disc pt-5 ml-6 mb-4">
            <li>Assisted in mobile-responsive site development.</li>
            <li>Reduced post-launch bugs by 20% through debugging.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default WorkExperience;
  
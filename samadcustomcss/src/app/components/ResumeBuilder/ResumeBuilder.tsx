// src/components/ResumeBuilder/ResumeBuilder.tsx
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import References from './References';

const ResumeBuilder = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <div className="border rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-cyan-900 text-white p-8 w-full md:w-1/3">
              <Profile />
              <ContactInfo />
              <Education />
              <Skills />
            </div>

            <div className="bg-gray-100 text-black p-8 w-full md:w-2/3">
              <h1 className="text-cyan-800 text-3xl font-bold">MARYAM LATIF</h1>
              <h3 className="text-xl font-medium text-gray-600">WEB DEVELOPER</h3>
              <WorkExperience />
              <References />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

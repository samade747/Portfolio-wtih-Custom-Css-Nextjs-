// src/components/ResumeBuilder/ContactInfo.tsx
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";


const ContactInfo = () => {
  return (
    <div>
      <h2 className="font-bold mt-2">CONTACT INFO</h2>
      <hr className="mt-2 mb-4" />
      <p className="flex items-center mt-3">
        <FiPhoneCall className="mr-2 text-gray-300" />
        <span className="ml-1">
       
        <a  href="tel:+923328222026" className="ml-1" target="_blank"> 03328222026</a>
              
        </span>
      </p>
      <p className="flex items-center mt-3">
        <AiOutlineMail className="mr-2 text-gray-300" />
        <span className="ml-1">Email:</span>
        <a href="mailto:samad.e747@gmail.com" className="ml-0" target="_blank">samad.e747@gmail.com</a>
      </p>
      <p className="flex items-center mt-3">
        <AiOutlineLinkedin className="mr-2 text-gray-300" />
        <span className="ml-1">LinkedIn:</span>
        <a href="https://www.linkedin.com/in/samaddeveloper/" className="ml-1" target="_blank">samaddevelpoer</a>
      </p>
      <p className="flex items-center mt-3">
        <LiaGithub className="mr-2 text-gray-300" />
        <span className="ml-1">Github:</span>
        <a href="https://github.com/samade747" className="ml-1" target="_blank">Github</a>
      </p>
    </div>
  );
};

export default ContactInfo;

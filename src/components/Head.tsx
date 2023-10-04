import { MDBIcon } from "mdb-react-ui-kit";
import { TypeAnimation } from "react-type-animation";
import { BsFilePdf, BsArrowDownSquare } from "react-icons/bs";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const Head = () => {
  return (
    <div className="head h-screen flex flex-col justify-center items-center head ">
      <div className="w-8/12 bg-slate-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">I'm Raz Goanizada</h1>

        <TypeAnimation
          sequence={[
            "I'm a Full Stack Developer",
            2000,
            "I can code with Java, React, Type Script, Java Script and Kotlin.",
            3000,
            "Of course HTML, CSS, SASS and modern design frameworks too.",
            3000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          omitDeletionAnimation={false}
          className="text-sky-700 mb-4"
        />
        <a
          href="https://api.whatsapp.com/send?phone=972524046007"
          target="_blank"
          className="me-4 text-reset"
        >
          <MDBIcon color="success" fab icon="whatsapp" className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/razgoanizada"
          target="_blank"
          className="me-4 text-reset"
        >
          <MDBIcon color="primary" fab icon="linkedin" className="text-4xl" />
        </a>
        <a
          href="https://github.com/razgoanizada"
          target="_blank"
          className="me-4 text-reset"
        >
          <MDBIcon color="dark" fab icon="github" className="text-4xl" />
        </a>
        <br />

        <div className="flex flex-col justify-center items-center mt-4">
          <a
            className="flex text-center gap-x-2 rounded-full border-2 py-2 px-4 bg-blue-50 hover:bg-blue-200"
            href="https://razgoanizada.com/files/CV.pdf"
            target="_blank"
          >
            <BsFilePdf className="h-5 w-5 sm:h-6 sm:w-6 fill-red-600" />
            <h5>Resume</h5>
          </a>
          
         
        </div>
      </div>
      <a href="#about"><MdOutlineKeyboardArrowDown className="bg-white mt-5 border rounded-full " size={50}/></a>
      
    </div>
  );
};

export default Head;

import { MDBIcon } from "mdb-react-ui-kit";
import { TypeAnimation } from "react-type-animation";
import { GrDocumentPdf } from "react-icons/gr";

const Head = () => {
  return (
    <div className="head h-screen flex justify-center items-center head">
      <div className="w-8/12 bg-sky-100 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">I'm Raz Goanizada</h1>

        <TypeAnimation
          sequence={[
            "I'm a Python Full Stack Developer",
            2000,
            "That's not all.",
            1000,
            "I can code with ReactJS, JavaScript, TypeScript VBA and Java.",
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

        <div className="flex justify-center items-center mt-3">
          <a
            className="flex text-center gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-black ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base"
            href="https://razgoanizada.com/files/CV.pdf"
            target="_blank"
          >
            <GrDocumentPdf className="h-5 w-5 sm:h-6 sm:w-6 fill-red-500" />
            <h5>Resume</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;


const Degrees = () => {

    return (
      <div className="flex flex-col justify-center items-center degrees  bg-gray-100">
          <h2 className="mx-4 flex justify-center mt-5">
            <span className="relative">
             MY DEGREES
              <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
            </span>
          </h2>
        <div className="mt-5 text-white flex flex-col flex-lg-row mb-4">
          <a href="https://razgoanizada.com/files/BED.pdf" target="_blank" className="mb-4">
            <div className="rectangle mx-3">
              <h3>Bachelor of Education (B.E.D)</h3>
            </div>
          </a>
          <a href="https://razgoanizada.com/files/FS.pdf" target="_blank" className="mb-4">
            <div className="rectangle mx-3">
            <h3>Full Stack development Course</h3>
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default Degrees;
  
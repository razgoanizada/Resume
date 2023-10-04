
const Projects = () => {

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 projects">
        <h2 className="mx-4 flex justify-center mt-5">
          <span className="relative">
           MY PROJECTS
            <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
          </span>
        </h2>
      <div className="mt-5 text-white flex flex-col flex-lg-row mb-4 items-center">
        <a href="https://github.com/razgoanizada/library" target="_blank">
          <div className="circle mb-3 mx-3">
            <h3>Library backend</h3>
          </div>
        </a>
        <a href="https://github.com/razgoanizada/libraryfront" target="_blank">
          <div className="circle mx-3 mb-3">
          <h3>Library frontend</h3>
          </div>
        </a>
        <a href="https://github.com/razgoanizada/library-application" target="_blank">
          <div className="circle mx-3 mb-3">
          <h3>Library application</h3>
          </div>
        </a>
        <a href="https://github.com/razgoanizada/Resume" target="_blank">
          <div
            className="circle mb-3 mx-3">
              <h3>Resume Website</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;

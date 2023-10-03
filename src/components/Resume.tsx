import my from "../images/my.png";

const Resume = () => {
  return (
    <div className="resume flex flex-col font-medium items-center bg-neutral-200">
      <div className="w-1/2 m-5 flex flex-col">
        <h2 className="mx-4 flex justify-center m-5">
          <span className="relative">
            EDUCATION
            <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
          </span>
        </h2>
        <div className="mt-5">
          <h3>HackerU Collage</h3>
          <h5>Full Stack development Course</h5> <h6>2021 - present</h6>
          <p className="mt-4">
            Java Full-Stack studies with mobile applications development
            orientation and modern frameworks.
          </p>
        </div>
        <hr />
        <div className="mt-5">
          <h3>Herzog College</h3>
          <h5>Bachelor </h5> <h6>2017-2021</h6>
          <p className="mt-4">
            Bachelor of Education (B.Ed.) in science, Computer Science and
            Mathematics .
          </p>
        </div>
      </div>

      <div className="w-1/2 m-3 flex flex-col">
        <h2 className="mx-4 flex justify-center">
          <span className="relative">
            WORK EXPERIENCE
            <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
          </span>
        </h2>
        <div className="mt-5">
          <h3>Technical Support</h3>
          <h5>South Sharon Regional Council Municipality</h5>{" "}
          <h6>2022 - present</h6>
          <p className="mt-4">
            <ul>
              <li className="list-disc">Technical support coordinator.</li>
              <li className="list-disc">
                System implementor -Working with CRM system
                establishing.appointments system and creating website forms.
              </li>
            </ul>
          </p>
        </div>
        <hr />
        <div className="mt-5">
          <h3>Technical Support Representative</h3>
          <h5>Internet Rimon, Givat Shmuel</h5> <h6>2021</h6>
          <p className="mt-4">
            <ul>
              <li className="list-disc">
                Solving technical problems with the application.
              </li>
              <li className="list-disc">
                Giving technical support to customers on the website
                andapplication.
              </li>
              <li className="list-disc">
                Configuration of routers, communication equipment, andnetwork
                traffic filtering
              </li>
            </ul>
          </p>
        </div>
        <hr />
        <div className="mt-5">
          <h3>Data entry representative</h3>
          <h5>Meitav unit, IDF</h5> <h6>2018-2019</h6>
          <p className="mt-4">
            <ul>
              <li className="list-disc">Managing SAP system..</li>
              <li className="list-disc">
                Generating and analyze reports in Excel on daily basis.
              </li>
              <li className="list-disc">
                Handling events requests (recruitments, reserves,
                Discharges,etc.) and reposting to logistics calls.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="w-1/2 m-3 flex flex-col">
        <h2 className="mx-4 flex justify-center">
          <span className="relative">
            SKILLS
            <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
          </span>
        </h2>
        <span className="ml-2 text-lg">JAVA</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `90%` }}
          />
        </div>
        <span className="ml-2 text-lg">REACT</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `90%` }}
          />
        </div>
        <span className="ml-2 text-lg">Type Script</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `85%` }}
          />
        </div>
        <span className="ml-2 text-lg">Java Script</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `85%` }}
          />
        </div>
        <span className="ml-2 text-lg">Kotlin</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `80%` }}
          />
        </div>
      </div>
      <div className="w-1/2 m-3 flex flex-col">
        <h2 className="mx-4 flex justify-center">
          <span className="relative">
            LANGUAGES
            <span className="bg-orange-400 absolute inset-x-0 bottom-0 h-1"></span>
          </span>
        </h2>
        <span className="ml-2 text-lg">Hebrew</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `100%` }}
          />
        </div>
        <span className="ml-2 text-lg">English</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: `85%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;

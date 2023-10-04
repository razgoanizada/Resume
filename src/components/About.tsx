import my from "../images/my.png";

const About = () => {
  return (
    <div className="about flex justify-center font-medium bg-neutral-300">
      <div className="w-1/2 flex flex-col flex-lg-row items-center m-5">
        <img
          src={my}
          alt="raz goanizada"
          className="col-10 col-lg-6 col-xl-4 mx-4 mt-5 mb-3"
        />
        <p>
          I am an organized and efficient person, hard-working with the ability
          to achieve tasks when working alone or as part of a team. In addition,
          I use a creative approach to problem-solving, have interpersonal
          skills, and have great multitasking ability. <br /> Today, I'm looking
          for a full stack developer position.
        </p>
      </div>
    </div>
  );
};

export default About;

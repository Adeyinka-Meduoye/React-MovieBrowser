import Hero from "./Hero";

const About = () => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Movies move us like nothing else can, whether they're scary,
              funny, dramatic, romantic or anywhere in-between. So many titles,
              so much to experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

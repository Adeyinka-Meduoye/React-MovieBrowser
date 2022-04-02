import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Discover the top, most popular movies available now! Across theaters, 
              streaming, and on-demand, these are the movies Rotten Tomatoes users 
              are embracing at this very moment, including Moonfall, Jackass Forever, 
              and Nightmare Alley. Click on each movie for reviews and trailers, and 
              see where to watch. Then bookmark this page to stay on top with our latest 
              updates to the charts. (And, of course, don’t forget to check out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

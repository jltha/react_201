import Hero from './Hero';

const Home = () => {
    return (
      <div>
        <Hero text="Welcome to my project!"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis quaerat incidunt non vitae eius, perferendis soluta animi ducimus delectus cumque sapiente dolores, exercitationem minima iste illo expedita aspernatur ipsum?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;
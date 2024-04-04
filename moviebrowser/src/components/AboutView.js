import Hero from './Hero';

const AboutView = () => {
    return (
      <div>
        <Hero text="About Us"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet mi sapien, sit amet posuere massa scelerisque eu. Nam sed volutpat tellus. Donec a nulla et nulla blandit elementum. Ut massa tortor, bibendum imperdiet neque sit amet, venenatis bibendum elit. Vestibulum arcu massa, malesuada vel eros id, auctor rhoncus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default AboutView;
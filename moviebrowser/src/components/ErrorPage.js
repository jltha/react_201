import Hero from './Hero';

const ErrorPage = ({ header, innerText}) => {
    return (
      <div>
        {
          header &&
          <Hero text={header}/>
        }
        <div className="container">
          <div className="row">
            { 
              innerText &&
              <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                  {innerText}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  export default ErrorPage;
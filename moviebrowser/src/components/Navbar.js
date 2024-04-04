import { useNavigate, Link } from 'react-router-dom';

// Rendering/Higher Order/const components. Other type is class-based component from react 101. Use one style or the other consistently for one project. Another type is functional components, which use functions instead of classes
const Navbar= ({ setSearchText, storedSearchText, setStoreSearchText }) => {
    const navigate = useNavigate();

    const replaceStoredText = (e) => {
      setStoreSearchText(e.target.value);
    }

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Movie Browser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" 
                  onSubmit={(e) => {
                              e.preventDefault();
                              setSearchText(storedSearchText);
                              navigate('/search');
                            }}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={storedSearchText}
                onChange={replaceStoredText}  
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
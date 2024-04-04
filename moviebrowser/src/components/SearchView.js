import Hero from './Hero';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className='col-lg-3 col-md-3 col-2 my-4'>
      <div className="card">
        <img src={posterUrl} 
             className="card-img-top" 
             onError={({ currentTarget }) => {
              currentTarget.src="https://placekitten.com/408/287";
            }}
             alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
}


const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, index) => {
      return <MovieCard movie={obj} key={index}/>
    });

    const errorPage = ((keyword && (searchResults == undefined || searchResults.length === 0)) ? <ErrorPage innerText="No movies match your search"/> : undefined);

    return (
      <div>
        <Hero text={title}/>
        {
          resultsHtml &&
          <div className='container'>
            <div className='row'>
              {resultsHtml}
            </div>
          </div>
        }
        {errorPage}
      </div>
    );
  }

export default SearchView;
import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieView = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=XXX&language=en-US`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return navigate("/nullPath");
          }
        })
        .then(data => {
          setMovieDetails(data);
          setIsLoading(false);
        })
    }, [params.id]);

    function renderMovieDetails() {
      if (isLoading) {
        return <Hero text="Loading..."/>;
      } 
      if (movieDetails) {
        // console.log(movieDetails);
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
        
        return (
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className='container my-5'>
              <div className='row'>
                <div className='col-md-3'>
                  <img src={posterPath} 
                       alt="image not found" 
                       className="img-fluid shadow rounded" 
                       onError={({ currentTarget }) => {
                                  currentTarget.src="https://placekitten.com/408/287";
                                }}/>
                </div>
                <div className='col-md-9'>
                  <h2>{movieDetails.original_title}</h2>
                  <p className='lead'>
                    {movieDetails.overview}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
    
    return renderMovieDetails();
  }

  export default MovieView;
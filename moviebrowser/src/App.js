import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Use of states for functional components, states for class-based components are mentioned in React 101
  // This is called a hook
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [storedSearchText, setStoreSearchText] = useState('');

  // useEffect(() => {
  //   if (searchText) {
  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=XXX&language=en-US&query=${searchText}&page=1&include_adult=false`)
  //       .then(response => response.json())
  //       .then(data => {
  //         setSearchResults(data.results);
  //       });
  //   }
  // }, [searchText]);

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=XXX&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(searchText);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
        <Navbar searchText={searchText} 
                setSearchText={setSearchText} 
                storedSearchText={storedSearchText}
                setStoreSearchText={setStoreSearchText}/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/about" element={<AboutView/>}/>
          <Route path="/search" 
                element={<SearchView keyword={searchText} 
                                     searchResults={searchResults}/>} />
          <Route path="/movies/:id" element={<MovieView/>}/>
          <Route path="*" element={<ErrorPage header="Error 404" 
                                              innerText="The page you are looking for could not be found."/>} />
        </Routes>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import {useState} from 'react';  
import Moviecard from './Moviecard';
import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg'
export default App;
// 998ededa
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=998ededa'

const movie1  = {
"Title": "Batman Begins",
"Year": "2005",
"imdbID": "tt0372784",
"Type": "movie",
"Poster": "N/A"
}


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
  setMovies(data.Search);
  }

  useEffect(() => {
  searchMovies('batman');
  },[]);
  return(
    <>
   <div className="app"><h1>Movies.Hub</h1></div>
   <div className="search">
    <input placeholder="Search for Movies " value= {searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} />
    <img src="{SearchIcon}"
     alt="search"
     onClick={()=>searchMovies(searchTerm)} />
   </div>
   {
    movies?.length > 0 
    ? (
   
   <div className="container">
    {movies.map((movie) => (
      <Moviecard movie = {movie} />
    ))}
   </div>
    ) : (
      <h2> No movies found </h2>
    )
   }
   </>
  );
}
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ListOfMovies from './components/movieList'
import SearchBox from './components/searchBox'
import MovieListHeading from './components/header'
import AddFavourite from './components/addToFavourites'

const MovieApp = () => {

const [movies, setMovies] = useState([])
const [value, setValue] = useState('')
const [favourites, setFavourites] = useState([])
console.log(value)

const getMovieRequest = async () => {
  const url =  `http://www.omdbapi.com/?s=${value}&apikey=263d22d8`

  const res = await fetch(url)
	const resJson = await res.json()
  console.log(resJson)

		if (resJson.Search) {
			setMovies(resJson.Search);
		}
}

const createFavouritesList = (movie) => {
  const favouriteList = [...favourites, movie]
  console.log(favouriteList)
  setFavourites(favouriteList)
}

useEffect(() => {
  getMovieRequest(value)
}, [value])

return (
  <div className = 'movieList'>
    <div className = 'heading'>
      <MovieListHeading 
        heading = 'Movies'
      />
      <SearchBox 
        searchValue={value} 
        setSearchValue={setValue}
      />
    </div>
    <div className = 'row'>
      <ListOfMovies 
        movies = {movies} 
        favouriteComponent={AddFavourite}
        handleFavourites={createFavouritesList}
      />
    </div>
    <div className='row'>
			<ListOfMovies movies={favourites} favouriteComponent={AddFavourite} />
			</div>
  </div>
 )
}

export default MovieApp
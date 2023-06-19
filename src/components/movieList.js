import React from 'react';

const ListOfMovies = (props) => {
	const FavouriteComponent = props.favouriteComponent

    return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavourites(movie)}
						className='overlay'
					>
					<FavouriteComponent />
				</div>
			</div>
			))}
		</>
	)
}

export default ListOfMovies
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Movie = () => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("make an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b54e0741c58fcf3d50261b235e31fc9`)
        .then(response => response.json())
        .then(data => {
            setTimeout(() =>{
            setMovieDetails(data)
            setIsLoading(false)
            },2000)
        })

    }, [id])

    const renderMovieDetails = () => {
        if(isLoading) {
            return <Hero text="loading..." />
        }
        if(movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-4">
                        <img src={posterPath} alt="Movie image here" className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-8">
                        <h3>{movieDetails.original_title}</h3>
                        <p className="lead">
                            {movieDetails.overview}
                        </p>
                        <p className="strong">
                            Release Date: {movieDetails.release_date}
                        </p>
                        <p className="strong">
                            Popularity: {movieDetails.popularity}
                        </p>
                    </div>
                </div>
            </div>
            </>        
            )
        }
    }


  return renderMovieDetails()
};

export default Movie;

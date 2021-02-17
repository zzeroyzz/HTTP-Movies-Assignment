import axios from "axios";
import React, {useState,useEffect} from "react";

const MoviesForm = (props) => {
    const [movie, setMovie] = useState(
        {
            title:props.movie.title,
            director: props.movie.director,
            metascore:props.movie.metascore,
            stars: props.movie.stars,
          }
    )

    const editMovie = () =>{
        axios
        .get('http://localhost:5000/api/movies')
        .then((res) =>{
            console.log("UpdateMovieForm: updateMovies: axios got",res)
            props.setMovieList(res.data);
        })
        .catch((err) =>{
            console.error("UpdateMovieForm: updateMovies: error getting axios", err)
        })
    }
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then((res) =>{
            console.log("kh UpdateMovieForm.js: useEffecft:res",res)
            setMovie(res.data)
        })
        .catch((err)=>{
            console.error(`error unable to getById # ${id}`,err)
        })
    }, [id])

    const handleChange = (e) =>{
        e.preventDefault();
        setMovie({
            ...movie,
            [e.target.name]:e.target.value
        })
       console.log("handleChange: something changed",e)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        axios
        .put(`http://localhost:5000/api/movies/${id}`,movie)
        .then((res) =>{
            console.log("kh:UpdateMovieForm.js: handleSubmit: axios success!", res)
            editMovie();
        })
        .catch((err) =>{
            console.error("error unable to update movie ${id} ",err)

        })
        push(`/movies`)
    }

    return(
        <div>
            <h2>Edit Movie</h2>
            <form className="edit" onSubmit={handleSubmit}>
            <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="title"
            value={title}
            />
            <input
            type="text"
            id="director"
            name="director"
            onChange={handleChange}
            placeholder="director"
            value={director}
            />
            <input
            type="text"
            id="metascore"
            name="metascore"
            onChange={handleChange}
            placeholder="metascore"
            value={metascore}
            />
            <input
            type="text"
            id="stars"
            name="stars"
            onChange={handleChange}
            placeholder="stars"
            value={stars}
            />


            </form>
            <button className="update-button" onClick={handleSubmit} >
        Save Edit
      </button>
         
        </div>
    )
}
export default MoviesForm;
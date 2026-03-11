import { useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function Movies() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {

    const { data, error } = await supabase
      .from("movies")
      .select("*")

    if (error) {
      console.log(error)
    } else {
      setMovies(data)
    }

  }

  return (
    <div>

      <h2>Lista de Películas</h2>

      {movies.map(movie => (

        <div key={movie.id}>

          <h3>{movie.nombre}</h3>

          <img
            src={movie.imagen}
            width="150"
          />

        </div>

      ))}

    </div>
  )
}

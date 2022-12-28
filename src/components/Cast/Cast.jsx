import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { movieCast } from "services/movies-api"
import { List, ListItem, Poster } from "./Cast.styled"

const Cast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState([])
  useEffect(() => {
    movieCast(movieId).then(setCast)
  }, [movieId])
  return cast.length > 0 ? (
    <List>
      {cast.map(({id, name, profile_path}) => {
        return (
        <ListItem key={id}>
            <span>{name}</span>
            {profile_path && <Poster src={`https://image.tmdb.org/t/p/w400${profile_path}`} alt=''/>}
        </ListItem>
        )
      })}
    </List>
  ) : <p> There is no info </p>
}

export default Cast
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
  return (
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
  )
}

export default Cast
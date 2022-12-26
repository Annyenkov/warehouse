import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { movieReviews } from "services/movies-api"

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams()
  useEffect(() => {
    movieReviews(movieId).then(setReviews)
  }, [movieId])

  return (
    <ul>
      {reviews.map(({id, author, content}) => {
        return (
          <li key={id}>
            <h3>{author}</h3>
            <span>{ content }</span>
          </li> 
       )
      })}
    </ul>
  )
}

export default Reviews
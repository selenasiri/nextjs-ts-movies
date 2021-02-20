import Link from 'next/link'
import { useNowPlayingMovies, MovieType } from '../../hooks/useMovies'
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  const { movies, isLoading, isError } = useNowPlayingMovies()
  console.log(movies)
  
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Error</div>
  
  return (
    <Carousel>
      { movies?.slice(0, 5).map((movie: MovieType) => (
        <Carousel.Item key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <img
              className="d-block w-100"
              src={movie.backPoster} 
              alt={movie.title}
              />
          </Link>
          
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
       ))} 
    </Carousel>
  )
}

export default Hero
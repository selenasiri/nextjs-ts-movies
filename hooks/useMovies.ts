import useSWR from 'swr'
import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_MOVIES_API_KEY
const baseAPIUrl = 'https://api.themoviedb.org/3'

interface MovieOriginalType {
  id: number;
  backdrop_path: string;
  popularity: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export interface MovieType {
  id: number;
  backPoster: string;
  popularity: number;
  title: string;
  poster: string;
  overview: string;
  rating: number;
}

const posterUrl = 'https://image.tmdb.org/t/p/original/';
const getModifiedMovies = (MoviesOriginal: MovieOriginalType[]): MovieType[] => {
  const modifiedMovies: MovieType[] = MoviesOriginal.map((movie: MovieOriginalType) => ({
    id: movie.id,
    backPoster: posterUrl + movie.backdrop_path,
    popularity: movie.popularity,
    title: movie.title,
    poster: posterUrl + movie.poster_path,
    overview: movie.overview,
    rating: movie.vote_average,
  }))

  return modifiedMovies;
}

const fetchNowPlayingMovies = async (url: string): Promise<MovieType[]> => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key = api_key & language=en_US & page=1
  const { data } = await axios.get(url, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1
    }
  })

  return getModifiedMovies(data.results)
}

const nowPlayingUrl = `${baseAPIUrl}/movie/now_playing`;
export const useNowPlayingMovies = () => {
  const { data, error } = useSWR(nowPlayingUrl, fetchNowPlayingMovies)

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error
  }
}
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "../services/api";
import { api_URL } from "../services/apiUrls";
import { addNowPlayingMovie } from "../store/slices/movieListSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getNowPlayingMovies = async () => {
          try {
            const res = await get(api_URL.nowPlayingMovie);
            dispatch(addNowPlayingMovie(res.data.results))
          } catch (err) {
    
          }
        }
        getNowPlayingMovies()
      }, []);
}
export default useNowPlayingMovies;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "../services/api";
import { api_URL } from "../services/apiUrls";
import { addPopularMovie } from "../store/slices/movieListSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getPopularMovies = async () => {
          try {
            const res = await get(api_URL.popularMovie);
            dispatch(addPopularMovie(res.data.results))
          } catch (err) {
    
          }
        }
        getPopularMovies()
      }, []);
}
export default usePopularMovies;
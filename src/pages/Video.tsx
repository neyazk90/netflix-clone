import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button";

interface iVideoInfo {
    videoId: string
}

const Video: React.FC<iVideoInfo> = ({ videoId = '6XUKdOSu_G8' }) => {


    const nowPlayingMovie = useSelector(store => store?.movieList.nowPlayingMovies);

    const playVideoHandler = () => {

    }
    return (
        <>
            {/* <div className='absolute h-screen z-10 bg-[#3f3b3b32] w-full'>
                <div className='bg-[#0f0e0e9e] ml-24 absolute max-w-72 min-w-72 h-80 p-4 rounded-md text-white top-52'>
                    <h1 className="text-3xl mb-8">{nowPlayingMovie[0].title}</h1>
                    <p className="text-sm mb-4">{nowPlayingMovie[0].overview}</p>
                    <Button btnText="Play▶️" btnWasClicked={playVideoHandler} size="block" />
                </div>
            </div> */}
            <iframe className='w-full h-screen aspect-video'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&cc_load_policy=0&si=pNrhlk54f6hZpBJt&amp;controls=0`}
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
    )
}

export default Video
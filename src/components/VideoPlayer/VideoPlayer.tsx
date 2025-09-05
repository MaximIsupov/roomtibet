"use client"

import { useRef, useState } from "react";

import "./VideoPlayer.css";

type VideoPlayerProps = {
    src: string,
    loop?: boolean,
    autoplay?: boolean
}

function VideoPlayer({src, loop, autoplay}: VideoPlayerProps) {

    const videoRef = useRef<HTMLVideoElement>(null);

    const [playBtnHidden, setPlayBtnHidden] = useState(false);
    const [pauseBtnHidden, setPauseBtnHidden] = useState(true);

    const toggleVideoControlButton = () => {
        setPlayBtnHidden(playBtnHidden => !playBtnHidden);
        setPauseBtnHidden(pauseBtnHidden => !pauseBtnHidden);
    }

    const toggleVideoPlay = () => {
        toggleVideoControlButton();
        playBtnHidden ? videoRef.current?.pause() : videoRef.current?.play();
    }

    return ( 
        <div className="video">
            <video ref={videoRef} src={src} autoPlay={autoplay} loop={loop} muted>
                Ваш браузер не поддерживает видео.
            </video>
            <div className="video__controls">
                <div className={`video__play ${playBtnHidden ? 'hidden' : '' }`} onClick={toggleVideoPlay}>
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.24267 0.655715C2.96389 0.496474 2.64819 0.413232 2.32714 0.414317C2.00609 0.415402 1.69096 0.500775 1.41326 0.661897C1.13557 0.823018 0.905057 1.05424 0.744785 1.33242C0.584513 1.6106 0.500104 1.926 0.5 2.24705V13.7549C0.500104 14.0759 0.584513 14.3913 0.744785 14.6695C0.905057 14.9477 1.13557 15.1789 1.41326 15.34C1.69096 15.5012 2.00609 15.5865 2.32714 15.5876C2.64819 15.5887 2.96389 15.5055 3.24267 15.3462L13.3113 9.59138C13.5917 9.43097 13.8248 9.19931 13.9869 8.91986C14.1489 8.64041 14.2343 8.3231 14.2343 8.00005C14.2343 7.677 14.1489 7.35969 13.9869 7.08024C13.8248 6.80079 13.5917 6.56913 13.3113 6.40872L3.24267 0.655715Z" fill="#1A3E3E" />
                    </svg>
                </div>
                <div className={`video__pause ${pauseBtnHidden ? 'hidden' : '' }`} onClick={toggleVideoPlay}>
                    <svg id="blue_copy" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="Layer_7_copy"><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"/><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"/><path d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z"/><path d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z"/><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z" /><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"/></g></svg>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
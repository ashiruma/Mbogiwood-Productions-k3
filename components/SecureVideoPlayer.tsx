// FILE: components/SecureVideoPlayer.tsx

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import apiClient from '@/lib/api'; // Your configured axios instance

type SecureVideoPlayerProps = {
    filmId: number;
};

const SecureVideoPlayer: React.FC<SecureVideoPlayerProps> = ({ filmId }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let hls: Hls | null = null;

        const fetchAndPlayVideo = async () => {
            if (videoRef.current) {
                try {
                    // 1. Fetch the secure HLS URL from our backend
                    const response = await apiClient.get<{ hls: string }>(`/api/films/${filmId}/stream/`);
                    const hlsUrl = response.data.hls;

                    const video = videoRef.current;

                    if (Hls.isSupported()) {
                        hls = new Hls();
                        hls.loadSource(hlsUrl);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            video.play();
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        // Native HLS support (mainly on Safari)
                        video.src = hlsUrl;
                        video.addEventListener('loadedmetadata', () => {
                            video.play();
                        });
                    }
                } catch (error) {
                    // Handle errors, e.g., user doesn't have access
                    console.error("Failed to load secure video stream:", error);
                }
            }
        };

        fetchAndPlayVideo();

        // Cleanup function to destroy the HLS instance when the component unmounts
        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [filmId]);

    return (
        <div className="w-full aspect-video bg-black">
            <video ref={videoRef} controls className="w-full h-full" />
        </div>
    );
};

export default SecureVideoPlayer;
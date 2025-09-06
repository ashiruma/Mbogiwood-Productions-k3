// FILE: components/SecureVideoPlayer.tsx
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import apiClient from '@/lib/api';

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
                    const response = await apiClient.get<{ hls_url: string }>(`/api/films/${filmId}/stream/`);
                    const hlsUrl = response.data.hls_url;
                    const video = videoRef.current;

                    if (Hls.isSupported()) {
                        hls = new Hls();
                        hls.loadSource(hlsUrl);
                        hls.attachMedia(video);
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = hlsUrl;
                    }
                } catch (error) {
                    console.error("Failed to load secure video stream:", error);
                }
            }
        };

        fetchAndPlayVideo();

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
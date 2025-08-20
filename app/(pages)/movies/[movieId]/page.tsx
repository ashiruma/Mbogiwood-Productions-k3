// This page fetches movie data and checks if the user has purchased it before rendering.

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";
import MpesaButton from "@/components/MpesaButton";


const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <div className="aspect-video">
            <video
                className="w-full h-full rounded-md"
                src={videoUrl}
                controls
                autoPlay
                controlsList="nodownload" // Discourage downloading
            ></video>
        </div>
    );
};

interface MoviePageProps {
  params: {
    movieId: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return redirect('/signin');
    }

    const currentUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!currentUser) {
        return redirect('/signin');
    }

    const movie = await prisma.movie.findUnique({
        where: { id: params.movieId },
    });

    if (!movie) {
        return <div className="text-white text-center p-10">Movie not found.</div>;
    }

    const purchase = await prisma.purchase.findUnique({
        where: {
            userId_movieId: {
                userId: currentUser.id,
                movieId: movie.id,
            },
        },
    });

    const hasPurchased = !!purchase;

    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

                {hasPurchased ? (
                    // If purchased, show the video player
                    <VideoPlayer videoUrl={movie.videoUrl} />
                ) : (
                    // If not purchased, show the thumbnail and buy button
                    <div>
                        <img 
                            src={movie.thumbnailUrl} 
                            alt={`Thumbnail for ${movie.title}`} 
                            className="w-full rounded-md mb-6"
                        />
                        <p className="text-lg text-zinc-300 mb-8">{movie.description}</p>
                        <MpesaButton
                            movieId={movie.id}
                            amount={150} // This can be dynamic
                            title={movie.title}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

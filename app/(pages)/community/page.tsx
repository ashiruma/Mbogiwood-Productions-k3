// app/(pages)/community/page.tsx
import apiClient from "@/lib/api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import ChatRoom from "@/components/ChatRoom";

type User = { full_name: string; };
type Review = { id: number; user: User; rating: number; comment: string; created_at: string; };

async function getLatestReviews(): Promise<Review[]> {
    try {
        const response = await apiClient.get('/reviews/latest/');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch latest reviews:", error);
        return [];
    }
}

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-primary fill-current' : 'text-muted-foreground'}`} />
        ))}
    </div>
);

export default async function CommunityPage() {
    const reviews = await getLatestReviews();

    return (
        <main className="container mx-auto py-12 px-6">
            <section className="text-center mb-16">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Community Hub</h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    See what others are saying and join the conversation in our live chat.
                </p>
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* --- Column for Live Chat --- */}
                <div className="lg:col-span-1">
                    <ChatRoom roomName="general" />
                </div>

                {/* --- Column for Recent Reviews --- */}
                <div className="lg:col-span-2">
                    <h2 className="font-heading text-2xl font-bold mb-4">Recent Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.length > 0 ? reviews.map(review => (
                            <Card key={review.id} className="bg-secondary flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold">
                                                {review.user.full_name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{review.user.full_name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {new Date(review.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <StarRating rating={review.rating} />
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground italic">"{review.comment}"</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs text-primary">on Film Title</p>
                                </CardFooter>
                            </Card>
                        )) : (
                            <p className="text-muted-foreground col-span-full text-center">No reviews have been submitted yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
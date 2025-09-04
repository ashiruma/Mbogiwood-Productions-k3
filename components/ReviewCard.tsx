// components/ReviewCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

type User = { full_name: string; };
type Review = { id: number; user: User; rating: number; comment: string; created_at: string; };

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
        ))}
    </div>
);

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <Card className="bg-secondary">
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
            <CardContent>
                <p className="text-muted-foreground italic">"{review.comment}"</p>
            </CardContent>
        </Card>
    );
}
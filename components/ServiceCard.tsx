// components/ServiceCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center bg-background hover:shadow-xl transition-shadow h-full border-2 border-transparent hover:border-primary">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <CardTitle className="font-heading text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}
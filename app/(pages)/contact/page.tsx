// app/(pages)/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="container mx-auto py-12 px-6">
            <div className="text-center mb-12">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a question about our films, services, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-secondary p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                                <Input id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
                            <Input id="subject" type="text" placeholder="What can we help you with?" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                            <Textarea id="message" placeholder="Your message..." rows={6} />
                        </div>
                        <div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </div>
                    </form>
                </Card>
                <div className="space-y-6">
                    <Card className="bg-secondary"><CardContent className="p-6 flex items-center space-x-4"><Mail className="w-6 h-6 text-primary" /><div><h3 className="font-semibold">Email</h3><p className="text-muted-foreground">admin@mbogiwood.co.ke</p></div></CardContent></Card>
                    <Card className="bg-secondary"><CardContent className="p-6 flex items-center space-x-4"><Phone className="w-6 h-6 text-primary" /><div><h3 className="font-semibold">Phone</h3><p className="text-muted-foreground">+254 719 317 559</p></div></CardContent></Card>
                    <Card className="bg-secondary"><CardContent className="p-6 flex items-center space-x-4"><MapPin className="w-6 h-6 text-primary" /><div><h3 className="font-semibold">Office</h3><p className="text-muted-foreground">Nairobi, Kenya</p></div></CardContent></Card>
                </div>
            </div>
        </main>
    );
}
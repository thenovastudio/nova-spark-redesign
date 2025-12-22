import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
    {
        title: "Quality Over Quantity",
        description:
            "We take on fewer projects to give each one the attention it deserves. No assembly-line websites here.",
    },
    {
        title: "Honest Communication",
        description:
            "We tell you what you need to hear, not what you want to hear. Transparency builds trust.",
    },
    {
        title: "Continuous Improvement",
        description:
            "We stay current with design trends and web technologies so your site is always modern.",
    },
    {
        title: "Long-Term Thinking",
        description:
            "We build relationships, not just websites. Your success is our success.",
    },
];

const About = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            About Us
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground">
                            A small Belgian digital studio obsessed with creating websites
                            that actually work for your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* IMAGE */}
                        <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                            <img
                                src="/about.svg"
                                alt="Nova Studio workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* TEXT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Nova Studio was born from a simple observation: too many local
                                    businesses have websites that work against them, not for them.
                                    Outdated designs, slow loading times, and zero focus on
                                    conversion are costing them customers every day.
                                </p>
                                <p>
                                    We started this studio to change that. Our mission is to give
                                    Belgian businesses — freelancers, local shops, professional
                                    services — the same quality web presence that big companies
                                    enjoy, but at a price and pace that makes sense.
                                </p>
                                <p>
                                    Every website we build is designed with one goal: to help your
                                    business grow. Beautiful design is important, but it's
                                    worthless if it doesn't convert visitors into customers.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span>Based in Belgium</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span>contact@thenovastudio.be</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-secondary/30">
                <div className="container">
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            What We Stand For
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Principles that guide everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="glass-card rounded-2xl p-8"
                            >
                                <span className="text-sm font-medium text-primary">
                                    0{index + 1}
                                </span>
                                <h3 className="mt-3 text-xl font-semibold">
                                    {value.title}
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Want to work together?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We'd love to hear about your project. Get in touch and let's
                            see how we can help.
                        </p>
                        <Button asChild variant="default" size="lg" className="mt-8">
                            <Link to="/contact">
                                Start a Conversation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default About;

import { MessageSquare, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        number: "01",
        title: "Discover",
        description:
            "We learn about your business, goals, and target audience to create a strategic foundation.",
    },
    {
        icon: Paintbrush,
        number: "02",
        title: "Design",
        description:
            "Crafting beautiful, conversion-focused designs that align with your brand identity.",
    },
    {
        icon: Code2,
        number: "03",
        title: "Build",
        description:
            "Developing your website with clean code, optimized performance, and SEO best practices.",
    },
    {
        icon: Rocket,
        number: "04",
        title: "Launch",
        description:
            "Testing, refinement, and a smooth launch with ongoing support to ensure success.",
    },
];

export function ProcessSection() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Simple process, exceptional results
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A streamlined approach that keeps you informed and delivers on time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative text-center lg:text-left"
                        >
                            <div className="inline-flex items-center justify-center lg:justify-start">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <step.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

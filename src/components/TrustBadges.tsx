import { CheckCircle2 } from "lucide-react";

const badges = [
  "Fast turnaround",
  "Fixed pricing",
  "Ongoing support",
  "SEO optimized",
];

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-border bg-secondary/20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

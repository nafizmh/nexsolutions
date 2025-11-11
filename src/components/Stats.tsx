import { Users, Star, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "১০,০০০+",
    label: "সন্তুষ্ট গ্রাহক",
  },
  {
    icon: TrendingUp,
    value: "৫০ লক্ষ+",
    label: "ফলোয়ার ডেলিভার করা হয়েছে",
  },
  {
    icon: Star,
    value: "৯৮%",
    label: "সফলতার হার",
  },
  {
    icon: Award,
    value: "৫+ বছর",
    label: "অভিজ্ঞতা",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { Zap, Shield, Users, Clock, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "দ্রুত গ্রোথ",
    description: "মাত্র কয়েক দিনেই দেখুন আপনার ফলোয়ার সংখ্যা বৃদ্ধি",
  },
  {
    icon: Users,
    title: "রিয়েল লুক ফলোয়ার",
    description: "১০০% রিয়েল look like অ্যাকাউন্ট",
  },
  {
    icon: Shield,
    title: "নিরাপদ ও সুরক্ষিত",
    description: "আপনার অ্যাকাউন্ট সম্পূর্ণ নিরাপদ থাকবে",
  },
  {
    icon: Clock,
    title: "তাৎক্ষণিক শুরু",
    description: "অর্ডারের সাথে সাথেই কাজ শুরু হয়ে যাবে",
  },
  {
    icon: TrendingUp,
    title: "দৃশ্যমান ফলাফল",
    description: "প্রতিদিন দেখুন আপনার পেজের উন্নতি",
  },
  {
    icon: Award,
    title: "বিশ্বাসযোগ্যতা বৃদ্ধি",
    description: "বেশি ফলোয়ার মানে বেশি ক্রেতার বিশ্বাস",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            কেন Nexsolution বেছে নেবেন?
          </h2>
          <p className="text-xl text-muted-foreground">
            আমরা প্রদান করি সবচেয়ে দ্রুত এবং নিরাপদ ফলোয়ার গ্রোথ সার্ভিস
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="gradient-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

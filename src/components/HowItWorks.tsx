import { MessageCircle, CreditCard, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "হোয়াটসঅ্যাপে যোগাযোগ করুন",
    description: "আমাদের হোয়াটসঅ্যাপ নম্বরে মেসেজ করুন এবং আপনার প্রয়োজনীয় প্যাকেজ বাছাই করুন",
  },
  {
    icon: CreditCard,
    title: "পেমেন্ট করুন",
    description: "নিরাপদে আপনার পছন্দের পদ্ধতিতে পেমেন্ট সম্পন্ন করুন",
  },
  {
    icon: Rocket,
    title: "কাজ শুরু হবে",
    description: "পেমেন্ট নিশ্চিত হওয়ার সাথে সাথেই আমরা কাজ শুরু করে দিব",
  },
  {
    icon: CheckCircle,
    title: "ফলাফল দেখুন",
    description: "দেখুন আপনার ফলোয়ার সংখ্যা বাড়তে থাকবে এবং পেজ জনপ্রিয় হতে থাকবে",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            কীভাবে কাজ করে?
          </h2>
          <p className="text-xl text-muted-foreground">
            মাত্র ৪টি সহজ ধাপে শুরু করুন আপনার সোশ্যাল মিডিয়া গ্রোথ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl glow-primary">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

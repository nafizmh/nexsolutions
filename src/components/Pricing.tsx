import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "স্টার্টার",
    price: "১,৫০০",
    followers: "১০,০০০ ফলোয়ার",
    popular: false,
    features: [
      "১০,০০০ ফলোয়ার",
      "১০০% রিয়েল look like অ্যাকাউন্ট",
      "দ্রুত ডেলিভারি",
      "২৪/৭ সাপোর্ট",
      "নিরাপদ ও সুরক্ষিত",
    ],
  },
  {
    name: "গ্রোথ",
    price: "৭,৫০০",
    followers: "৫০,০০০ ফলোয়ার",
    popular: true,
    features: [
      "৫০,০০০ ফলোয়ার",
      "১০০% রিয়েল look like অ্যাকাউন্ট",
      "অগ্রাধিকার ডেলিভারি",
      "২৪/৭ প্রিমিয়াম সাপোর্ট",
      "নিরাপদ ও সুরক্ষিত",
      "লাইফটাইম গ্যারান্টি",
    ],
  },
  {
    name: "প্রো",
    price: "১৪,৫০০",
    followers: "১,০০,০০০ ফলোয়ার",
    popular: false,
    features: [
      "১,০০,০০০ ফলোয়ার",
      "১০০% রিয়েল look like অ্যাকাউন্ট",
      "সুপার ফাস্ট ডেলিভারি",
      "ডেডিকেটেড সাপোর্ট",
      "নিরাপদ ও সুরক্ষিত",
      "লাইফটাইম গ্যারান্টি",
      "ফ্রি রিফিল সার্ভিস",
    ],
  },
];

const Pricing = () => {
  const whatsappUrl = "https://wa.me/8801631137868?text=আসসালামু আলাইকুম। সার্ভিসটি নিতে চাচ্ছি";
  
  return (
    <section id="pricing" className="py-24 px-4 gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            আপনার জন্য সঠিক প্যাকেজ খুঁজে নিন
          </h2>
          <p className="text-xl text-muted-foreground">
            স্বচ্ছ মূল্য, কোনো লুকানো খরচ নেই। ১০০% নিরাপদ ও কার্যকর।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`gradient-card p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 relative ${
                plan.popular
                  ? "border-primary glow-primary"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    জনপ্রিয়
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">৳{plan.price}</span>
                </div>
                <p className="text-lg text-muted-foreground">{plan.followers}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full font-semibold ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                    : "bg-card hover:bg-muted border-2 border-primary/30"
                }`}
                size="lg"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                অর্ডার করুন
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

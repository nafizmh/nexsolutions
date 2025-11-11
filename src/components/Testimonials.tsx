import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "মোহাম্মদ রফিক",
    role: "অনলাইন শপ মালিক",
    avatar: "",
    initials: "মর",
    rating: 5,
    text: "Nexsolution এর সার্ভিস সত্যিই অসাধারণ! মাত্র কয়েকদিনেই আমার পেজে ফলোয়ার বেড়ে গেছে এবং বিক্রয়ও বৃদ্ধি পেয়েছে।",
  },
  {
    name: "সাবিনা আক্তার",
    role: "ফ্যাশন ব্লগার",
    avatar: "",
    initials: "সা",
    rating: 5,
    text: "অত্যন্ত নিরাপদ এবং দ্রুত সার্ভিস। আমার ইনস্টাগ্রাম পেজ এখন অনেক জনপ্রিয়। সবাইকে রেকমেন্ড করব।",
  },
  {
    name: "কামরুল ইসলাম",
    role: "রেস্তোরাঁ মালিক",
    avatar: "",
    initials: "কই",
    rating: 5,
    text: "ফলোয়ার বাড়ার সাথে সাথে আমার রেস্তোরাঁয় কাস্টমারও বেড়েছে। সত্যিই কার্যকর সার্ভিস।",
  },
  {
    name: "নাজমুল হক",
    role: "ডিজিটাল মার্কেটার",
    avatar: "",
    initials: "নহ",
    rating: 5,
    text: "পেশাদার সার্ভিস এবং চমৎকার সাপোর্ট। ক্লায়েন্টদের জন্য আমি সবসময় Nexsolution ব্যবহার করি।",
  },
  {
    name: "ফারিয়া তাসনিম",
    role: "কসমেটিক্স বিজনেস",
    avatar: "",
    initials: "ফত",
    rating: 5,
    text: "আমার বিজনেস পেজের জন্য এটি ছিল সেরা সিদ্ধান্ত। ফলোয়ার বৃদ্ধির সাথে সাথে সেলও বেড়েছে।",
  },
  {
    name: "আরিফুল ইসলাম",
    role: "ইউটিউবার",
    avatar: "",
    initials: "আই",
    rating: 5,
    text: "দ্রুত এবং বিশ্বাসযোগ্য সার্ভিস। আমার সোশ্যাল মিডিয়া গ্রোথ এখন অনেক ভালো।",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            আমাদের গ্রাহকরা যা বলেন
          </h2>
          <p className="text-xl text-muted-foreground">
            হাজারো সন্তুষ্ট গ্রাহকের বিশ্বাস অর্জন করেছি আমরা
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

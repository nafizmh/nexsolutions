import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/8801631137868?text=আসসালামু আলাইকুম। সার্ভিসটি নিতে চাচ্ছি";
  
  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-8 border border-secondary/20">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">দ্রুত ফলোয়ার গ্রোথ Solution</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          দ্রুত ফলোয়ার গ্রোথ,{" "}
          <span className="text-secondary">দৃশ্যমান রেজাল্ট!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          আপনার বিসনেস পেজ হোক আরও জনপ্রিয় ও বিশ্বাসযোগ্য — বাড়বে ফলোয়ার, বাড়বে ক্রেতাদের ট্রাস্ট।
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 glow-primary"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            হোয়াটসঅ্যাপ করুন
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-foreground/20 hover:bg-foreground/5 text-lg px-8"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            আরও জানুন
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="gradient-card p-6 rounded-xl border border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">💼</div>
            <h3 className="text-lg font-semibold mb-2">সবচেয়ে এক্সপার্ট সার্ভিস প্রভাইডার</h3>
          </div>
          
          <div className="gradient-card p-6 rounded-xl border border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-lg font-semibold mb-2">দেশের পুরনো ও নাম্বার ওয়ান পেজ গ্রোথ সলিউশন!</h3>
          </div>
          
          <div className="gradient-card p-6 rounded-xl border border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-lg font-semibold mb-2">আপনার পেজের সাফল্য এখান থেকেই শুরু</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

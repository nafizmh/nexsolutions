import { Button } from "@/components/ui/button";

const CTA = () => {
  const whatsappUrl = "https://wa.me/8801631137868?text=আসসালামু আলাইকুম। সার্ভিসটি নিতে চাচ্ছি";
  
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          আজই বাড়ান আপনার ফলোয়ার সংখ্যা
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          হাজার হাজার সন্তুষ্ট গ্রাহক ইতিমধ্যে Nexsolution ব্যবহার করে তাদের সোশ্যাল মিডিয়া প্রোফাইল গ্রো করেছে। আপনিও যোগ দিন আজই!
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6 glow-primary mb-12"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          হোয়াটসঅ্যাপ করুন
        </Button>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>১০০% নিরাপদ</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground/30 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>১০০% রিয়েল look like ফলোয়ার</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground/30 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>দ্রুত ডেলিভারি</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

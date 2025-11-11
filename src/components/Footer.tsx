import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/8801631137868";
  
  return (
    <footer className="gradient-hero py-16 px-4 border-t border-border/20">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                N
              </div>
              <span className="text-xl font-bold">Nexsolution</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              বাংলাদেশের সবচেয়ে বিশ্বাসযোগ্য ও দ্রুততম সোশ্যাল মিডিয়া গ্রোথ সার্ভিস প্রদানকারী।
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  হোম
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  প্যাকেজ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">সার্ভিস সমূহ</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Facebook ফলোয়ার</li>
              <li className="text-muted-foreground">Instagram ফলোয়ার</li>
              <li className="text-muted-foreground">TikTok ফলোয়ার</li>
              <li className="text-muted-foreground">YouTube সাবস্ক্রাইবার</li>
              <li className="text-muted-foreground">পেজ লাইক</li>
              <li className="text-muted-foreground">পোস্ট এনগেজমেন্ট</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href={whatsappUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    +880 1631-137868
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:nexsolutionbd@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    nexsolutionbd@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  ঢাকা, বাংলাদেশ
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nexsolution. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                গোপনীয়তা নীতি
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                শর্তাবলী
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                রিফান্ড পলিসি
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Nexsolution" className="h-12 w-auto" />
        </div>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary">
          যোগাযোগ করুন
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

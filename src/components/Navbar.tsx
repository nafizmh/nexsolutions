import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
            N
          </div>
          <span className="text-xl font-bold">Nexsolution</span>
        </div>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary">
          যোগাযোগ করুন
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

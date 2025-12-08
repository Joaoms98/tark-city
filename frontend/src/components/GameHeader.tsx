import avatarImg from "@/assets/avatar.png";
import { LogOut, Users, Coins, Package } from "lucide-react";

const GameHeader = () => {
  const handleLogout = () => {
    console.log("logout clicked");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hud-panel">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Avatar Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-none border-4 border-primary overflow-hidden pixel-shadow">
              <img 
                src={avatarImg} 
                alt="Player Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block text-xs md:text-sm text-primary font-pixel">
              MAYOR
            </span>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-[10px] md:text-xs text-foreground">
                R$: <span className="text-accent">1000</span>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-[10px] md:text-xs text-foreground">
                Pop: <span className="text-primary">---</span>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              <span className="text-[10px] md:text-xs text-foreground">
                Res: <span className="text-muted-foreground">---</span>
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-destructive/20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors pixel-border"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:block text-[10px] md:text-xs">LOGOUT</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;

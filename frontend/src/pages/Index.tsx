import GameHeader from "@/components/GameHeader";
import CityGrid from "@/components/CityGrid";

const Index = () => {
  return (
    <div className="min-h-screen grass-pattern">
      <GameHeader />
      
      {/* Main Content Area with padding for fixed header */}
      <main className="pt-24 md:pt-28 pb-8">
        <div className="container mx-auto">
          
          {/* City Title */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-lg md:text-2xl text-primary font-pixel tracking-wider mb-2">
              🏙️ YOUR CITY 🏙️
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground">
              Click on buildings to interact
            </p>
          </div>
          
          {/* City Title */}
          <div className="mt-48 md:mt-64 lg:mt-72 pb-48 md:pb-56 lg:pb-64">
            <CityGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

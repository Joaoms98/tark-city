import GameHeader from "@/components/GameHeader";
import CityGrid from "@/components/CityGrid";

const Index = () => {
  return (
    <div className="h-auto min-h-screen grass-pattern pb-40">
      <GameHeader />
      
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-lg md:text-2xl text-primary font-pixel tracking-wider mb-2">
              YOUR CITY
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground">
              Click on buildings to interact
            </p>
          </div>

          <div className="mt-80">
            <CityGrid />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;

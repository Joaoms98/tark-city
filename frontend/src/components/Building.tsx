import building1Img from "@/assets/buildings/building1.png";
import building2Img from "@/assets/buildings/building2.png";
import building3Img from "@/assets/buildings/building3.png";

interface BuildingProps {
  id: string;
  label: string;
  imageIndex: number;
}

const buildingImages = [building1Img, building2Img, building3Img];

const Building = ({ id, label, imageIndex }: BuildingProps) => {
  const handleClick = () => {
    console.log(`${id} clicked`);
  };

  const image = buildingImages[imageIndex % buildingImages.length];

  return (
    <button
      id={id}
      onClick={handleClick}
      className="group relative w-full aspect-square bg-card rounded-none pixel-border pixel-shadow cursor-pointer transition-all duration-200 hover:animate-building-hover hover:z-10 focus:outline-none focus:ring-4 focus:ring-primary"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={label}
          className="w-full h-full object-contain p-2 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-hud/90 border-t-2 border-primary py-1 px-2">
        <span className="text-[8px] md:text-[10px] text-primary uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors pointer-events-none" />
    </button>
  );
};

export default Building;

import building1Img from "@/assets/buildings/building1.png";
import building2Img from "@/assets/buildings/building2.png";
import building3Img from "@/assets/buildings/building3.png";
import building4Img from "@/assets/buildings/building4.png";

interface BuildingProps {
  id: string;
  label: string;
  imageIndex: number;
}

const buildingImages = [building1Img, building2Img, building3Img, building4Img];

const Building = ({ id, label, imageIndex }: BuildingProps) => {
  const handleClick = () => {
    console.log(`${id} clicked`);
  };

  const image = buildingImages[imageIndex % buildingImages.length];

  return (
    <button
      id={id}
      onClick={handleClick}
      className="group relative w-full cursor-pointer focus:outline-none transition-transform duration-200 hover:scale-[1.05]"
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={image} 
          alt={label}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-primary bg-black/40 px-2 py-0.5 rounded-sm pointer-events-none">
        {label}
      </div>
    </button>
  );
};

export default Building;

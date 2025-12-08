import streetImg from "@/assets/streets/street.png";

interface StreetProps {
  orientation?: "vertical" | "horizontal";
}

const Street = ({ orientation = "vertical" }: StreetProps) => {
  return (
    <div 
      className={`
        bg-street overflow-hidden
        ${orientation === "vertical" ? "w-8 md:w-12 h-full min-h-[120px]" : "h-8 md:h-12 w-full"}
      `}
    >
      <div 
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${streetImg})`,
          backgroundSize: orientation === "vertical" ? "100% auto" : "auto 100%",
          backgroundRepeat: orientation === "vertical" ? "repeat-y" : "repeat-x",
          backgroundPosition: "center",
        }}
      >
        <span className="text-[6px] md:text-[8px] text-muted-foreground/60 uppercase tracking-widest rotate-0 bg-street/80 px-1">
          street
        </span>
      </div>
    </div>
  );
};

export default Street;

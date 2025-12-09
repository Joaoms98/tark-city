import Building from "./Building";

const CityGrid = () => {
  const cityRows = [
    [0, 1, 2, 3],
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {cityRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className="grid grid-cols-4 gap-4">
            {row.map((img, colIndex) => (
              <Building
                key={`b-${rowIndex}-${colIndex}`}
                id={`building-${rowIndex}-${colIndex}`}
                label="building"
                imageIndex={img}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityGrid;

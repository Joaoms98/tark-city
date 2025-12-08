import Building from "./Building";
import Street from "./Street";

const CityGrid = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid gap-4">
        {/* Row 1 */}
        <div className="flex items-stretch gap-2">
          <div className="flex-1">
            <Building id="building-1" label="building" imageIndex={0} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-2" label="building" imageIndex={1} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-3" label="building" imageIndex={2} />
          </div>
        </div>

        {/* Horizontal Street */}
        <Street orientation="horizontal" />

        {/* Row 2 */}
        <div className="flex items-stretch gap-2">
          <div className="flex-1">
            <Building id="building-4" label="building" imageIndex={1} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-5" label="building" imageIndex={2} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-6" label="building" imageIndex={0} />
          </div>
        </div>

        {/* Horizontal Street */}
        <Street orientation="horizontal" />

        {/* Row 3 */}
        <div className="flex items-stretch gap-2">
          <div className="flex-1">
            <Building id="building-7" label="building" imageIndex={2} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-8" label="building" imageIndex={0} />
          </div>
          <Street orientation="vertical" />
          <div className="flex-1">
            <Building id="building-9" label="building" imageIndex={1} />
          </div>
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-2">
          <Building id="building-1" label="building" imageIndex={0} />
          <Building id="building-2" label="building" imageIndex={1} />
        </div>
        
        <Street orientation="horizontal" />
        
        <div className="grid grid-cols-2 gap-2">
          <Building id="building-3" label="building" imageIndex={2} />
          <Building id="building-4" label="building" imageIndex={1} />
        </div>
        
        <Street orientation="horizontal" />
        
        <div className="grid grid-cols-2 gap-2">
          <Building id="building-5" label="building" imageIndex={2} />
          <Building id="building-6" label="building" imageIndex={0} />
        </div>
        
        <Street orientation="horizontal" />
        
        <div className="grid grid-cols-2 gap-2">
          <Building id="building-7" label="building" imageIndex={2} />
          <Building id="building-8" label="building" imageIndex={0} />
        </div>
        
        <Street orientation="horizontal" />
        
        <div className="flex justify-center">
          <div className="w-1/2">
            <Building id="building-9" label="building" imageIndex={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityGrid;

import SpeciesOutput from "../molecules/SpeciesOutput/SpeciesOutput";
import NavLayout from "../layouts/NavLayout";

function SpeciesPage() {
  return (
    <NavLayout>
      <div className="flex h-screen">
        <div className="w-full ml-96">
          <SpeciesOutput />
        </div>
      </div>
    </NavLayout>
  );
}

export default SpeciesPage;

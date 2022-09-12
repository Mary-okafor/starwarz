import PeopleOutput from "../molecules/PeopleOutput/PeopleOutput";
import NavLayout from "../layouts/NavLayout";

function PeoplePage() {
  return (
    <NavLayout>
      <div className="flex h-screen">
        <div className="w-full ml-96">
          <PeopleOutput />
        </div>
      </div>
    </NavLayout>
  );
}

export default PeoplePage;

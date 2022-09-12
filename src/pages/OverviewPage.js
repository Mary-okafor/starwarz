import NavTopArea from "../atoms/NavTopArea/NavTopArea";
import NavLayout from "../layouts/NavLayout";
import FilmsOutput from "../molecules/FilmsOutput/FilmsOutput";


function OverviewPage() {
  return (
    <NavLayout>
      <div className="flex h-screen">
        <div className="w-full ml-96">
          <NavTopArea />
          <FilmsOutput />
        </div>
      </div>
    </NavLayout>
  );
}

export default OverviewPage;

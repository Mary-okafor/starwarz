import coverImg from "../molecules/NavBar/images/coverImg.svg";
import NavLayout from "../layouts/NavLayout";

function PeopleDetails() {

  return (
    <NavLayout>

    <div className="flex h-screen gap-5 ml-80 mt-11 pl-20">
      <div>
        <img src={coverImg} alt="cover" />
      </div>
      <div className="mt-10" >
        <p className="pb-8 text-5xl font-bold">COVER</p>
        <p className="text-base font-medium text-enyata-ash103">Director: Frank Peter</p>
        <p className="text-base font-medium text-enyata-ash103">Producer: Oluwaseun Matthew</p>
        <p className="text-base font-medium text-enyata-ash103">Release Date: 12/23/2034</p>
      </div>
    </div>
    </NavLayout>
  );
}

export default PeopleDetails;

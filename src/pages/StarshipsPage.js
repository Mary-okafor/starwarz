import StarshipsOutput from "../molecules/StarshipsOutput/StarshipsOutput";
import NavLayout from "../layouts/NavLayout";

function StarshipsPage() {
  return (
    <NavLayout>
      <div className="flex h-screen">
        <div className="w-full ml-96">
          <StarshipsOutput />
        </div>
      </div>
    </NavLayout>
  );
}

export default StarshipsPage;

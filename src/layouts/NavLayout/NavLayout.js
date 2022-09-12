import NavBar from "../../molecules/NavBar/NavBar";
import Navigation from "../../molecules/Navigation/Navigation";

function AppLayout({ children }) {
  return (
    <div>
      <Navigation />
      <NavBar />

      <div> {children} </div>
    </div>
  );
}

export default AppLayout;

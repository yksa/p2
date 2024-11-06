import AlbumList from "./components/AlbumList";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="bg-[#E22A7F]">
      <div className="flex">
        <SideMenu />
        <div className={`bg-white rounded-br-[40px] shadow-lg`}>
          <Header />
          <AlbumList />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

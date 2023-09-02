import './App.css';

import Nav from "./main-components/Nav";
import Header from "./main-components/Header";
import Footer from "./main-components/Footer";
import ChooseATable from "./main-components/ChooseATable";
import ReservetionForm from "./main-components/ReservetionForm";

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <main>
        <ChooseATable/>
        <ReservetionForm/>
      </main>
      <Footer/>
    </>
  );
}

export default App;

import { useState } from "react";
import Home from "./components/home";
import More from "./components/more";
import Modal from "./components/modal";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div>
      {modal && <Modal closeModal={closeModal} />}
      <Home openModal={openModal} />
      <More openModal={openModal} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

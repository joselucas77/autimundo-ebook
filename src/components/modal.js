import Card from "./card";

// eslint-disable-next-line react/prop-types
function Modal({ closeModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[100]">
      <div
        className="absolute top-0 left-0 w-full h-screen backdrop-opacity-10 backdrop-invert bg-black/30"
        onClick={closeModal}></div>
      <div className="relative max-w-[530px] w-full z-[100]">
        <Card />
      </div>
    </div>
  );
}

export default Modal;

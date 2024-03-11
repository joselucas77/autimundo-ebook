const Home = ({ openModal }) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('./img/fundo.jpg')] bg-gray-700 bg-blend-multiply h-screen">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-t to-blue-50 from-blue-500">
          Guia prático para pais e cuidadores de crianças autistas
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Não perca essa oportunidade exclusica e garanta seu acesso agora mesmo
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={openModal}>
            Acesse aqui
          </button>
          <a
            href="#more"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Mais informações
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

const More = ({ openModal }) => {
  return (
    <section className="bg-white h-full" id="more">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-4">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
            Para quem é este Ebook
          </h1>
          <p className="text-lg font-normal text-gray-500 mb-2">
            Esse trabalho foi desenvolvido para pais e cuidadores de crianças,
            diagnosticadas com autísmo, visando facilitar o dia a dia trazendo
            soluções práticas para maior compreensão e engajamneto na
            comunicação de ambos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-8">
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Pais e Responsáveis
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-2">
              Caro pai, imagine ter em suas mãos um guia completo e compassivo
              que desvenda os mistérios do autismo, oferecendo insights
              profundos e práticas eficazes. Este ebook exclusivo é como uma
              bússola que o conduzirá através das complexidades do espectro
              autista, revelando estratégias para lidar com desafios de
              comunicação, comportamento e interação social. Com histórias
              reais, dicas práticas e orientações baseadas em evidências, você
              estará melhor preparado para apoiar seu filho em sua jornada
              única. Não perca a oportunidade de adquirir esse conhecimento
              valioso e fortalecer o vínculo com seu filho.
            </p>
            <button
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              onClick={openModal}>
              Acessar ebook
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-8">
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Cuidadores
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-2">
              Queridos cuidadores, vocês não estão sozinhos. Conheçam o incrível
              ebook que descomplica a jornada com crianças especiais. Ele
              oferece estratégias práticas para lidar com desafios diários,
              desde comunicação até comportamento. Compartilhem essa fonte de
              conhecimento com todos os conhecidos e ajudem a tornar a vida das
              crianças especiais mais brilhante e a de vocês, cuidadores, mais
              leve. Baixem o ebook agora mesmo e espalhem essa valiosa
              ferramenta!
            </p>
            <button
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              onClick={openModal}>
              Acessar Ebook
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default More;

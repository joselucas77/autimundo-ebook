import React from 'react'
import { IoLogoInstagram, IoLogoYoutube, IoLogoTiktok } from "react-icons/io5";

const ThanksPage = () => {
  return (
    <section className="bg-gray-700 min-h-screen" id="thanks">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-t to-blue-50 from-blue-500 md:text-5xl lg:text-6xl">Obrigado pela sua inscrição</h1>
          <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl">Agora você será notificado sobre nossos novos lançamentos. Não deixe de conferir nossas redes sociais e o canal do Youtube. Confira um de nossos vídeos agora mesmo.</p>
          <div className="flex space-x-4 flex-row">
            <a href="https://www.instagram.com/auti.mundo/" className="inline-flex justify-center items-center py-3 px-3 text-4xl text-center text-gray-50 duration-500 hover:text-gray-900 bg-cover bg-center bg-no-repeat bg-[url('./img/insta.png')] rounded-full"
              target="_blank"
              rel="noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="https://www.youtube.com/@autimundo-lk4rq" className="inline-flex justify-center items-center py-3 px-3 text-4xl text-center text-gray-50 bg-[#FF0000] hover:text-[#FF0000] hover:bg-gray-100 duration-500 rounded-full" target="_blank"
              rel="noreferrer">
              <IoLogoYoutube />
            </a>
            <a href="https://www.tiktok.com/@marlon.pinheiro61" className="inline-flex justify-center items-center py-3 px-3 text-4xl text-center text-gray-50 bg-black hover:text-black hover:bg-gray-100 duration-500 rounded-full" target="_blank"
              rel="noreferrer">
              <IoLogoTiktok />
            </a>
          </div>
        </div>
        <div>
          <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/v7gGKU4wpbc?si=YAIP99jWZR56hQGm" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default ThanksPage
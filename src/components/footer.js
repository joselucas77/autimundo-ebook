import { IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full shadow-black shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 AutiMundo™ . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/auti.mundo/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 hover:text-cyan-900 text-2xl">
              <RiInstagramFill />
            </a>
            <a
              href="https://www.youtube.com/@autimundo-lk4rq"
              target="_blank"
              className="text-gray-500 hover:text-red-700 ms-5 text-2xl"
              rel="noreferrer">
              <IoLogoYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@marlon.pinheiro61"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5 text-2xl"
              rel="noreferrer">
              <IoLogoTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

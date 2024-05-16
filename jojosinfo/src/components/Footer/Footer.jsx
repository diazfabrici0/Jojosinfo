import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaGithub,
    FaRegCopyright,
  } from "react-icons/fa6";
  
  export const Footer = () => {
    return (
      <footer className="">
        <div className="">
          <div className="">
            <p className="">Grupo 6</p>
            {/* <div class="border-l h-24 border-gray-500"></div> */}
          </div>
          <div>
            <p className="">
              ¿Quienes Somos?
            </p>
            <div>
              <div className="">
                <FaGithub />
                <p>Fabricio Diaz</p>
              </div>
            </div>
          </div>
          <div>
            <p className="">
              Nuestras Redes sociales
            </p>
            <div className="">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="" />
              </a>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="">
          <FaRegCopyright />
          <p>Todos los derechos reservados, 2024</p>
        </div>
      </footer>
    );
  };
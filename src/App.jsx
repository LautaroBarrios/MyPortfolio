import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  PhotoProfile,
  GitHub,
  LinkedIn,
  HTML,
  CSS3,
  TailwindCSS,
  ReactSVG,
  Redux,
  Js,
  Sequelize,
  NodeSVG,
  PHP,
  Laravel,
  MySQL,
  SQL,
  FilePDF,
} from "./assets/AllAssets";
import {
  LandingGV,
  HomeGV,
  NewVideogameGV,
  DetailGV,
  LandingCT,
  HomeCT,
  ServicesCT,
  TeamCT,
} from "./img/AllPictures";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderVisible, setSliderVisible] = useState(false);
  const projectImagesGV = [LandingGV, HomeGV, NewVideogameGV, DetailGV];
  const projectImagesCT = [LandingCT, HomeCT, ServicesCT, TeamCT];
  const [selectedProject, setSelectedProject] = useState("gamesView");
  const [codeTutorLinkVisible, setCodeTutorLinkVisible] = useState(false);
  const [gamesViewLinkVisible, setGamesViewLinkVisible] = useState(false);

  const [otherProjects, setOtherProjects] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectImagesGV.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectImagesGV.length - 1 ? 0 : prevSlide + 1
    );
  };

  const scrollToSlider = () => {
    setTimeout(() => {
      const sliderContainer = document.getElementById("sliderContainer");
      if (sliderContainer) {
        sliderContainer.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToOtherProjects = () => {
    setTimeout(() => {
      const containerOtherProjects = document.getElementById(
        "containerOtherProjects"
      );
      if (containerOtherProjects) {
        containerOtherProjects.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    setCodeTutorLinkVisible(selectedProject === "codeTutor");
    setGamesViewLinkVisible(selectedProject === "gamesView");
  }, [selectedProject]);

  return (
    <>
      <section className="bg-gray-900 w-full h-full text-white">
        <div className="flex flex-col flex-wrap items-center justify-center py-4">
          <img
            className="w-48 h-48 rounded-full border-4"
            src={PhotoProfile}
            alt="Profile"
            title="Hello World!"
          />
          <article>
            <h1 className="font-thin text-2xl text-center p-4">
              FULL STACK DEVELOPER
            </h1>
            <p className="font-thin text-justify px-8 sm:px-36">
              Full Stack Developer con conocimientos en metodologías ágiles,
              estructuras de datos, algoritmos, frameworks y con más de 1 año
              como programador Backend especializado en PHP, Laravel, MySQL, SQL
              entre otras tecnologías del sector. Mi experiencia en el diseño y
              creación de una plataforma de organización y gestión de
              empleados/contratos me permitió desarrollar y mejorar habilidades
              como creatividad, trabajo en equipo, compromiso, pensamiento
              crítico, flexibilidad y aprendizaje constante e independiente,
              entre otras. Me especializo en el diseño de interfaces amigables
              con el usuario.
            </p>
            <ul className="flex items-center justify-center px-4 py-8 space-x-6">
              <li>
                <a
                  href="https://github.com/LautaroBarrios"
                  title="Ir a GitHub"
                  target="_blank"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img className="w-16 h-16 invert" src={GitHub} alt="GitHub" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lautaro-g-barrios/"
                  title="Ir a LinkedIn"
                  target="_blank"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    className="w-16 h-16 invert"
                    src={LinkedIn}
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a
                  href="./CV-BarriosLautaroG.pdf"
                  title="Descargar CV"
                  download={""}
                  className="transform hover:scale-110 transition-transform"
                >
                  <img className="w-16 h-16 invert" src={FilePDF} alt="CV" />
                </a>
              </li>
            </ul>
          </article>
          <div className="border h-12 w-0" />
          <article className="flex flex-col items-center justify-center">
            <h2 className="w-32 font-thin text-xl text-center p-4 border rounded-md">
              Tecnologías
            </h2>
            <div className="border h-12 w-0" />
            <ul className="flex flex-wrap items-center justify-center p-4 space-x-2 space-y-2">
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={HTML}
                  alt="HTML5"
                  title="HTML5"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={CSS3}
                  alt="CSS3"
                  title="CSS3"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={TailwindCSS}
                  alt="TailwindCSS"
                  title="TailwindCSS"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={ReactSVG}
                  alt="React"
                  title="React"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={Redux}
                  alt="Redux"
                  title="Redux"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={Js}
                  alt="JavaScript"
                  title="JavaScript"
                />
              </li>
              <li>
                <div
                  className="flex w-20 h-20 rounded-full border items-center justify-center cursor-progress transform hover:scale-110 transition-transform"
                  title="Express"
                >
                  <h1 className="text-3xl">EX</h1>
                </div>
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={Sequelize}
                  alt="Sequelize"
                  title="Sequelize"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={NodeSVG}
                  alt="NodeJS"
                  title="NodeJS"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={PHP}
                  alt="PHP"
                  title="PHP"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={Laravel}
                  alt="Laravel"
                  title="Laravel"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={MySQL}
                  alt="MySQL"
                  title="MySQL"
                />
              </li>
              <li>
                <img
                  className="w-20 h-20 invert cursor-progress transform hover:scale-110 transition-transform"
                  src={SQL}
                  alt="SQL"
                  title="SQL"
                />
              </li>
            </ul>
          </article>
          <div className="border h-12" />
          <h2 className="w-32 font-thin text-xl text-center p-4 border rounded-md">
            Proyectos
          </h2>
          <div className="border h-12 w-0" />
          <div className="flex flex-wrap space-x-4">
            <button
              onClick={() => {
                setSelectedProject("gamesView");
                setSliderVisible((prevValue) =>
                  prevValue && selectedProject === "gamesView" ? false : true
                );
                setGamesViewLinkVisible(!gamesViewLinkVisible); // Toggle the link visibility for GamesView
                scrollToSlider();
              }}
              title="Ver/Ocultar"
              className="my-4 px-4 py-2 bg-[#000056] text-[#FF5C81] border-2 border-[#FF5C81] hover:bg-blue-950 transform hover:scale-110 transition-transform"
            >
              GamesView
            </button>

            <button
              onClick={() => {
                setSelectedProject("codeTutor");
                setSliderVisible((prevValue) =>
                  prevValue && selectedProject === "codeTutor" ? false : true
                );
                setCodeTutorLinkVisible(!codeTutorLinkVisible); // Toggle the link visibility for Code-Tutor
                scrollToSlider();
              }}
              title="Ver/Ocultar"
              className="my-4 px-4 py-2 bg-[#7F56D9] border-2 rounded hover:bg-blue-950 transform hover:scale-110 transition-transform"
            >
              Code-Tutor
            </button>
          </div>
          {sliderVisible && (
            <div
              id="sliderContainer"
              className="max-w-[1230px] w-full m-auto p-4 relative group"
            >
              <div
                style={{
                  backgroundImage: `url(${
                    selectedProject === "gamesView"
                      ? projectImagesGV[currentSlide]
                      : projectImagesCT[currentSlide]
                  })`,
                  paddingBottom: "calc(100% / 1230 * 690)",
                }}
                className="w-full rounded-lg bg-center bg-contain bg-no-repeat duration-500 border-2"
              >
                {/* Left Arrow */}
                <button
                  onClick={goToPreviousSlide}
                  className="absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded py-4 bg-black/60 text-white cursor-pointer border"
                >
                  <BsChevronCompactLeft size={30} />
                </button>
                {/* Right Arrow */}
                <button
                  onClick={goToNextSlide}
                  className="absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded py-4 bg-black/60 text-white cursor-pointer border"
                >
                  <BsChevronCompactRight size={30} />
                </button>
              </div>
            </div>
          )}

          {selectedProject === "gamesView" && (
            <>
              <p
                className={`font-thin text-justify px-8 pb-2 sm:px-36 ${
                  sliderVisible ? "block" : "hidden"
                }`}
              >
                GamesView es una plataforma con un diseño basado en las famosas
                Arcades, donde podes consultar datos de tus juegos favoritos,
                descubrir nuevos, agregar nuevos, aplicar múltiples filtros para
                ordenamiento y búsqueda de acuerdo a tus intereses.
              </p>
              <a
                href="https://github.com/LautaroBarrios/GamesView"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[#FF5C81] hover:underline pb-2 ${
                  sliderVisible ? "block" : "hidden"
                }`}
              >
                Visita el repositorio de GamesView
              </a>
            </>
          )}
          {selectedProject === "codeTutor" && (
            <>
              <p
                className={`font-thin text-justify px-8 pb-2 sm:px-36 ${
                  sliderVisible ? "block" : "hidden"
                }`}
              >
                Code-Tutor es una plataforma en línea orientada a genter de
                Latinoamérica que sirve para conectar usuarios con tutores para
                proyectos de programación de manera independiente. Ofrece una
                serie de herramientas integradas, desde los calendarios y
                control de agenda para el orden del tiempo personal hasta el
                chat para comunicarse directamente con el tutor, pasando por el
                control del tiempo de sesión, recordatorios de tiempo, uso de
                salas en plataformas conocidas y amplia disponibilidad de
                tutores en diferentes zonas horarias. Además, facilitamos la
                contratación de tutores de programación de forma independiente,
                brindando información detallada de los tutores en los perfiles,
                reviews y testimonios de otros usuarios.
              </p>
              <a
                href="https://www.code-tutor.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[#7F56D9] hover:underline pb-2 ${
                  sliderVisible ? "block" : "hidden"
                }`}
              >
                Visita Code-Tutor
              </a>
            </>
          )}

          <div className="border h-12" />
          <button
            onClick={() => {
              setOtherProjects((prevValue) => !prevValue);
              scrollToOtherProjects();
            }}
            title="Ver/Ocultar"
            className="w-24 my-4 px-4 py-2 bg-gray-950 border-2 rounded hover:bg-blue-950 transform hover:scale-110 transition-transform"
          >
            Otros
          </button>
          {otherProjects && (
            <div id="containerOtherProjects" className="space-y-2">
              <h2 className="font-thin text-justify px-8 p-2 sm:px-36 underline text-red-500">
                IMPORTANTE: debido a que los siguientes proyectos manejan
                información delicada y privada no hay links de acceso
                disponibles para el público.
              </h2>
              <p className="font-thin text-justify px-8 p-2 sm:px-36">
                Sistema de gestión de empleados y contratos - Municipalidad de
                la Calera, Córdoba, Argentina (2022).
                <br />
                Desarrollé el backend para la creación, edición y manejo de
                datos de empleados, haciendo uso de estos para generar contratos
                automáticamente de manera óptima,eficaz y rápida. También
                elaboré la base de datos y realice la migración a partir de un
                documento que poseía los datos de los mismos.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;

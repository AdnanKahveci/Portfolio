import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/hatay 210 m²-1.png";
import project2 from "../assets/images/hatay 200 m²-1.png";
import project3 from "../assets/images/hatay 142 m²-1.png";
import project4 from "../assets/images/HATAY 130 m²-1.png";
import project5 from "../assets/images/istanbul 140 m²-1.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from "swiper/modules"
const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Hatay 210 m²p",
      github_link: "https://github.com/Sridhar-C-25",
    },
    {
      img: project2,
      name: "Hatay 200 m²",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
    },
    {
      img: project3,
      name: "Hatay 142 m²",
      github_link: "https://github.com/Sridhar-C-25/highking",
    },
    {
      img: project4,
      name: "Hatay 130 m",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
    },
    {
      img: project5,
      name: "İstanbul 140 m²",
      github_link: "https://www.linkedin.com/feed/update/urn:li:activity:7088482054253740032/",
      
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
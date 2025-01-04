import React from "react";
import { Github, ExternalLink } from "lucide-react";
import foodKing from "../assets/images/FoodKing.png";
import equiSports from "../assets/images/Equi-Sports.png"
import career from "../assets/images/Career-Counseling.png"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "FoodKing ",
      description:
        "FoodKing is a dynamic food ordering and management web application developed using modern technologies. It features a responsive design, robust functionality, and secure user authentication to enhance user experience and streamline order management..",
      tags: ["React", "Foods", "Web Development"],
      links: {
        github: "https://github.com/rehan606/FoodKing",
        demo: "https://foodking-d2588.web.app/",
      },
      image: foodKing,
      featured: true,
    },
    {
      title: "Career Counseling ",
      description:
        "Career Counseling is a responsive web application designed to assist individuals in making informed career decisions. The platform provides valuable insights, tools, and resources for choosing the right career path.",
      tags: ["Career", "Frontend Development", "React", "Web Development", ],
      links: {
        github: "https://github.com/rehan606/Career-Counseling",
        demo: "https://career-counseling-react.netlify.app/",
      },
      image: career,
      featured: true,
    },
    {
      title: "Equi Sports ",
      description:
        "Equi Sports is an online sports equipment store designed to provide a seamless experience for browsing, managing, and purchasing sports gear. Built with a focus on user-friendliness and responsiveness, the platform offers efficient management tools for both users and administrators.",
      tags: [ "Frontend Development", "React", "Web Development", "Sports"],
      links: {
        github: "https://github.com/rehan606/EquiSports",
        demo: "https://equi-sports-3d9f4.web.app/",
      },
      image: equiSports,
      featured: true,
    },
    
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg gap-4"
          >
            {/* Image Section */}
            <div className="md:w-1/2  overflow-hidden rounded-lg ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

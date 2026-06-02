import { Component } from 'solid-js';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

const ProjectCard: Component<ProjectProps> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" class="group cursor-pointer">
      <div class="relative overflow-hidden rounded-2xl">
        <div class="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl font-bold text-transparent group-hover:scale-110 transition-transform duration-300">
          {props.image}
        </div>
        <div class="glass absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 class="text-xl font-bold mb-2">{props.title}</h3>
          <p class="text-gray-300 text-sm mb-4">{props.description}</p>
          <div class="flex flex-wrap gap-2">
            {props.technologies.map(tech => (
              <span class="text-xs px-2 py-1 rounded-full bg-white/20 border border-white/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

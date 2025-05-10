import { FaReact, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500 w-5 h-5" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 w-5 h-5" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 w-5 h-5" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 w-5 h-5" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500 w-5 h-5" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20  px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center ">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center bg-white px-4 py-2 rounded-full shadow-md space-x-2 hover:scale-105 transition transform duration-300"
          >
            {skill.icon}
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

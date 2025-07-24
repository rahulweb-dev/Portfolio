import { FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500 w-6 h-6 animate-spin-slow" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white w-6 h-6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 w-6 h-6" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 w-6 h-6" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-6 h-6" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 w-6 h-6" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-5 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              {skill.icon}
              <span className="mt-3 text-sm font-semibold text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

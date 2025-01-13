import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaFigma, FaGithub, FaGitAlt, FaDatabase } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const iconsStyle = { className: "text-purple-dark text-[44px] md:text-[66px]", size: 44 }

export const mySkills = [{ title: "React", icon: <FaReact {...iconsStyle} /> },
{ title: "Javascript", icon: <FaJs {...iconsStyle} /> },
{ title: "Typescript", icon: <SiTypescript {...iconsStyle} /> },
{ title: "next", icon: <RiNextjsFill {...iconsStyle} /> },
{
    title: "css3", icon: <FaCss3Alt
        {...iconsStyle} />
},
{
    title: "html5", icon: <FaHtml5
        {...iconsStyle} />
},
{ title: "figma", icon: <FaFigma {...iconsStyle} /> },
{ title: "github", icon: <FaGithub {...iconsStyle} /> },
{ title: "git", icon: <FaGitAlt {...iconsStyle} /> },
    // { title: "postgress", icon: <FaDatabase {...iconsStyle} /> },
]

// export const otherSkills = [{
//     title: "React native", icon:
// }]
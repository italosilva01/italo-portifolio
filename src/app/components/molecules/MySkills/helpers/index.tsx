import {
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaReact,
    FaFigma,
    FaGithub,
    FaGitAlt,
    FaBootstrap,
    FaJava,
    FaNodeJs,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTypescript, SiStyledcomponents, SiMui } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';

const iconsStyle = {
    className: 'text-purple-dark text-[44px] md:text-[66px]',
    size: 44,
};

export const mySkills = [
    { title: 'React', icon: <FaReact {...iconsStyle} /> },
    { title: 'Javascript', icon: <FaJs {...iconsStyle} /> },
    { title: 'Typescript', icon: <SiTypescript {...iconsStyle} /> },
    { title: 'next', icon: <RiNextjsFill {...iconsStyle} /> },
    {
        title: 'css3',
        icon: <FaCss3Alt {...iconsStyle} />,
    },
    {
        title: 'html5',
        icon: <FaHtml5 {...iconsStyle} />,
    },
    { title: 'figma', icon: <FaFigma {...iconsStyle} /> },
    { title: 'github', icon: <FaGithub {...iconsStyle} /> },
    { title: 'git', icon: <FaGitAlt {...iconsStyle} /> },
];

export const otherSkills = [
    { title: 'Styled-components', icon: <SiStyledcomponents {...iconsStyle} /> },
    { title: 'Material UI', icon: <SiMui {...iconsStyle} /> },
    { title: 'Bootstrap', icon: <FaBootstrap {...iconsStyle} /> },
    { title: 'GraphQl', icon: <GrGraphQl {...iconsStyle} /> },
    { title: 'Java', icon: <FaJava {...iconsStyle} /> },
    {
        title: 'Node', icon: <FaNodeJs {...iconsStyle} />
    }
];

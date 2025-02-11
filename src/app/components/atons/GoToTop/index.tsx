import { useMobile } from "@/app/hooks/UseMobile";
import Image from "next/image";

const SIZE_ICON_MOBILE = 16;
const SIZE_ICON_DESKTOP = 32;

const GoToTop = () => {
    const isMobileScreen = useMobile();
    const currentSizeIcon = isMobileScreen ? SIZE_ICON_MOBILE : SIZE_ICON_DESKTOP;

    return (
        <div className="flex gap-2" onClick={() => window.scrollTo(0, 0)}>
            <h1 className="text-purple-dark/50 lg:text-xl font-semibold">Voltar ao topo </h1>
            <Image src="/ArrowUp.svg" alt="arrow up" width={currentSizeIcon} height={currentSizeIcon} />
        </div>
    );
};

export default GoToTop;
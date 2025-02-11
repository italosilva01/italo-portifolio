import { useMobile } from "@/app/hooks/UseMobile";
import Image from "next/image";

interface CopyButtonProps {
    onClick?: () => void;
}

const SIZE_ICON_MOBILE = 16;
const SIZE_ICON_DESKTOP = 32;

const CopyButton = ({ onClick }: CopyButtonProps) => {
    const isMobileScreen = useMobile();
    const currentSizeIcon = isMobileScreen ? SIZE_ICON_MOBILE : SIZE_ICON_DESKTOP;

    return (
        <button onClick={onClick}><Image src="/CopySimple.svg" alt="copy" width={currentSizeIcon} height={currentSizeIcon} ></Image></button>
    );
};

export default CopyButton;
import { Button } from "@mui/material";
import Image from "next/image";

const SIZE = 24;
const PADDING = 1;

interface LetsTalkProps { className?: string, sizeIcon?: number }

export const LetsTalk = ({ className, sizeIcon = SIZE }: LetsTalkProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        padding: PADDING,
      }}
      className={`border-purple-dark text-purple-dark md:rounded-xl hover:bg-purple-dark/[0.2] ${className}`}>
      <a
        href={`https://api.whatsapp.com/send?phone=05584987589718`}
        target="_blank"
        className="flex justify-center text-start gap-2 items-center font-relaway"
      >
        <Image src="/whatsappLogo.svg" alt={""} width={sizeIcon} height={sizeIcon} />
        <span className="capitalize">Vamos conversar</span>
      </a>
    </Button >
  );
};

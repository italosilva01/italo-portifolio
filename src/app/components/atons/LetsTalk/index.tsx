import { Button } from "@mui/material";
import Image from "next/image";

const SIZE = 24;
const PADDING = 1;

export const LetsTalk = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        padding: PADDING,
      }}
      className="border-purple-dark/[0.5] text-purple-dark/[0.5] md:rounded-xl"
    >
      <a
        href={`https://api.whatsapp.com/send?phone=05584987589718`}
        target="_blank"
        className="flex justify-center text-start gap-2 items-center"
      >
        <Image src="/whatsappLogo.svg" alt={""} width={SIZE} height={SIZE} />
        <span>Vamos conversar</span>
      </a>
    </Button>
  );
};

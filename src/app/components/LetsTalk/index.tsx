import { Button } from "@mui/material";
import Image from "next/image";

export const LetsTalk = () => {
  return (
    <Button
      variant="outlined"
      className="border-purple-dark/[0.5] text-purple-dark/[0.5] gap-2 md:rounded-xl"
    >
      <a
        href={`https://api.whatsapp.com/send?phone=05584987589718`}
        target="_blank"
      >
        <Image src="/whatsappLogo.svg" alt={""} width={24} height={24} /> Vamos
        conversar
      </a>
    </Button>
  );
};

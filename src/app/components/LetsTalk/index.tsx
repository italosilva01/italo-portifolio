import { Button } from "@mui/material";
import Image from "next/image";

export const LetsTalk = () => {
  return (
    <Button
      variant="outlined"
      className="border-purple-dark/[0.5] text-purple-dark/[0.5] gap-2 md:rounded-xl"
    >
      <Image src="/whatsappLogo.svg" alt={""} width={24} height={24} /> Vamos
      conversar
    </Button>
  );
};

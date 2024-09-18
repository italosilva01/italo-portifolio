import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";

export const DownloadCv = () => {
  return (
    <Link
      href="/Francisco Italo Silva do Nascimento - curriculo.pdf"
      target="_blank"
      download
      className="text-purple-dark/[0.5]"
    >
      Baixar CV <DownloadIcon />
    </Link>
  );
};

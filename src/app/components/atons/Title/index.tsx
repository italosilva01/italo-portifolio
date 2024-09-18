import { Typography } from "@mui/material";

export const Title = () => {
  return (
    <>
      <Typography
        variant="h1"
        className="text-5xl	 font-extrabold text-white text-left"
        sx={{ color: "#fff" }}
      >
        Francisco <br /> Italo
      </Typography>
      <Typography variant="body1" sx={{ color: "rgba(255, 255, 265, 0.5)" }}>
        Desenvolvedor Front-end | Back-end
      </Typography>
    </>
  );
};

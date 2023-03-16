import { FC } from "react";
import { Typography } from "@mui/material";
import { genreText } from "@/constants";

interface Props {
  genre: string;
}

export const GenreText: FC<Props> = ({ genre }) => {
  const genreDescription = genreText.filter((item) => item.name === genre);

  return (
    <Typography color="#b9c4d5" variant="body1" component="p">
      {genreDescription[0].text}
    </Typography>
  );
};

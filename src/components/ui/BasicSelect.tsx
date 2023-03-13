import { FC, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Season } from "@/interfaces";
import { Episode } from "../../interfaces/episodes";

interface Props {
  seasons: Season[];
  episodes: Episode[];
}

export const BasicSelect: FC<Props> = ({ seasons, episodes }) => {
  const [season, setSeason] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(event.target.value as string);
  };
  const episodesBySeason = episodes.filter(
    (episode: Episode) => episode.id === Number(season)
  );

  console.log(episodesBySeason)

  return (
    <Box>
      <Box
        sx={{
          minWidth: 120,
          "& .MuiInputLabel-root": {
            color: "#4f6b95",
          },
        }}
      >
        <FormControl
          sx={{
            width: 190,
            "& .MuiInputBase-root": {
              backgroundColor: "#1e2747",
              color: "#4f6b95",
              borderRadius: 1,
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Temporada</InputLabel>
          <Select
            sx={{
              "& .MuiSelect-icon": {
                color: "#4f6b95",
              },
              "& .MuiSelect-selectMenu": {
                color: "#4f6b95",
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={season}
            label="Age"
            onChange={handleChange}
          >
            {seasons.map((season) => (
              <MenuItem key={season.id} value={season.id}>
                {season.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        {episodesBySeason.map((episode:Episode) => (
          <Box key={episode.id}>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

import { FC } from "react";
import { FormControl,MenuItem,InputLabel,Box,Select} from "@mui/material";
import { Season } from "@/interfaces";
import { useSelect } from "@/hooks";

interface Props {
  seasons: Season[];
}

export const BasicSelect: FC<Props> = ({ seasons }) => {

  const { handleChange,seasonSelect } = useSelect(); 

  return (
    <Box>
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
              value={seasonSelect}
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
      </Box>
    </Box>
  );
};

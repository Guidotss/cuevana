import { useContext, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { UiContext } from "@/context";

export const useSelect = () => {
  
  const [ seasonSelect, setSeasonSelect ] = useState("Especiales");
  const { setSeason } = useContext(UiContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSeasonSelect(event.target.value as string);
    setSeason(seasonSelect);

  };

  return {
    seasonSelect,

    handleChange,
  };
};

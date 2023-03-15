import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export const useSelect = () => {
    const [season, setSeason] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setSeason(event.target.value as string);
    };



    return{
        season,

        handleChange
    }
}
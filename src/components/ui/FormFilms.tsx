import { IconButton, Input, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useForm } from "@/hooks";

export const FormFilms = () => {
  const { input, onSubmit, handleChange } = useForm();

  return (
    <Input
      type="text"
      placeholder="Buscar peliculas y series..."
      disableUnderline
      value={input}
      onChange={handleChange}
      onKeyDown={(e) => e.key === "Enter" && onSubmit()}
      sx={{
        backgroundColor: "#1e2747",
        width: 600,
        mt: 2,
        borderRadius: 10,
        height: 60,
        "& .MuiInputBase-input": {
          color: "#8da0bc",
          padding: 3,
          fontSize: 18,
          fontWeight: 300,
          "&::placeholder": {
            color: "white",
            fontSize: 18,
            padding: 2,
          },
        },
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={onSubmit}
            sx={{
              backgroundColor: "#0f1323",
              mr: 0.5,
              "&:hover": {
                backgroundColor: "#0f1323",
              },
            }}
          >
            <SearchOutlined
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

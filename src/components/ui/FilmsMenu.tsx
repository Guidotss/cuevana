import { FC } from "react";
import NextLink from "next/link";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { CategoryRounded } from "@mui/icons-material";

interface Props {
  isOpen: boolean;
}

const filmsCatergories = ['Últimas publicadas', 'Estrenos', 'Tendencias semanal', 'Tendencias diaria'];


export const FilmsMenu: FC<Props> = ({ isOpen }) => {
  return (
    <Box sx={{mt:'-35px'}}>
      {isOpen && (
        <Box
          className="bounce-in"
          sx={{
            backgroundColor: "#1e2747",
            position: "absolute",
            mt: 4,
            borderRadius: 1,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "inherit",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          }}
        >
          <List>
            {filmsCatergories.map((category, index) => (
              <ListItem 
                key={index}
                sx={{
                  borderRadius:1,
                  '&:hover':{
                    backgroundColor: "#080f28",
                  }
                }}
              >
                <NextLink 
                  href={`/peliculas/${category === 'Tendencias semanal' ? '/tendencias/semanal' : category === 'Tendencias diaria' ? '/tendendias/diaria' : category=== 'Últimas publicadas' ? '/' : category.toLowerCase()}`} 
                  passHref legacyBehavior>
                  <Link
                    sx={{
                      '&:hover':{
                        color:'#007aff'
                      }
                    }}
                  >
                    <Typography 
                      variant="body2"
                      component="p"
                      fontWeight={300}
                    >
                      { category }
                    </Typography>
                  </Link>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

import NextLink from "next/link";
import Image from "next/image";

import { Box, Link, Typography } from "@mui/material";
import { FilmsLayout } from "@/components/layouts";
import { HomeDataCard, InfoCard, FormFilms } from "@/components/ui";
import { infoCardText } from "@/constants";

const WelcomePage = () => {
  return (
    <FilmsLayout title="Welcome - Guivana" pageDescription="Welcome - Guivana">
      <Box sx={{ mt: 10 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src="/letter.webp" alt="logo" width={70} height={70} />
          <Typography
            variant="h1"
            component="h1"
            fontWeight={600}
            sx={{ color: "white", ml: 1 }}
            fontSize={80}
          >
            Guivana
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            fontWeight={600}
            sx={{ color: "#007aff", ml: 1 }}
          >
            3
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <FormFilms />
          <NextLink href="/inicio" passHref legacyBehavior>
            <Link
              type="button"
              sx={{
                backgroundColor: "#007aff",
                borderRadius: 10,
                mt: 5,
                height: 60,
                width: 220,
                textAlign: "center",

                "&:hover": {
                  backgroundColor: "#007aff",
                },
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                fontWeight={600}
                fontSize={18}
                color="white"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2.5,
                }}
              >
                Entrar en Guivana
              </Typography>
            </Link>
          </NextLink>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mt: 7 }}>
          <HomeDataCard />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            component="h4"
            fontSize={40}
            fontWeight={600}
            color="#8da0bc"
            sx={{ mt: 5 }}
          >
            Preguntas frecuentes
          </Typography>
          {infoCardText.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
        <Box textAlign="center" sx={{ mt: 9 }}>
          <NextLink
            href="https://es.wikipedia.org/wiki/Cuevana"
            passHref
            legacyBehavior
          >
            <Link
              sx={{
                "&:hover": {
                  color: "#007aff",
                },
              }}
            >
              <Typography variant="body1" component="p">
                Más sobre nosotros
              </Typography>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ padding: "0px 230px", mt: 4 }}>
          <Typography
            variant="h4"
            component="h4"
            fontWeight={600}
            color="white"
          >
            Tutoriales destacados
          </Typography>
        </Box>
      </Box>
    </FilmsLayout>
  );
};

export default WelcomePage;

import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

export const HomeDataCard = () => {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#1e2747",
          width: 600,
          justifyContent: "center",
          borderRadius: 4,
          padding: 2,
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h1"
              component="h1"
              fontWeight={600}
              sx={{ color: "white", mb: "-20px" }}
              fontSize={35}
            >
              Todas las películas de Guivana 3 Online Gratis
            </Typography>
          }
        />
        <CardContent>
          <Typography color="#b3d1ff">
            <strong>Guivana 3 </strong> es la plataforma de streaming gratuito
            por excelencia. Dentro de sus pantallas, puedes ver un sinfín de
            películas y/o series interesantes, atrapantes y que seguramente te
            sacudirán el aburrimiento en pocos minutos. La página no solo puede
            ser tu plan ideal para pasar el fin de semana o las noches junto a
            tus amigos, familiares o pareja. Sin que también es tu aliado ideal
            para esos momentos en los que te encuentres solo y no sepas que más
            hacer en tus tiempos libres. PELÍCULAS Y SERIES ONLINE:
          </Typography>
          <Typography
            color="white"
            variant="subtitle1"
            component="p"
            fontWeight={600}
            sx={{ mt: 2 }}
          >
            PELÍCULAS Y SERIES ONLINE: NAVEGA SIN DIFICULTAD
          </Typography>
          <Typography color="#b3d1ff">
            Aquí en Guivana3 se ofrece un diseño óptimo y amigable con el
            usuario. En su interfaz, todos los visitantes pueden ubicar el
            material que desean ver fácilmente y eso se debe a su diseño en
            cuadriculas, que organiza todo el contenido por categorías, nombres,
            fechas de estreno, entre otros. Hace poco tiempo la plataforma tuvo
            que renovar su diseño para poder entregarle a sus usuarios toda una
            experiencia 20/20 haciendo así que su sistema de navegación sea
            todavía más sencilla de utilizar. En ese sentido, aun tus abuelos de
            50 años en adelante pueden aprender a utilizar la plataforma sin
            ningún tipo de inconvenientes.
          </Typography>
          <Typography
            color="white"
            variant="subtitle2"
            component="p"
            sx={{ mt: 2 }}
          >
            ¡MIRA TODO LO QUE QUIERAS SIN LIMITE DE TIEMPO!
          </Typography>
          <Typography color="#b3d1ff">
            <strong>Este sitio es completamente gratuito</strong> aunque no
            cuenta con los derechos de estos titulos, tampoco aloja material en
            sus servidores, solo compartimos información y enlaces que se alojan
            en otros servidores externos a nosotros. A parte, su publicidad no
            es nada invasiva ya que solo salta al inicio de una reproducción o
            cuando deseas abrir una nueva pestaña. Igualmente dicha publicidad
            puede ser obviada fácilmente, simplemente cerrando la ventana
            emergente en el icono de la “X” o con ayuda de alguna extensión para
            bloquear anuncios.
          </Typography>
          <Typography
            color="white"
            variant="subtitle2"
            component="p"
            sx={{ mt: 2 }}
            fontWeight={400}
          >
            CONTENIDO NUEVO CADA DÍA, ACTUALIZAMOS CONSTANTEMENTE
          </Typography>
          <Typography color="#b3d1ff">
            Muy pocas plataformas ofrecen{" "}
            <strong>contenido de calidad HD4K</strong> aquí en lo hacemos
            posible.
          </Typography>
          <Typography color="#b3d1ff" sx={{ mt: 3 }}>
            Mira todos los estrenos exclusivos que por meses estuviste esperando
            sin pagar nada gracias al equipo de <strong>Guivana.arg</strong>,
            quienes trabajan sin descansar las 24 horas del día para poder subir
            todo el material de estreno antes de que aparezca en otro lado.
            ¡Deja de perder el tiempo con plataformas que te prometen estar
            actualizadas siempre, pero solo te dejan esperando por alguna
            producción!
          </Typography>
          <Typography
            color="white"
            variant="subtitle2"
            component="p"
            sx={{ mt: 2 }}
            fontWeight={400}
          >
            COMO CUEVANA3 NO EXISTEN 2
          </Typography>
          <Typography color="#b3d1ff">
            Sabemos que la competencia que tiene este sitio es bastante grande,
            muchos “imitadores” solo buscan hacer dinero sin ofrecerle al
            usuario todo lo que necesita de una web de streaming. Algunas
            plataformas aseguran ser las NÚMERO#1 dentro del mercado de{" "}
            <strong> series y películas gratuitas</strong>, pero solo entregan
            enlaces rotos, virus con sus anuncios y un sinfín de inconvenientes
            más que solo causan dolores de cabeza. Por todas las razones
            anteriores, deberías única y exclusivamente mirar tus series y
            películas dentro de nuestra plataforma, que no solo no te cobra por
            estreno exclusivo, sino que también te brinda la mejor atención como
            usuario, comunidad y amigo. ¡Decídete ya y solo busca tus estrenos
            en Guivana.arg!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

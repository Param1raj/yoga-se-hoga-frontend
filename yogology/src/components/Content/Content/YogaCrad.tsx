import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import meditation from "../images/meditation.avif";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/navigation";
export default function MediaCard({
  title,
  uuid,
}: {
  title: string;
  description: string;
  uuid: string;
}) {
  const { push } = useRouter();
  const [index, setIndex] = React.useState(0);
  return (
    <Card
      sx={{
        maxWidth: 460,
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => {
        // after solutions you should provide uuid of the video.
        push(`/content/solutions/${uuid}`);
      }}
    >
      <CardMedia
        sx={{ height: 155 }}
        image={meditation.src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          //   fontSize={{ md: "0.7rem", lg: "0.9rem", xl: "0.8rem" }}
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" startIcon={<PlayArrowIcon />}>
          Play
        </Button>
      </CardActions>
    </Card>
  );
}

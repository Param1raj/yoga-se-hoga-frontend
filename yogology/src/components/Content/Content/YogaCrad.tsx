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
import LockIcon from "@mui/icons-material/Lock";
import SubscriptionModal from "./modal/SubscriptionModal";
export default function MediaCard({
  title,
  uuid,
  paid,
  description,
  image,
  setOpen,
}: {
  title: string;
  description: string;
  uuid: string;
  paid: boolean;
  image: string;
  setOpen: () => void;
}) {
  // const [open, setOpen] = React.useState(false);
  const { push } = useRouter();
  // const [index, setIndex] = React.useState(0);
  const handleClose = () => {
    console.log("function is called !");
    // setOpen(false);
  };
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
        if (paid) {
          setOpen();
        } else {
          push(`/content/solutions/${uuid}`);
        }
      }}
    >
      {/* {open && <SubscriptionModal open={open} onClose={handleClose} />} */}
      <CardMedia sx={{ height: 155 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          //   fontSize={{ md: "0.7rem", lg: "0.9rem", xl: "0.8rem" }}
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          startIcon={paid ? <LockIcon /> : <PlayArrowIcon />}
        >
          Play
        </Button>
      </CardActions>
    </Card>
  );
}

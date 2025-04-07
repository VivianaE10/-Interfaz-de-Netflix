import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";

export default function ImgMediaCard(props) {
  return (
    <>
      <Stack>
        <Stack>
          <Card sx={{ marginRight: "0.2rem", width: 240, height: 140 }}>
            <CardMedia
              component="img"
              alt=""
              height="100%"
              width="auto"
              image={props.image}
            />
          </Card>
        </Stack>
      </Stack>
    </>
  );
}

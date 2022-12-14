import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

type compProps = {
  id: number;
  title: string;
  audio_file: string;
  track_length: number;
  writer: string;
};

export default function TrackCard({
  id,
  title,
  audio_file,
  track_length,
  writer,
}: compProps) {
  const theme = useTheme();
  return (
    <div>
      <ListItem button>
        <Card sx={{ display: "flex", width: "75%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </ListItem>
      <Divider />
    </div>
  );
}

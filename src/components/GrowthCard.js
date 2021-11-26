import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const showDate = (item) => {
  let startDate = item.search_msv[0].date;
  startDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  let endDate = item.search_msv[item.search_msv.length - 1].date;
  endDate = new Date(endDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return `${startDate} - ${endDate}`;
};
const showName = (name, phrase) => {
  let index = name.indexOf(phrase);
  if (index !== -1) {
    let arr = name.split(phrase);
    return (
      <>
        <Typography variant="h5"  component="span">
          {arr[0]}
        </Typography>
        <Typography variant="h5" fontWeight={700} component="span">
          {phrase}
        </Typography>
        <Typography variant="h5" component="span">
          {arr[1]}
        </Typography>
      </>
    );
  }
  return (
    <Typography variant="h5" color="textSecondary" component="span">
      {name}
    </Typography>
  );
};

const GrowthCard = ({ data, phrase }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <CardContent>
          {showName(data.name, phrase)}
          <Typography variant="subtitle1" color="textSecondary">
            Growth {data.growth}%
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            padding: "0",
          }}
        >
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart
              data={data.search_msv}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Area
                trendline="linear"
                type="fitting"
                dataKey="sv"
                stroke={data.growth > 80 ? "#4caf50" : "#03a9f4"}
                fill={data.growth > 80 ? "#4caf50" : "#03a9f4"}
                strokeWidth="2"
                fillOpacity=".5"
              />
            </AreaChart>
          </ResponsiveContainer>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            padding="10px 0"
          >
            {showDate(data)}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GrowthCard;

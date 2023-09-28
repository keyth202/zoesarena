import { Card } from "@mui/material";
import { H5 } from "components/Typography";
import VectorMap from "./VectorMap";

const SalesByCountry = () => {
  return <Card sx={{
    padding: 3
  }}>
      <H5>Sales By Country</H5>
      <VectorMap />
    </Card>;
};

export default SalesByCountry;
import { Box, Button, Card, Divider } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H3, H5 } from "components/Typography"; // component props interface

const OrderSummery2 = ({
  btnText
}) => {
  return <Card>
      <H3 paddingX={3} paddingY={2}>
        Order Summery
      </H3>

      <Box paddingX={3}>
        <FlexBetween my={2.5}>
          <H5>Subtotal</H5>
          <H5>$215</H5>
        </FlexBetween>

        <FlexBetween my={2.5}>
          <H5>Discount</H5>
          <H5>15%</H5>
        </FlexBetween>

        <FlexBetween my={2.5}>
          <H5>Shipping Cost</H5>
          <H5>$50</H5>
        </FlexBetween>
      </Box>

      <Divider />

      <Box paddingX={3}>
        <FlexBetween my={2}>
          <H3>Total</H3>
          <H3 color="primary.main">$285</H3>
        </FlexBetween>

        <Button variant="contained" fullWidth>
          {btnText || "Proceed to payment"}
        </Button>
      </Box>

      <Box sx={{
      textAlign: "center",
      marginTop: 5,
      padding: 0
    }}>
        <img src="/static/illustration/cart-page.svg" alt="" />
      </Box>
    </Card>;
};

export default OrderSummery2;
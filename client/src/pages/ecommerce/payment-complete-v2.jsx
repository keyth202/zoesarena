import { Box, Button, Card } from "@mui/material";
import getLayout from "components/getLayout";
import { H2, Small } from "components/Typography";
import OvalCheckedIcon from "icons/OvalCheckedIcon";

const PaymentSuccess = () => {
  return <Card sx={{
    paddingY: 8,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Box sx={{
      maxWidth: 400,
      textAlign: "center"
    }}>
        <OvalCheckedIcon sx={{
        fontSize: 100,
        marginBottom: 2,
        color: "primary.main"
      }} />
        <H2>Success</H2>
        <Small marginTop={1} display="block" marginBottom={5} color="text.disabled">
          thank you for shopping using Uko
        </Small>
        <Button variant="contained" fullWidth>
          Back to order
        </Button>
      </Box>
    </Card>;
}; // ==============================================================


PaymentSuccess.getLayout = getLayout; // ==============================================================

export default PaymentSuccess;
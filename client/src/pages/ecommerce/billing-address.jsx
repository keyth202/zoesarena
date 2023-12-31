import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Grid, RadioGroup, Stack, styled, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import AppCheckBox from "components/AppCheckBox";
import AppModal from "components/AppModal";
import AppRadio from "components/AppRadio";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import getLayout from "components/getLayout";
import AppTextField from "components/input-fields/AppTextField";
import { H5, Small } from "components/Typography";
import Add from "icons/Add";
import ChevronLeft from "icons/ChevronLeft";
import Shopping from "icons/Shopping";
import BillingAddressCard from "page-sections/ecommerce/BillingAddressCard";
import Heading from "page-sections/ecommerce/Heading";
import OrderSummery from "page-sections/ecommerce/OrderSummery";
import Stepper from "page-sections/ecommerce/Stepper"; //  styled components

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": {
    fontSize: 12,
    fontWeight: 600
  }
}));

const BillingAddress = () => {
  const {
    push
  } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("home");

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading title="Checkout" Icon={Shopping} />
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={1} />
          </Box>
        </Grid>

        <Grid item md={8} xs={12}>
          <FlexBetween flexWrap="wrap" gap={1.5} mb={3}>
            <H5>Billing & address</H5>
            <Button variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)}>
              Add New Address
            </Button>
          </FlexBetween>

          <AppModal open={openModal} handleClose={() => setOpenModal(false)}>
            <H5>Add new address</H5>

            <Box py={2}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <RadioGroup row value={selectedValue} onChange={handleChange}>
                    <StyledFormControlLabel value="home" control={<AppRadio />} label="Home" />
                    <StyledFormControlLabel value="office" control={<AppRadio />} label="Office" />
                  </RadioGroup>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Full Name" />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Phone" />
                </Grid>

                <Grid item xs={12}>
                  <AppTextField fullWidth size="small" label="Address" />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="City" />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Country" />
                </Grid>

                <Grid item xs={12}>
                  <FlexBox alignItems="center" gap={1}>
                    <AppCheckBox />
                    <Small fontSize={12}>Use this address as default</Small>
                  </FlexBox>
                </Grid>
              </Grid>
            </Box>

            <FlexBox alignItems="center" justifyContent="end" gap={1} mt={1}>
              <Button variant="GreyOutlined" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button variant="contained">Deliver to this address</Button>
            </FlexBox>
          </AppModal>

          <Stack gap={2}>
            <BillingAddressCard selected />
            <BillingAddressCard />
            <BillingAddressCard />
          </Stack>

          <Box mt={2}>
            <Button disableRipple startIcon={<ChevronLeft />} onClick={() => push("/ecommerce/checkout")}>
              Back
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <OrderSummery buttonText="Payment" handleClick={() => push("/ecommerce/payment")} />
        </Grid>
      </Grid>
    </Box>;
}; // ==============================================================


BillingAddress.getLayout = getLayout; // ==============================================================

export default BillingAddress;
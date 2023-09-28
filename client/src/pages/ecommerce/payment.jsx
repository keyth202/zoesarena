import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Card, Divider, Grid, IconButton } from "@mui/material";
import AppRadio from "components/AppRadio";
import getLayout from "components/getLayout";
import FlexBox from "components/flexbox/FlexBox";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, H6, Span, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import Edit from "icons/Edit";
import Shopping from "icons/Shopping";
import ChevronLeft from "icons/ChevronLeft";
import Heading from "page-sections/ecommerce/Heading";
import Stepper from "page-sections/ecommerce/Stepper";
import OrderSummery from "page-sections/ecommerce/OrderSummery";

const Payment = () => {
  const {
    push
  } = useRouter();
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("paypal");

  const handleChangePaymentMethod = event => {
    setSelectPaymentMethod(event.target.value);
  };

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading title="Checkout" Icon={Shopping} />
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={2} />
          </Box>
        </Grid>

        <Grid item md={8} xs={12}>
          <Card sx={{
          padding: 3
        }}>
            <H5 mb={3}>Payment Method</H5>

            <FlexBox alignItems="center">
              <AppRadio value="paypal" onChange={handleChangePaymentMethod} checked={selectPaymentMethod === "paypal"} sx={{
              paddingLeft: 0
            }} />
              <img src="/static/payment/paypal-text.svg" alt="Paypal" />
            </FlexBox>

            <Divider sx={{
            my: 2
          }} />

            <FlexBox alignItems="center">
              <AppRadio value="card" sx={{
              paddingLeft: 0
            }} onChange={handleChangePaymentMethod} checked={selectPaymentMethod === "card"} />

              <FlexBetween flexGrow={1}>
                <H6 fontSize={12}>Credit or debit card</H6>
                <FlexBox gap={1}>
                  <img src="/static/payment/Visa.svg" alt="Paypal" />
                  <img src="/static/payment/MasterCard.svg" alt="Paypal" />
                  <img src="/static/payment/AmericanExpress.svg" alt="Paypal" />
                </FlexBox>
              </FlexBetween>
            </FlexBox>

            <Box mt={2} mb={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <AppTextField label="Card Number" fullWidth />
                </Grid>

                <Grid item md={6} xs={12}>
                  <AppTextField label="Exp Date" fullWidth />
                </Grid>

                <Grid item md={6} xs={12}>
                  <AppTextField label="CVC" fullWidth />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{
            my: 2
          }} />

            <FlexBox alignItems="center">
              <AppRadio value="cash" sx={{
              paddingLeft: 0
            }} onChange={handleChangePaymentMethod} checked={selectPaymentMethod === "cash"} />
              <H6 fontSize={12}>Cash on Delivery</H6>
            </FlexBox>
          </Card>

          <Box mt={2}>
            <Button disableRipple startIcon={<ChevronLeft />} onClick={() => push("/dashboards/billing-address")}>
              Back
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card sx={{
          padding: 3,
          mb: 3
        }}>
            <FlexBetween mb={1.5}>
              <H5>Billing Address</H5>

              <IconButton>
                <Edit sx={{
                fontSize: 16,
                color: "text.disabled"
              }} />
              </IconButton>
            </FlexBetween>

            <H6 mb={0.5}>
              Office UI lib{" "}
              <Span fontWeight={500} color="text.disabled">
                (Home)
              </Span>
            </H6>
            <Tiny lineHeight={1.8}>
              Ap #285-7193 Ullamcorper Avenue <br /> Amesbury HI 93373 <br /> US
            </Tiny>
          </Card>

          <OrderSummery showEditBtn buttonText="Place Order" handleClick={() => push("/dashboards/payment-complete")} />
        </Grid>
      </Grid>
    </Box>;
}; // ==============================================================


Payment.getLayout = getLayout; // ==============================================================

export default Payment;
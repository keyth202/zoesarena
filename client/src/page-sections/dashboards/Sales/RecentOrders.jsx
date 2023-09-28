import { Box, Card } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small } from "components/Typography";
import Link from "next/link";

const RecentOrders = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBox justifyContent="space-between" pb={2}>
        <H5>Recent Orders</H5>

        <Link href="#">
          <Small color="primary.main">View all</Small>
        </Link>
      </FlexBox>

      {orderList.map((item, index) => <FlexBox key={index} justifyContent="space-between" mt={3}>
          <FlexBox alignItems="center" gap={1}>
            <AppAvatar src={item.image} alt={item.name} sx={{
          borderRadius: "15%"
        }} />

            <Box>
              <H6>{item.name}</H6>
              <Small color="text.disabled">10 min ago</Small>
            </Box>
          </FlexBox>

          <H6 fontWeight={600}>${item.price}</H6>
        </FlexBox>)}
    </Card>;
};

const orderList = [{
  name: "Nike Air max 170",
  image: "/static/products/shoe-1.png",
  price: 654
}, {
  name: "Cactus Plant",
  image: "/static/products/bonsai.png",
  price: 654
}, {
  name: "Minimal Pot",
  image: "/static/products/airbud.png",
  price: 654
}, {
  name: "Adidas Blaze",
  image: "/static/products/shoe-2.png",
  price: 654
}];
export default RecentOrders;
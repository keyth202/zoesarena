import { alpha, Box, Card, styled } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H3, H5 } from "components/Typography";
const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: "2rem 1.5rem",
  display: "flex",
  alignItems: "center",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiBox-root": {
      marginRight: 0,
      textAlign: "center"
    }
  }
}));

const SaaSCard = ({
  card
}) => {
  const {
    Icon,
    title,
    color,
    price
  } = card;
  return <StyledCard>
      <FlexRowAlign sx={{
      width: 60,
      height: 60,
      marginRight: 2,
      borderRadius: "50%",
      backgroundColor: alpha(color, 0.2)
    }}>
        <Icon sx={{
        color
      }} />
      </FlexRowAlign>

      <Box mt={{
      xs: "1rem",
      sm: 0
    }}>
        <H5 color="text.secondary">{title}</H5>
        <H3>${price}</H3>
      </Box>
    </StyledCard>;
};

export default SaaSCard;
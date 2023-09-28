import { useState } from "react";
import { Button, Grid, Tab, Box, styled } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { H5 } from "components/Typography";
import getLayout from "components/getLayout";
import FlexBox from "components/flexbox/FlexBox";
import IconWrapper from "components/IconWrapper";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import Add from "icons/Add";
import ShoppingBasket from "icons/ShoppingBasket";
import GridProductCard from "page-sections/admin-ecommerce/product-list/grid-view/GridProductCard";
import SearchArea from "page-sections/admin-ecommerce/product-list/search-area";
import GRID_PRODUCTS from "__fakeData__/admin/grid_products"; //  styled components

const HeadingWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 8,
  flexWrap: "wrap",
  [theme.breakpoints.down(453)]: {
    "& .MuiButton-root": {
      order: 2
    },
    "& .MuiTabs-root": {
      order: 3,
      width: "100%",
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-between"
      }
    }
  }
}));

const ProductGrid = () => {
  const [selectTab, setSelectTab] = useState("1");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = value => setSearchValue(value);

  const handleChangeTab = (_, newTab) => setSelectTab(newTab);

  const FILTER_PRODUCTS = GRID_PRODUCTS.filter(item => item.name.includes(searchValue));
  return <Box pt={2} pb={4}>
      <TabContext value={selectTab}>
        <HeadingWrapper>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket sx={{
              color: "primary.main"
            }} />
            </IconWrapper>
            <H5>Products</H5>
          </FlexBox>

          <TabList onChange={handleChangeTab}>
            <Tab disableRipple label="Active" value="1" />
            <Tab disableRipple label="Draft" value="2" />
            <Tab disableRipple label="Assembly" value="3" />
          </TabList>

          <Button variant="contained" startIcon={<Add />}>
            Add Product
          </Button>
        </HeadingWrapper>

        <SearchArea value={searchValue} onChange={handleSearch} gridRoute="/dashboards/product-grid" listRoute="/dashboards/product-list" />

        <Grid container spacing={3}>
          {FILTER_PRODUCTS.map(item => <Grid item md={3} sm={6} xs={12} key={item.id}>
              <GridProductCard item={item} />
            </Grid>)}

          <Grid item xs={12}>
            <FlexRowAlign mt={2}>
              <Button variant="white">Load More Products</Button>
            </FlexRowAlign>
          </Grid>
        </Grid>
      </TabContext>
    </Box>;
}; // ==============================================================


ProductGrid.getLayout = getLayout; // ==============================================================

export default ProductGrid;
import { TabContext, TabList } from "@mui/lab";
import { Button, styled, Tab, Box } from "@mui/material";
import { H5 } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import IconWrapper from "components/IconWrapper";
import Add from "icons/Add";
import GroupSenior from "icons/GroupSenior"; // styled components

const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between"
}));
const TabListWrapper = styled(TabList)(({
  theme
}) => ({
  [theme.breakpoints.down(727)]: {
    order: 3
  }
})); // =======================================================================

// =======================================================================
const HeadingArea = ({
  value,
  changeTab
}) => {
  return <Wrapper gap={1}>
      <FlexBox alignItems="center">
        <IconWrapper>
          <GroupSenior sx={{
          color: "primary.main"
        }} />
        </IconWrapper>
        <H5>Users</H5>
      </FlexBox>

      <TabContext value={value}>
        <TabListWrapper variant="scrollable" onChange={changeTab}>
          <Tab disableRipple label="All Users" value="" />
          <Tab disableRipple label="Editor" value="editor" />
          <Tab disableRipple label="Contributor" value="contributor" />
          <Tab disableRipple label="Administrator" value="administrator" />
          <Tab disableRipple label="Subscriber" value="subscriber" />
        </TabListWrapper>
      </TabContext>

      <Button variant="contained" startIcon={<Add />}>
        Add New User
      </Button>
    </Wrapper>;
};

export default HeadingArea;
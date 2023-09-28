import { Box } from "@mui/material";
import getLayout from "components/getLayout";
import { useRouter } from "next/router";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import UserListColumnShape from "page-sections/user-list/columnShape";
import { userListFakeData } from "page-sections/user-list/fakeData";
import ListHeader from "page-sections/user-list/ListHeader";
import { useEffect, useState } from "react";
import { searchByName } from "utils/utils";

const UserList = () => {
  const {
    push
  } = useRouter();

  const handleAddUser = () => push("/user-list/add-new-user");

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(userListFakeData);
  useEffect(() => {
    const result = searchByName(userListFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <ListHeader setSearchValue={setSearchValue} handleClick={handleAddUser} />

      <CustomTable columnShape={UserListColumnShape} data={filteredItem} />
    </Box>;
}; // ==============================================================


UserList.getLayout = getLayout; // ==============================================================

export default UserList;
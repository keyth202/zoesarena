import { Box } from "@mui/system";
import getLayout from "components/getLayout";
import { useRouter } from "next/router";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import InvoiceColumnShape from "page-sections/invoice/columnShape";
import { invoiceFakeData } from "page-sections/invoice/fakeData";
import ListHeader from "page-sections/user-list/ListHeader";
import { useEffect, useState } from "react";
import { searchByName } from "utils/utils";

const InvoiceListV2 = () => {
  const {
    push
  } = useRouter(); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(invoiceFakeData);

  const handleRowClick = rowData => () => {
    push("/dashboards/invoice-details-v2", undefined);
  };

  useEffect(() => {
    const result = searchByName(invoiceFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <ListHeader buttonText="Add New" setSearchValue={setSearchValue} handleClick={() => push("/invoice/create-invoice")} />

      <Box mt={2}>
        <CustomTable showFooter hidePagination data={filteredItem} rowClick={handleRowClick} columnShape={InvoiceColumnShape} />
      </Box>
    </Box>;
}; // ==============================================================


InvoiceListV2.getLayout = getLayout; // ==============================================================

export default InvoiceListV2;
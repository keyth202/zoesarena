import { Box } from "@mui/material";
import getLayout from "components/getLayout";
import Todo from "page-sections/todo-list/Todo";

const TodoList = () => {
  return <Box pt={2} pb={4}>
      <Todo />
    </Box>;
}; // ==============================================================


TodoList.getLayout = getLayout; // ==============================================================

export default TodoList;
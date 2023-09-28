import { format } from "date-fns";
import uniqueId from "utils/generateId";
import Mock from "./mock";
export const tableData1 = [{
  id: uniqueId(),
  avatar: "/static/avatar/001-man.svg",
  name: "Zachary Gomez",
  username: "zachary-gomez",
  email: "zachary-gomez@gmail.com",
  role: "Editor"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/002-girl.svg",
  name: "Amanda Montgomery",
  username: "amanda-montgomery",
  email: "montgomery@ya.com",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/003-boy.svg",
  name: "Lester Holland",
  username: "lester-holland",
  email: "lester75@gmail.com",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/004-woman.svg",
  name: "Max Allison",
  username: "max-allison",
  email: "max-allison@pochta.io",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/005-man-1.svg",
  name: "Richard Gregory",
  username: "r.gregory",
  email: "gregory@gmail.com",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/006-woman-1.svg",
  name: "Clifford Caldwell",
  username: "clifford-caldwell",
  email: "clifford-c@gmail.com",
  role: "Author"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/007-boy-1.svg",
  name: "Lester Holland",
  username: "zlester-holland",
  email: "lester75@gmail.com",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/008-clown.svg",
  name: "Richard Gregory",
  username: "r.gregory",
  email: "gregory@gmail.com",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/009-firefighter.svg",
  name: "Max Allison",
  username: "max-allison",
  email: "max-allison@pochta.io",
  role: "Subscriber"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/010-girl-1.svg",
  name: "Zachary Gomez",
  username: "zachary-gomez",
  email: "zachary-gomez@gmail.com",
  role: "Editor"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/011-man-2.svg",
  name: "Zachary Gomez",
  username: "zachary-gomez",
  email: "zachary-gomez@gmail.com",
  role: "Editor"
}, {
  id: uniqueId(),
  avatar: "/static/avatar/012-woman-2.svg",
  name: "Zachary Gomez",
  username: "zachary-gomez",
  email: "zachary-gomez@gmail.com",
  role: "Editor"
}];
Mock.onGet("/api/tableData1/all").reply(config => {
  return [200, tableData1];
});
Mock.onPost("/api/tableData1/new").reply(config => {
  const {
    name,
    username,
    email,
    role
  } = JSON.parse(config.data);
  const newData = {
    role,
    name,
    email,
    username,
    id: uniqueId(),
    avatar: "/static/avatar/012-woman-2.svg"
  };
  tableData1.push(newData);
  return [200, tableData1];
});
Mock.onPost("/api/tableData1/delete").reply(config => {
  const {
    ids
  } = JSON.parse(config.data);
  const filterTable = tableData1.filter((data, index) => data.id !== ids[index]);
  return [200, filterTable];
}); // ============================================================

export const tableData2 = [{
  id: "f924-5485-0ba4-ed89",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/001-man.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "9d46-204b-5e4b-a2e3",
  name: "Lily Callins",
  position: "Editor",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/002-girl.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "9e16-4811-68ff-788c",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/003-boy.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "7299-83c4-9618-a842",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/004-woman.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "7f36-7c82-cbf3-0704",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/005-man-1.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "1713-b224-dd5b-05e7",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/001-man.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "1ad7-6e33-03a6-df38",
  name: "Lily Callins",
  position: "Editor",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/002-girl.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "5393-5d3e-9e56-1fcf",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/003-boy.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "1248-8994-cac3-79fc",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/004-woman.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "46dc-4228-44f1-744d",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/005-man-1.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "5143-18a8-53e9-cf25",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/001-man.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "4a7a-341d-a097-7a0e",
  name: "Lily Callins",
  position: "Editor",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/002-girl.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "bf35-b558-ab4a-0163",
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/003-boy.svg",
  dateOfBirth: "Dec 02, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "e3a9-43b9-cd2d-0006",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/004-woman.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: "ee47-dd88-4b99-4eab",
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/005-man-1.svg",
  dateOfBirth: "Nov 05, 2021",
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}];
Mock.onGet("/api/tableData2/all").reply(() => {
  return [200, tableData2];
});
Mock.onPost("/api/tableData2/new").reply(config => {
  const {
    name,
    username,
    email,
    position,
    team,
    experience,
    dateOfBirth,
    address,
    status
  } = JSON.parse(config.data);
  const newObj = {
    name,
    email,
    username,
    position,
    team,
    experience,
    address,
    status,
    id: uniqueId(),
    avatar: "/static/avatar/012-woman-2.svg",
    dateOfBirth: format(new Date(dateOfBirth), "MMM dd, yyyy")
  };
  tableData2.push(newObj);
  return [200, tableData2];
});
Mock.onPost("/api/tableData2/delete").reply(config => {
  const {
    ids
  } = JSON.parse(config.data);
  const filterTable = tableData2.filter((data, index) => data.id !== ids[index]);
  return [200, filterTable];
});
import { iconsImgs } from "../utils/images";
import axios from "axios";

export const navigationLinks = [
  { id: 2, title: "Account", image: iconsImgs.user },
  { id: 3, title: "Settings", image: iconsImgs.gears },
];

export const menu = [
  { id: 1, title: "Dashboard", image: iconsImgs.dashboard },
  { id: 2, title: "campaigns", image: iconsImgs.campaigns },
  { id: 3, title: "flows", image: iconsImgs.flows },
  { id: 4, title: "integrations", image: iconsImgs.integrations },
  { id: 5, title: "customers", image: iconsImgs.customers },
];

export function data(tablename) {
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:3010/api/data", {
      headers: {
        tablename: tablename,
      },
    });
    return response.data;
  };

  return fetchdata();
}

export function componentData(id) {
  const username = "trial";
  const password = "assignment123";

  const basicAuth = btoa(`${username}:${password}`);

  const url = `http://3.227.101.169:8020/api/v1/sample_assignment_api_${id}/`;

  const fetchdata2 = async ()=>{
    const response1 = await axios.get(url, {
      headers: {
        Authorization: `Basic ${basicAuth}`
      },
    });
    return response1.data;
  };

  return fetchdata2();
}

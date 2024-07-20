import axios from "axios";

export const fetchData = async () => {
  return await axios.get("http://test.api.boxigo.in/sample-data/");
};

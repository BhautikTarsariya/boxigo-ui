import axios from "axios";

export const fetchData = async () => {
  return await axios.get(
    "https://backend-server-box.vercel.app/api/sample-data"
  );
};

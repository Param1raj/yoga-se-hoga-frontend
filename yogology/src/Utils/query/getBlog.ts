import axios from "axios";
import { BlogRoute } from "../../../apis";

export const getBlog = async (_id: string) => {
  return await axios.get(BlogRoute + `/${_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

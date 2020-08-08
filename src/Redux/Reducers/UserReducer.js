import {
  ADD_USER_INFO,
  ADD_USER_INFO_ERR,
  DELETE_USER,
  DELETE_USER_ERR,
  TOGGLE_CHECKED,
  TOGGLE_CHECKED_ERR,
  UPDATE_USER,
  UPDATE_USER_ERR
} from "../Type";
import { toast } from "react-toastify";

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      toast.success("user infos added");
      return state;
    case ADD_USER_INFO_ERR:
      toast.error("an error occured");
      return state;
    case DELETE_USER:
      toast.warn("User deleted");
      return state;
    case DELETE_USER_ERR:
      toast.error("an error occured");
      return state;
    case TOGGLE_CHECKED:
        toast.info("User checked");
        return state;
    case TOGGLE_CHECKED_ERR:
        toast.error("User checked error");
        return state;
    case UPDATE_USER:
         toast.info("Info updated");
         return state;
    case UPDATE_USER_ERR:
         toast.error("Infos update error");
         return state;

    default:
      return state;
  }
};
export default UserReducer;

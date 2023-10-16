import { useQuery } from "@tanstack/react-query";
import userService from "../../../../services/user.service";

export const useProfile = () => {
  return useQuery(["get profile"], () => userService.getProfile(), {
    select: ({ data }) => data,
  });
};

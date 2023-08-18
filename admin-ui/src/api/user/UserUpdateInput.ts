import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WhishlistUpdateManyWithoutUsersInput } from "./WhishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  whishlists?: WhishlistUpdateManyWithoutUsersInput;
};

import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WhishlistCreateNestedManyWithoutUsersInput } from "./WhishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  whishlists?: WhishlistCreateNestedManyWithoutUsersInput;
};

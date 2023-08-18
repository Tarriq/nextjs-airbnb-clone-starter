import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WhishlistListRelationFilter } from "../whishlist/WhishlistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  whishlists?: WhishlistListRelationFilter;
};

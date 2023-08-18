import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WhishlistListRelationFilter } from "../whishlist/WhishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: IntFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  whishlists?: WhishlistListRelationFilter;
};

import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WhishlistUpdateManyWithoutListingsInput } from "./WhishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: string | null;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  whishlists?: WhishlistUpdateManyWithoutListingsInput;
};

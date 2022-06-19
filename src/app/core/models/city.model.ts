type TThumbnail = {
  image_type: string;
  image_url: string;
};

type TDescription = {
  id: number;
  object_id: number;
  object_type: string;
  description_type: string;
  text: string;
  language_code: string;
  translated: number;
};

type TDestination = {
  id: number;
  city: string;
  country_name: string;
  airport_name: string;
  country_code: string;
  latitude: number;
  longitude: number;
  iata_code: string;
  iata_parent_id: number;
  is_enabled: string;
  temperature: number;
  original_destination_id: number;
  adventure_flag: number;
  nightlife_flag: number;
  culture_flag: number;
  romantic_flag: number;
  food_flag: number;
  hot_flag: number;
  beach_flag: number;
  sports_flag: number;
  winter_sports_flag: number;
  chill_flag: number;
  off_grid_flag: number;
  winter_flag: number;
  thumbnail: TThumbnail;
  description: TDescription;
  top_fives_new_flag: number;
  top_fives_updated_flag: number;
};

type TActivities = {
  id: number;
  destination_id: number;
  name: string;
  city: string;
  country_code: string;
  country_name: string;
  currency_code: string;
  start_day: string | null;
  start_year: string | null;
  start_month: string | null;
  end_day: string | null;
  end_year: string | null;
  end_month: string | null;
  start_timestamp: string | null;
  end_timestamp: string | null;
  minimum_days: number;
  price: number;
  latitude: number;
  longitude: number;
  adventure_flag: number;
  nightlife_flag: number;
  culture_flag: number;
  romantic_flag: number;
  chill_flag: number;
  food_flag: number;
  hot_flag: number;
  beach_flag: number;
  sports_flag: number;
  winter_sports_flag: number;
  off_grid_flag: number;
  winter_flag: number;
  type: string;
  booking_url: string;
  tripadvisor_url: string;
  is_enabled: string;
  provider: string;
  thumbnail: TThumbnail;
  description: TDescription;
  top_fives_position: number;
};

export interface ICity {
  destination: TDestination;
  activities: Array<TActivities>;
}

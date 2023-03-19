import { RESTAURANT_TAGS } from "@/constants/data";
import type {
  Rating,
  RestaurantMetaData,
  RestaurantTags,
  RestaurantType,
} from "@/types/data";
import isRestaurantRawData from "@/types/guards/isRestaurantRawData";

class Restaurant {
  private _id: number;
  private _name: string;
  private _type: RestaurantType;
  private _menu: string;
  private _price: string;
  private _location: string;
  private _reviewer: string;
  private _review: string;
  private _ratingAvg: number;
  private _tags: RestaurantTags[];
  private _ratings: Rating[];

  constructor(data: object) {
    if (!isRestaurantRawData(data)) {
      throw new Error("Invalid data");
    }

    this._id = parseInt(data["등록순번"]);
    this._name = data["상호"];
    this._type = data["종류"];
    this._menu = data["메뉴"];
    this._price = data["가격(1인기준)"];
    this._location = data["위치"];
    this._reviewer = data["최초 공유자 이름"];
    this._review = data["공유자 평"];
    this._ratingAvg = parseInt(data["평균 별점"]);
    this._tags = RESTAURANT_TAGS.filter((tag) => data[tag] === "O");

    this._ratings = Object.keys(data)
      .filter((key) => {
        return (
          key.includes("방문자") &&
          (data as Record<string, string>)[key] !== "" &&
          (data as Record<string, string>)[key.replace("방문자", "별점")] !== ""
        );
      })
      .map((key) => {
        return {
          rater: (data as Record<string, string>)[key],
          rating: parseFloat(
            (data as Record<string, string>)[key.replace("방문자", "별점")],
          ),
        };
      });
  }

  get id(): number {
    return this._id;
  }

  get meta(): RestaurantMetaData {
    return {
      id: this._id,
      name: this._name,
      type: this._type,
      menu: this._menu,
      price: this._price,
      location: this._location,
      reviewer: this._reviewer,
      review: this._review,
      ratingAvg: this._ratingAvg,
      tags: this._tags,
      ratings: this._ratings,
    };
  }
}

export default Restaurant;

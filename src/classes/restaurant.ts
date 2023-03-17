import isRestaurantRawData from "@/types/guards/isRestaurantRawData";

class Restaurant {
  private _id: number;
  private _name: string;
  private _type: string;
  private _menu: string;
  private _price: string;
  private _location: string;
  private _reviewer: string;
  private _review: string;
  private _rating: number;

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
    this._reviewer = data["이름"];
    this._review = data["공유자 평"];
    this._rating = parseInt(data["평균\n별점"]);
  }

  get id(): number {
    return this._id;
  }

  get meta(): {
    id: number;
    name: string;
    type: string;
    menu: string;
    price: string;
    location: string;
    reviewer: string;
    review: string;
    rating: number;
  } {
    return {
      id: this._id,
      name: this._name,
      type: this._type,
      menu: this._menu,
      price: this._price,
      location: this._location,
      reviewer: this._reviewer,
      review: this._review,
      rating: this._rating,
    };
  }
}

export default Restaurant;

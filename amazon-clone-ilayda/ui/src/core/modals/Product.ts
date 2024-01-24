import Base from "./Base";

export default class mdlProduct extends Base{
  name?: string;
  view?: string;
  about?: string;
  price?: number;
  vote?: number;
  colors?: string[];
  image?: string;
}

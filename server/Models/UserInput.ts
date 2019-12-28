export interface User {
  email: String;
  fname: String;
  lname: String;
  age: Number;
  height: Height;
  weight: Number;
  shoes: Array<Shoes>;
  measurement_system: String;
}

// Large = Ft or M
// Small = Inches or Cm
interface Height {
  large: Number;
  small: Number;
}

export interface Shoes {
  brand: String;
  model: String;
  size: Number;
  distance: Number;
}

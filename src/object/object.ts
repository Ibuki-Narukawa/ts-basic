export default function objectSample() {
  // const a: object = {
  //   name: 'Ibuki',
  //   age: 22
  // }
  //a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "Japan",
  };

  console.log("Object object sample 1:", country);

  country = {
    language: "English",
    name: "United States of America",
  };

  console.log("Object object sample 2:", country);
}

// オプショナルとreadonly
const myData: {
  age: number;
  lastName: string;
  readonly firstName: string;
  gender?: string;
} = {
  age: 22,
  lastName: "Narukawa",
  firstName: "Ibuki",
};

myData.gender = "male";
myData.lastName = "Kamado";
//myData.firstName = 'Tanjiro'

console.log("Object object sample 3:", myData);

// インデックスシグネチャ
const capitals: {
  [countryName: string]: string;
} = {
  Japan: "Tokyo",
  Korea: "Seoul",
};

capitals.China = "Beijing";
capitals.Canada = "Ottawa";

console.log("Object object sample 4:", capitals);

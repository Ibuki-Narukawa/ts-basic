// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello IBUKI!");
// world.sayHello(root);

// // 03.基本の型定義
// import {
//   anySample,
//   notExistSample,
//   primitiveSample,
//   unknownSample,
// } from "./basic";
// unknownSample();
// anySample();
// notExistSample();
// primitiveSample();

// 04.関数の型定義
// import { logMessage } from "./function/basic";
// import {
//   isUserSignedIn,
//   isUserSignedIn2,
//   sumProductsPrice,
// } from "./function/parameters";
// logMessage("Hello TypeScript!");
// isUserSignedIn("ABC", "ibuki");
// isUserSignedIn("DEF");
// isUserSignedIn2("ABC");
// const sum = sumProductsPrice(100, 200, 300, 400, 500);
// console.log("Function parameters sample 5:", sum);

// 05.オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias";
// objectSample();
// typeAliasSample();

// 06.配列とタプルの型定義
// import arraySample from "./array/array";
// import tupleSample from "./array/tuple";
// arraySample();
// tupleSample();

// 07.ジェネリック型とポリモーフィズム
// import genericsBasicSample from "./generics/basic";
// import advancedSample from "./generics/advanced";
// genericsBasicSample();
// advancedSample();

// 10.非同期処理
// import callbackSample from "./asynchronous/callback";
// callbackSample()

// import promiseSample from "./asynchronous/promise";
// promiseSample()

import asyncAwaitSample from "./asynchronous/asyncAwait";
asyncAwaitSample();

/**
 * funcitonの種類 3つ
 */
//
// function func1() {}
// const func2 = function () { };

// const func3 = () => {};

/**
 * オブジェクト
 */

// const obj1 = {}; //糖衣構文
// obj1.name = 'yuudai';
// console.log(obj1);

// const obj2 = new Object();
// console.log(obj2);
// obj2.name = '朝登';

/**
 * メソッド
 */
// const methodObj = {
//   // `function`キーワードを使ったメソッド
//   method1: function () {
//     console.log('これはメソッドです');
//   },

//   // メソッドの短縮記法で定義したメソッド
//   method3() {
//     console.log('これもメソッドです。短縮記法だよ。ES6からね。');
//   },

//   // Arrow Functionを使ったメソッド
//   method2: () => {
//     console.log('これはメソッドです。アロー関数でも大丈夫');
//   },
// };

// methodObj.method1(); // "これはメソッドです"
// methodObj.method2(); // "これはメソッドです。アロー関数でも大丈夫"
// methodObj.method3(); // "これもメソッドです。短縮記法だよ。ES6からね。"

/**
 * メソッドにおけるthisについて
 */

/* Arrow function以外 */
// const obj = {
//   // 関数式をプロパティの値にしたメソッド
//   method1: function () {
//     return this;
//   },
//   // 短縮記法で定義したメソッド
//   method2() {
//     return this;
//   },
// };
// // メソッド呼び出しの場合、それぞれの`this`はベースオブジェクト(`obj`)を参照する
// // メソッド呼び出しの`.`の左にあるオブジェクトがベースオブジェクト
// console.log(obj.method1()); // => obj
// console.log(obj.method2()); // => obj

// const dog = {
//   name: 'こむぎ',
//   color: 'brown',
//   breed: 'プードル',
//   bark() {
//     console.log(`${this.name}がワン！と鳴きました`);
//   },
// };
// console.log(dog.bark());

// const bark2 = dog.bark;
// bark2();

/* Arrow function */
// const dog2 = {
//   name: 'しろ',
//   color: 'white',
//   breed: 'マルチーズ',
//   bark() {
//     console.log(`${this.name}がワン！と鳴きました`);
//   },
//   // Arrow Function自身の外側のスコープに定義されたもっとも近い関数のthisの値
//   delayBark() {
//     console.log(this);
//     setTimeout(() => {
//       console.log(`${this.name}がワン！と後から鳴きました`);
//     }, 1000);
//   },
// };

// dog2.delayBark();

/**
 * プロトタイプ
 */

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// const x = {};
// const y = [];
// const z = 'aaa';

// Object.prototype.abc = 10;

// console.log(x.abc);
// console.log(y.abc);
// console.dir(z.abc);

/**
 * オブジェクト指向
 */

// const isClass = {
//   property1: '文字列です',
//   property2: 1234,
//   property3: true,

//   method1: function () {
//     console.log('これはメソッドです');
//   },
//   method2: () => {
//     console.log('これはメソッドです。アロー関数でも大丈夫');
//   },
//   method3() {
//     console.log('これもメソッドです。短縮記法だよ。ES6からね。');
//   },
// }; // classの実態はオブジェクト

// 実務っぽく
// const makeColorObj = {
//   /**
//    * 色のrbgを格納したオブジェクト配列
//    */
//   colorList: {
//     limegreen: {
//       r: 50,
//       g: 205,
//       b: 50,
//     },
//     tomato: {
//       r: 255,
//       g: 99,
//       b: 71,
//     },
//   },

//   hex(r, g, b) {
//     console.log(
//       '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
//     );
//   },

//   rgb(r, g, b) {
//     console.log(`rgb(${r}, ${g}, ${b})`);
//   },
// };

// const makeColor = function (color) {
//   const { r, g, b } = color;
//   // const r = color.r;
//   // const g = color.g;
//   // const b = color.b;

//   const hex = () => {
//     console.log(
//       '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
//     );
//   };
//   hex();

//   const rgb = () => {
//     console.log(`rgb(${r}, ${g}, ${b})`);
//   };
//   rgb();
// };

// const colorList = {
//   limegreen: {
//     r: 50,
//     g: 205,
//     b: 50,
//   },
//   tomato: {
//     r: 255,
//     g: 99,
//     b: 71,
//   },
// };

// makeColor(colorList.limegreen);

/**
 * ファクトリ関数
 */
const makeColor = function ({ r, g, b }) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.hex = function () {
    console.log(
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
    );
  };

  color.rgb = function () {
    console.log(`rgb(${r}, ${g}, ${b})`);
  };

  return color;
};

const colorList = {
  limegreen: {
    r: 50,
    g: 205,
    b: 50,
  },
  tomato: {
    r: 255,
    g: 99,
    b: 71,
  },
};

console.log(makeColor(colorList.limegreen));
console.log(makeColor(colorList.tomato));

// console.log(
//   makeColor(colorList.limegreen).rgb === makeColor(colorList.tomato).rgb,
// );

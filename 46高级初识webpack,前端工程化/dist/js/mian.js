"use strict";

require("core-js/modules/web.dom.iterable");

//数组去重
function uniq(arr) {
  return [...new Set(arr)];
} // es6的Generator函数异步


function* a() {
  yield console.log(1);
  yield console.log(2);
}

var aa = a();
aa.next();
aa.next(); // es8的asyns/await异步

const timeout = async ms => {
  await new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

async function asyncP(value, ms, ms2) {
  // 顺序执行
  await timeout(ms);
  console.log(value);
  await timeout(ms2);
  console.log(ms2); // 并行执行

  await Promise.all([timeout(ms), timeout(ms2)]);
}

asyncP('hello world', 5000, 3000);
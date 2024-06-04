在 JavaScript 中，重载是指在同一个作用域内定义多个同名函数，但是这些函数的参数不同。然而，JavaScript 不支持真正的函数重载，因为它不关心函数的参数类型，只关心参数的数量。如果定义了两个同名的函数，后面定义的会覆盖前面的定义。
为了实现类似的功能，你可以使用不同的参数个数或类型来调用不同的函数，或者使用一个函数来检查参数并根据参数调用不同的内部函数。
以下是一个使用不同参数个数来实现类似重载效果的例子：

```javascript
const READ = 0b1; //0001
const WRITE = 0b10; //0010
const UPDATE = 0b100; //0100
const DELETE = 0b1000; //1000

const r = READ | WRITE | DELETE;
console.log(r); //11

let a = 11;
a = a ^ READ; //修改权限 1101 ^ 0001 = 1100  两个都为1就变0
if (a & READ) {
  //与判断是否有权限  1101 & 0001 = 0001 两个都为1才为1
  console.log("有权限");
} else {
  console.log("没权限");
}
```

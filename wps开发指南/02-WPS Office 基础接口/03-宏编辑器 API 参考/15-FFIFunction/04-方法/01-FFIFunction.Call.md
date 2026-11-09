# FFIFunction.Call

调用包装的原生函数。

## 语法

```typescript
Call(...args: any[]): any
```

express   一个代表 **FFIFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ...args | 可选 | any[] | 传递给原生函数的参数，类型和数量取决于函数签名。 |

## 返回值

原生函数的返回值，类型取决于声明的 ReturnType。void 函数返回 undefined。

## 说明

将 JS 参数转换为原生值，通过 libffi 调用原生函数，再将返回值转换回 JS 值。参数的数量和类型必须与创建 FFIFunction 时声明的签名匹配——不匹配可能导致栈损坏或崩溃。原生函数本身的崩溃（如段错误）无法被 JS 捕获，会导致 WPS 进程崩溃。

## 示例

```javascript
/* 调用无参数函数 */
var result = myFunc.Call()
```

```javascript
/* 调用带参数的函数 */
var handle = createWindow.Call("MyClass", "Title", 0, 0, 800, 600, 0, 0, 0, 0)
```

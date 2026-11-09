# PageSetup.PrintQuality

返回或设置打印质量。 **Variant** 类型，可读写。



## 语法

**注意：**为 **PrintQuality** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
PrintQuality(Index?: any, RHS?: any): void;
PrintQuality(Index?: any): any;
```

express.**PrintQuality(Index)**

express   一个代表 **PageSetup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 水平方向打印质量 (1) 或垂直方向打印质量 (2)。有些打印机可能不支持垂直方向打印质量设置。 |
| RHS | 可选 | any | 待设置的打印质量值。不传该参数则为取值情况。 |

## 返回值

any

## 示例


```JavaScript
/*此示例用非正方形像素设置打印机上的打印质量，设置 Sheet1 水平方向打印质量为240，垂直方向打印质量为140。本示例是否出现错误取决于使用的打印机驱动程序。*/
function test() {
    Worksheets("Sheet1").PageSetup.PrintQuality(1, 240)
    Worksheets("Sheet1").PageSetup.PrintQuality(2, 140)
}
```


```JavaScript
/*本示例显示水平方向打印质量的当前设置。*/
function test() {
    alert(`Horizontal Print Quality is ${Application.Worksheets.Item("Sheet1").PageSetup.PrintQuality(1)}`)
}
```

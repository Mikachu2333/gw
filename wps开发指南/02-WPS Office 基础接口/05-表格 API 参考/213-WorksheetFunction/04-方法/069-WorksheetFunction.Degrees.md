# WorksheetFunction.Degrees

将弧度转换为度。



## 语法

express.**Degrees(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Angle - 要转换的以弧度表示的角度。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例为B1等单元格分别赋值，并使用Degrees方法将弧度转换为度。*/
function test() {
    Range("B1").Value2 = 60
    Range("B2").Value2 = 30
    Range("B3").Value2 = 10.5
    let degrees1 = Application.WorksheetFunction.Degrees(Range("B1").Value2)
    let degrees2 = Application.WorksheetFunction.Degrees(Range("B2").Value2)
    let degrees3 = Application.WorksheetFunction.Degrees(Range("B3").Value2)
    alert(degrees1)
    alert(degrees2)
    alert(degrees3)
}
```


```JavaScript
/*本示例使用Degrees方法将弧度转换为度，并将结果赋值于D3等单元格。*/
function test() {
    Range("D3").Value2 = Application.WorksheetFunction.Degrees(-100)
    Range("D4").Value2 = Application.WorksheetFunction.Degrees(87)
    Range("D5").Value2 = Application.WorksheetFunction.Degrees(43.5)
}
```

# WorksheetFunction.Radians

将度转换为弧度。



## 语法

express.**Radians(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Angle - 以度表示的要转换的角度。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Radians 方法分别将150度和45度转换为弧度，并分别赋值给C3和C4单元格。*/
function test() {
    Range("C3").Value2 = WorksheetFunction.Radians(150)
    Range("C4").Value2 = WorksheetFunction.Radians(45)
}
```


```JavaScript
/*本示例为A1单元格赋值，使用 Radians 方法将A1单元格中的度数值转换为弧度值。*/
function test() {
    Range("A1").Value2 = 175
    alert(WorksheetFunction.Radians(Range("A1").Value2))
}
```

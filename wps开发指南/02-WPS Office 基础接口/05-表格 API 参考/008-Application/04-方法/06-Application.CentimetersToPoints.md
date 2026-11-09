# Application.CentimetersToPoints

将计量单位从厘米转换为磅（一磅等于 0.035 厘米）。



## 语法

express.**CentimetersToPoints(Centimeters)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Centimeters | 必选 | number（double 精度） | 指定要转换为磅的厘米值。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例将 Sheet1 的左边距设为 5 厘米。*/
function test() {
    Worksheets.Item("Sheet1").PageSetup.LeftMargin = Application.CentimetersToPoints(5)
}
```


```JavaScript
/*本示例演示将A1单元格的值用CentimetersToPoints方法转换后赋值A2单元格。*/
function test() {
    Range("A1").Value2 = 10
    Range("A2").Value2 = Application.CentimetersToPoints(Range("A1").Value2)
}
```

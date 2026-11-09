# Application.InchesToPoints

将度量单位从英寸转换为磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）。



## 语法

express.**InchesToPoints(Inches)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Inches | 必选 | number（double 精度） | 指定要转换为磅值的英寸值。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中的左边距设为 2.5 英寸。*/
function test() {
    Worksheets.Item("Sheet1").PageSetup.LeftMargin = Application.InchesToPoints(2.5)
}
```


```JavaScript
/*本示例将4英寸转换为磅值并显示。*/
function test() {
    alert(Application.InchesToPoints(4))
}
```

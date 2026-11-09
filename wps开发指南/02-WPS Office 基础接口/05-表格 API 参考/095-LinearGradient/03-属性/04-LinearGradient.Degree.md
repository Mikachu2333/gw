# LinearGradient.Degree

选定区域中线性渐变填充的角度。可读/写。



## 语法

express.**Degree**

express   一个代表 **LinearGradient** 对象的变量。

## 类型

number（double 精度）

## 说明


使用 0 - 360 之间的值。



## 示例


```JavaScript
/*下例将选定区域中线性渐变的填充角度设置为45。*/
function test() {
    Selection.Interior.Pattern = xlPatternLinearGradient
    Selection.Interior.Gradient.Degree = 45
}
```


```JavaScript
/*下例显示第一张工作表上区域 B1:B10 线性渐变的填充角度。*/
function test() {
    let linearGradient = Worksheets.Item(1).Range("B1:B10").Interior.Gradient
    alert(linearGradient.Degree)
}
```

# RectangularGradient.RectangleTop

代表渐变填充收敛到的点或矢量。可读/写。



## 语法

express.**RectangleTop**

express   一个代表 **RectangularGradient** 对象的变量。

## 类型

number（double 精度）

## 说明


与 RectangleLeft、RectangleRight 和 RectangleBottom 一起使用。下表中列出了有效值。  

| 属性              | 值   |
| --------------- | --- |
| RectangleLeft   | 0-1 |
| RectangleRight  | 0-1 |
| RectangleTop    | 0-1 |
| RectangleBottom | 0-1 |



## 示例


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A9 中渐变填充的 RectangleTop 属性值。*/
function test() {
    let gradient = ActiveSheet.Range("A1:A9").Interior.Gradient
    alert(gradient.RectangleTop)
}
```


```JavaScript
/*本示例设置单元格区域 A1:A10 中渐变填充的 RectangleTop 属性值。*/
function test() {
    let gradient = Range("A1:A10").Interior.Gradient
    gradient.RectangleTop = 0.9
}
```

# ColorFormat.SchemeColor

返回或设置一个 **Integer** 值，它代表 **Color** 对象的颜色，作为当前配色方案中的索引。



## 语法

express.**SchemeColor**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例设置活动工作表中第一个形状前景填充色的当前配色方案。*/
function test() {
    ActiveSheet.Shapes.Item(1).Fill.ForeColor.SchemeColor = 2
}
```


```JavaScript
/*本示例显示第一张工作表上第二个形状背景填充色的当前配色方案是否为绿色。*/
function test() {
    let colorFormat = Worksheets.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.SchemeColor == 3)
}
```

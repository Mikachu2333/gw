# ColorFormat.RGB

返回或设置一个 **Long** 值，它代表指定颜色的红绿蓝 (RGB) 值。



## 语法

express.**RGB**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上第二个形状背景填充色是否为红色。*/
function test() {
    let colorFormat = Worksheets.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.RGB == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例设置活动工作表中第一个形状前景填充色为绿色。*/
function test() {
    ActiveSheet.Shapes.Item(1).Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```

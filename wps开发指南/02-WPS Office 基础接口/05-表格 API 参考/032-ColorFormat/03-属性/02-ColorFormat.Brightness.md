# ColorFormat.Brightness

返回或设置指定对象的发光度。可读/写。



## 语法

express.**Brightness**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数字。



## 示例


```JavaScript
/*本示例设置活动工作表中第一个形状的前景填充色的亮度。*/
function test() {
    Application.ActiveSheet.Shapes.Item(1).Fill.ForeColor.Brightness = 0.5
}
```


```JavaScript
/*本示例显示第一张工作表上第二个形状背景填充色的亮度。*/
function test() {
    let colorFormat = Worksheets.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.Brightness)
}
```

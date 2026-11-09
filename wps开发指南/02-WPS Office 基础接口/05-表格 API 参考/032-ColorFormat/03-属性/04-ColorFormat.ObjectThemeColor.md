# ColorFormat.ObjectThemeColor

返回或设置一种映射到主题配色方案的颜色。可读/写 **MsoThemeColorIndex** 。



## 语法

express.**ObjectThemeColor**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

MsoThemeColorIndex

## 示例


```JavaScript
/*本示例显示第一张工作表上第二个形状背景填充色映射到主题配色方案的颜色是否为无主题颜色。*/
function test() {
    let colorFormat = Worksheets.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.ObjectThemeColor == msoNotThemeColor)
}
```


```JavaScript
/*本示例设置活动工作表中第一个形状前景填充色映射到主题配色方案的颜色。*/
function test() {
    ActiveSheet.Shapes.Item(1).Fill.ForeColor.ObjectThemeColor = msoThemeColorDark2
}
```

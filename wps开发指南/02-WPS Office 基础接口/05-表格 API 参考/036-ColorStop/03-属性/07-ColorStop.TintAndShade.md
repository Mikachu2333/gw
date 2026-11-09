# ColorStop.TintAndShade

返回或设置指定对象的淡色和阴影。可读/写。



## 语法

express.**TintAndShade**

express   一个代表 **ColorStop** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*对当前选定内容应用淡色和阴影。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Application.Selection.Interior.Gradient.ColorStops.Add(1)
    colorStop.ThemeColor = xlThemeColorAccent1
    colorStop.TintAndShade = 0
}
```


```JavaScript
/*本示例显示活动单元格第二个ColorStop对象的TintAndShade属性是否为1。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Item(3)
    alert(colorStop.TintAndShade == 1)
}
```

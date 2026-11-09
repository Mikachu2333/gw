# Style.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定样式的所有边框。



## 语法

express.**Borders**

express   一个代表 **Style** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例显示活动文档上名为“标题 2”的样式的外边框的颜色是否为wdColorAutomatic。*/
function test() {
    let style = ActiveDocument.Styles.Item("标题 2")
    alert(style.Borders.OutsideColor == wdColorAutomatic)
}
```


```JavaScript
/*本示例启用所选内容的样式的边框，并将文本与左边的框之间的距离设置为20磅。*/
function test() {
    let borders = Selection.Style.Borders
    borders.Enable = msoTrue
    borders.DistanceFromLeft = 20
}
```

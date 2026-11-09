# DisplayFormat.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的边框。只读。



## 语法

express.**Borders**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*此示例显示 B4 单元格边框在当前调色板中颜色的索引值是否为 xlColorIndexNone 。*/
function test() {
    alert(Range("B4").DisplayFormat.Borders.ColorIndex == xlColorIndexNone)
}
```


```JavaScript
/*此示例显示第一张工作表中 D6 单元格边框的粗细。*/
function test() {
    alert(Worksheets.Item(1).Range("D6").DisplayFormat.Borders.Weight)
}
```

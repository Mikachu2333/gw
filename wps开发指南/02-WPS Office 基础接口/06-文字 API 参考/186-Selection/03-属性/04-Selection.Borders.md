# Selection.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Selection** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例显示选中区域的边框数量。*/
function test() {
    alert(Application.Selection.Borders.Count)
}
```


```JavaScript
/*本示例向选中区域的周围添加深红色、0.75 磅宽的双边框。*/
function test() {
    let borders = Selection.Borders
    borders.OutsideColor = wdColorDarkRed
    borders.OutsideLineWidth = wdLineWidth075pt
    borders.OutsideLineStyle = wdLineStyleDouble
}
```

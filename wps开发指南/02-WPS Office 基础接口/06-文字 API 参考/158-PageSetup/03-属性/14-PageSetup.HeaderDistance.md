# PageSetup.HeaderDistance

返回或设置页眉与页面顶端之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**HeaderDistance**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示页眉与页面顶边之间的距离。PointsToInches 方法用来将磅值转换为英寸。*/
function test() {
    let sngDistance = ActiveDocument.PageSetup.HeaderDistance
    alert(PointsToInches(sngDistance) + " inches")
}
```


```JavaScript
/*本示例将第一个文档的页眉与页面顶边之间的距离设置为 0.5 英寸。InchesToPoints 方法用来将英寸转换为磅值。*/
function test() {
    Documents.Item(1).PageSetup.HeaderDistance = InchesToPoints(0.5)
}
```

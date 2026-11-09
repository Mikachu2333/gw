# ShapeRange.Adjustments

返回一个 **Adjustments** 对象，它包括指定形状的所有调整操作的调整值。应用于任何代表自选图形、艺术字或连接符的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。



## 语法

express.**Adjustments**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

Adjustments

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象的第一个调整值设置为 0.5。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1])
    shpRange.Adjustments.Item(1, 0.5)
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象的第二个调整值设置为 0.8。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2])
    shpRange.Adjustments.Item(2, 0.8)
}
```

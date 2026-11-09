# ShapeRange.Group

将指定区域中的形状形成一组。



## 语法

express.**Group()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

一个代表组合形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。

## 说明


由于一组形状作为单个形状处理，所以创建和分解形状组将更改 [ **Shapes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj) 集合中的项目数，并更改集合中受影响的项目之后的项目索引号。

[ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象必须是数据透视表字段的数据区域中的单个单元格。如果试图对多个单元格应用该方法，将会失败（不显示错误消息）。



## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象进行组合*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Group()
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象进行组合，并设置组合后的位置*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2, 3])
    let group = shpRange.Group()
    group.Left = 100
    group.Top = 100
}
```

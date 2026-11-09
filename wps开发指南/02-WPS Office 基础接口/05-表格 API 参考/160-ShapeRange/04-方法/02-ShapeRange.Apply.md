# ShapeRange.Apply

应用通过 **[PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/PickUp)** 方法复制的指定形状格式。



## 语法

express.**Apply()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例复制第一张工作表中新建的ShapeRange对象的格式，然后将复制的格式应用到第二个新建的ShapeRange对象上。*/
function test() {
    let shpRange1 = Application.Worksheets.Item(1).Shapes.Range([1])
    let shpRange2 = Application.Worksheets.Item(1).Shapes.Range([2, 3])
    shpRange1.PickUp()
    shpRange2.Apply()
}
```


```JavaScript
/*此示例复制活动工作表上新建的ShapeRange对象的格式，然后将复制的格式应用到活动工作表所有形状。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([3])
    shpRange.PickUp()
    ActiveSheet.Shapes.SelectAll()
    Selection.ShapeRange.Apply()
}
```

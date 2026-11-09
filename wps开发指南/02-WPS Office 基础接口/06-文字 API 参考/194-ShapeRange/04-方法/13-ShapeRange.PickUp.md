# ShapeRange.PickUp

复制指定形状的格式。



## 语法

express.**PickUp()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 说明


用 [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Apply) 方法可将复制的格式应用于另一个形状。



## 示例


```JavaScript
/*本示例复制第一个文档中新建的ShapeRange对象的格式，然后将复制的格式应用到第二个新建的ShapeRange对象上。*/
function test() {
    let shpRange1 = Application.Documents.Item(1).Shapes.Range([3])
    let shpRange2 = Application.Documents.Item(1).Shapes.Range([2, 1])
    shpRange1.PickUp()
    shpRange2.Apply()
}
```


```JavaScript
/*此示例复制活动文档上新建的ShapeRange对象的格式，然后将复制的格式应用到活动文档所有形状。*/
function test() {
    let shpRange = ActiveDocument.Shapes.Range([1])
    shpRange.PickUp()
    ActiveDocument.Shapes.SelectAll()
    Selection.ShapeRange.Apply()
}
```

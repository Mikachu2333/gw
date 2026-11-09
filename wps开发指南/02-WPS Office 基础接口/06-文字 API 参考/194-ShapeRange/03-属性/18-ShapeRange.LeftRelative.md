# ShapeRange.LeftRelative

返回或设置一个 **Single** 类型的值，该值代表形状区域左侧的相对位置。可读写。



## 语法

express.**LeftRelative**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **[RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 属性一起使用。当设置为 **wdShapePositionRelativeNone** (-999999)（参见 **[WdShapePositionRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapePositionRelative)** 枚举）时，应忽略此属性，因为形状不能使用百分比放置。水平位置是由 **[Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Left)** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档上第一个和第二个形状的 LeftRelative 属性值。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.LeftRelative = 20
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状的 LeftRelative 属性值。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Range(3)
    alert(shapeRange.LeftRelative)
}
```

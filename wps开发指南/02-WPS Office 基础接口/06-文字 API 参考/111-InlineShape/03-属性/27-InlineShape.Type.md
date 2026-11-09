# InlineShape.Type

返回内嵌形状的类型。只读 **[WdInlineShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdInlineShapeType)** 类型。



## 语法

express.**Type**

express   一个代表 **InlineShape** 对象的变量。

## 类型

WdInlineShapeType

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌形状的类型是否为wdInlineShapePicture。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).Type == wdInlineShapePicture)
}
```


```JavaScript
/*本示例显示第一个文档上内嵌图表的数量。*/
function test() {
    let shapes = Documents.Item(1).InlineShapes
    let num = 0
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == wdInlineShapeChart) {
            num++
        }
    }
    alert("内嵌图表的数量为：" + num)
}
```

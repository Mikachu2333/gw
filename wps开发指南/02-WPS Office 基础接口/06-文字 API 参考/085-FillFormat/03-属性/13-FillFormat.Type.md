# FillFormat.Type

返回图形填充格式的类型。只读 **MsoFillType** 类型。



## 语法

express.**Type**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoFillType

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图形的填充类型是否为msoFillSolid。*/
function test() {
    let fillFormat = ActiveDocument.InlineShapes.Item(1).Fill
    alert(fillFormat.Type == msoFillSolid)
}
```


```JavaScript
/*本示例遍历第一个文档上所有形状，判断如果形状的填充类型为图案填充，则显示该形状的名称。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Fill.Type == msoFillPatterned) {
            alert(shapes.Item(i).Name)
        }
    }
}
```

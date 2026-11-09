# SmartArtColor.Id

检索关联的 SmartArt 颜色样式的唯一 Id。只读。



## 语法

express.**Id**

express   一个代表 **SmartArtColor** 对象的变量。

## 类型

string

## 说明


与此属性关联的 ID 区分大小写。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第一个内嵌 SmartArt 图形的颜色样式关联的唯一 Id。*/
function test() {
    let smartArtColor = ActiveDocument.InlineShapes.Item(1).SmartArt.Color
    alert(smartArtColor.Id)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入第一个文档上第一个 SmartArt 图形的颜色样式关联的唯一 Id。*/
function test() {
    let smartArtColor = Documents.Item(1).Shapes.Item(1).SmartArt.Color
    Selection.TypeText(smartArtColor.Id)
}
```

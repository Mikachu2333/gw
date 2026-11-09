# InlineShape.SmartArt

返回 **SmartArt** 对象，该对象提供一种处理与指定内嵌形状相关联的 SmartArt 的方式。只读。



## 语法

express.**SmartArt**

express   一个代表 **InlineShape** 对象的变量。

## 类型

SmartArt

## 说明


 **SmartArt** 属性为与内嵌形状相关联的 SmartArt 图形进行交互提供了一个入口点。



## 示例


```JavaScript
/*本示例向活动文档中添加 SmartArt 图形，并显示该 SmartArt 图形的状态是否从左到右。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.AddSmartArt(Application.SmartArtLayouts.Item(2), ActiveDocument.Paragraphs.Item(1).Range)
    alert(inlineShape.SmartArt.Reverse === msoTrue)
}
```


```JavaScript
/*本示例设置选中的第一个 SmartArt 图形的配色方案。*/
function test() {
    let smartArt = Selection.InlineShapes.Item(1).SmartArt
    smartArt.Color = Application.SmartArtColors(1)
}
```

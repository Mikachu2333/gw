# InlineShapes.AddSmartArt

将 SmartArt 图形作为内嵌形状插入活动文档。



## 语法

express.**AddSmartArt(Layout, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | SmartArtLayout | 指定 SmartArt 图形的布局的 SmartArtLayout 对象。 |
| Range | 可选 | any | 指定 SmartArt 图形所绑定到的文本。如果指定了 Range，则会将 SmartArt 图形置于该范围中第一段的开头。如果省略该参数，则自动选择该范围，并且相对于页面的上边缘和左边缘放置 SmartArt 图形。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例将 SmartArt 图形作为内嵌形状插入活动文档。*/
function test() {
    let smartArtLayout = ActiveDocument.Shapes.Item(1).SmartArt.Layout
    ActiveDocument.InlineShapes.AddSmartArt(smartArtLayout)
}
```


```JavaScript
/*本示例将 SmartArt 图形作为内嵌形状插入到第一个文档上所选区域。*/
function test() {
    let smartArtLayout = Documents.Item(1).Shapes.Item(1).SmartArt.Layout
    Documents.Item(1).InlineShapes.AddSmartArt(smartArtLayout, Selection.Range)
}
```

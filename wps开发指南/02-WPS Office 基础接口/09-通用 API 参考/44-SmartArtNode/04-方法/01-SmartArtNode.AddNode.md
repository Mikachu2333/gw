# SmartArtNode.AddNode

按照 **MsoSmartArtNodePosition** 值指定的方式向数据模型添加新的 **SmartArtNode** 对象，该对象的类型为 **MsoSmartArtNodeType** 。



## 语法

express.**AddNode(Position, Type)**

express   一个代表 **SmartArtNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 可选 | MsoSmartArtNodePosition | 指定 **SmartArtNode** 在数据模型中的位置。例如， **msoSmartArtNodeAbove** 或 **msoSmartArtNodeAfter** 。 |
| Type | 可选 | MsoSmartArtNodeType | 指定添加的 **SmartArtNode** 的类型。例如， **msoSmartArtNodeTypeAssistant** 或 **msoSmartArtNodeTypeDefault** 。 |

## 返回值

SmartArtNode

## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的第一个节点的下方添加默认节点。*/
function test() {
    let smartArtNodes = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(1).AddNode(msoSmartArtNodeBelow, msoSmartArtNodeTypeDefault)
}
```


```JavaScript
/*本示例运行于演示组件，在活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的最后一个节点的前方添加默认节点。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(smartArtNodes.Count).AddNode(msoSmartArtNodeBefore)
}
```

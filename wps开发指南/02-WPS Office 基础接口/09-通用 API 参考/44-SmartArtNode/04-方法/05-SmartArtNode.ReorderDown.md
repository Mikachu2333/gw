# SmartArtNode.ReorderDown

与项目符号列表中的下一个节点交换节点。此方法会对整个节点系列进行重新排序。



## 语法

express.**ReorderDown()**

express   一个代表 **SmartArtNode** 对象的变量。

## 返回值

void

## 说明


此方法模拟单击 WPS Office 功能区用户界面上的“后移”按钮，该按钮位于“SmartArt 工具”选项卡上的“设计”组中。



## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点下第一个子节点与下一个节点交换，并对节点的整个系列进行重新排序。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(1).Nodes.Item(1)
    smartArtNode.ReorderDown()
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第三个节点与下一个节点交换，并对节点的整个系列进行重新排序。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(3).ReorderDown()
}
```

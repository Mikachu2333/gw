# SmartArtNode.Promote

将当前节点（以及它的所有子级）在数据模型中提升一级。



## 语法

express.**Promote()**

express   一个代表 **SmartArtNode** 对象的变量。

## 返回值

void

## 说明


在内容窗格中工作时，此功能模拟 WPS Office 功能区用户界面中的“升级”按钮。例如，以下面的数据模型为例：  

* A
  * B
    * C
* D

如果使 B 提升，产生的数据模型的外观如下所示：

* A
* B
  * C
* D



## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点下第一个子节点（以及它的所有子级）在数据模型中提升一级。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(1).Nodes.Item(1)
    smartArtNode.Promote()
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第六个节点在数据模型中提升一级。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(6).Promote()
}
```

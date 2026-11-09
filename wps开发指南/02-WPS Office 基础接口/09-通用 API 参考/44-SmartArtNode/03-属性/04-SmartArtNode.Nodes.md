# SmartArtNode.Nodes

检索与此 SmartArt 节点关联的子节点。只读。



## 语法

express.**Nodes**

express   一个代表 **SmartArtNode** 对象的变量。

## 类型

SmartArtNodes

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点下子节点的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(1)
    alert(smartArtNode.Nodes.Count)
}
```


```JavaScript
/*本示例运行于演示组件，删除活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第五个节点的第一个子节点。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    let smartArtNode = smartArtNodes.Item(5).Nodes.Item(1)
    smartArtNode.Delete()
}
```

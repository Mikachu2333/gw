# SmartArtNode.Type

检索 SmartArt 节点的类型。只读。



## 语法

express.**Type**

express   一个代表 **SmartArtNode** 对象的变量。

## 类型

MsoSmartArtNodeType

## 说明


可能值为 **[msoSmartArtNodeTypeAssistant](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoSmartArtNodeType)** 或 **msoSmartArtNodeTypeDefault** 。



## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的第一个节点的类型是否为msoSmartArtNodeTypeDefault。*/
function test() {
    let smartart = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    alert(smartart.AllNodes.Item(1).Type == msoSmartArtNodeTypeDefault)
}
```


```JavaScript
/*本示例运行于演示组件，判断活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的根节点的第二个子节点的类型，并通知用户。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(2)
    if (smartArtNode.Type == msoSmartArtNodeTypeAssistant) {
        alert("可在分层关系图中使用的助手节点")
    } else {
        alert("默认节点")
    }
}
```

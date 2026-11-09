# SmartArt.Nodes

检索 SmartArt 图表中根节点（ **[SmartArtNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** ）的子级。只读。



## 语法

express.**Nodes**

express   一个代表 **SmartArt** 对象的变量。

## 类型

SmartArtNodes

## 说明


根节点没有父节点并且仅包含子级（如果 SmartArt 图形的数据模型内有子级存在）。在下面的示例中，将返回节点 A 和 F。

* A
  * B
  * C
  * D
    * E
* F



## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿中第一张幻灯片的第一个 SmartArt 图表根节点的第一个子节点是否为隐藏节点。*/
function test() {
    let smartArtNodes = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Nodes
    alert(smartArtNodes.Item(1).Hidden === msoTrue)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形根节点的所有子节点关联的文本。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.Nodes
    for (let i = 1; i <= smartArtNodes.Count; i++) {
        smartArtNodes.Item(i).TextFrame2.TextRange.Text = "example_" + i
    }
}
```

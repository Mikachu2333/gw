# SmartArtNode.Delete

删除当前的 SmartArt 节点。



## 语法

express.**Delete()**

express   一个代表 **SmartArtNode** 对象的变量。

## 返回值

void

## 说明


删除节点时，第一个子级得到提升。在下面的数据模型中：

* A
  * B
    * C
* D

如果删除了 B，则该数据模型的外观如下所示：

* A
  * C
* D



## 示例


```JavaScript
/*本示例运行于演示组件，删除活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点下的第二个子节点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNodes = shape.SmartArt.Nodes.Item(1).Nodes
    smartArtNodes.Item(2).Delete()
}
```


```JavaScript
/*本示例运行于演示组件，删除活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的所有节点。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    for (let i = smartArtNodes.Count; i >= 1; i--) {
        smartArtNodes.Item(i).Delete()
    }
}
```

# SmartArtNode.Level

检索节点在层次结构中的级别。只读。



## 语法

express.**Level**

express   一个代表 **SmartArtNode** 对象的变量。

## 类型

number（int 精度）

## 说明


起始级别为 1 级并且向上递增。如果某个节点没有级别，则返回 0。例如，在下面的数据模型中，A 和 F 为 1 级，B 和 D 为 2 级，C 和 E 为 3 级。

* A
  * B
    * C
  * D
    * E
* F



## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点的级别。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(1)
    alert(smartArtNode.Level)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第四个节点的级别。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    alert(smartArtNodes.Item(4).Level)
}
```

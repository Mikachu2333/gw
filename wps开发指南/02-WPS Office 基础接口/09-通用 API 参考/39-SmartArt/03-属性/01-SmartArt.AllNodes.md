# SmartArt.AllNodes

检索包含 SmartArt 图表内部所有节点的 **[SmartArtNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** 对象。只读。



## 语法

express.**AllNodes**

express   一个代表 **SmartArt** 对象的变量。

## 类型

SmartArtNodes

## 说明


节点是按照顺序检索的，与数据模型无关。例如，下面的数据模型将按照 A、B、C、D、E、F 的顺序检索节点。

* A
  * B
  * C
    * D
    * E
* F



## 示例


```JavaScript
/*本示例运行于文字组件，设置活动文档的第一个内嵌 SmartArt 图形第一个节点内部的文本。*/
function test() {
    let smartArt = ActiveDocument.InlineShapes.Item(1).SmartArt
    smartArt.AllNodes.Item(1).TextFrame2.TextRange.Text = "Node 1"
}
```


```JavaScript
/*本示例运行于文字组件，将第一个文档的第一个 SmartArt 图形第二个节点与上一个节点交换节点，并重新排序该节点的父节点。*/
function test() {
    let smartArt = Documents.Item(1).Shapes.Item(1).SmartArt
    smartArt.AllNodes.Item(2).ReorderUp()
}
```

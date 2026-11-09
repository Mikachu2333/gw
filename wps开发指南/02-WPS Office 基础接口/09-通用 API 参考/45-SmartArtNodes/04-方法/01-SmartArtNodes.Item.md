# SmartArtNodes.Item

在指定的索引处或通过指定的唯一 ID 来检索 **[SmartArtNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SmartArtNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定一个代表索引的整数或一个代表 **SmartArtNode** 对象位置的字符串。 |

## 返回值

SmartArtNode

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的第一个节点内部的文本。*/
function test() {
    let smartart = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    alert(smartart.AllNodes.Item(1).TextFrame2.TextRange.Text)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的第一个子节点的级别。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let smartArtNode = shape.SmartArt.Nodes.Item(1)
    alert(smartArtNode.Level)
}
```

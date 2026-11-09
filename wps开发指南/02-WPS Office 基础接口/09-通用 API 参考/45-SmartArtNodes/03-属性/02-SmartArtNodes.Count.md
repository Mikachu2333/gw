# SmartArtNodes.Count

检索包含在 **[SmartArtNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** 集合中的 **SmartArtNode** 对象数。只读。



## 语法

express.**Count**

express   一个代表 **SmartArtNodes** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形根节点的子节点的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.SmartArt.Nodes.Count)
}
```

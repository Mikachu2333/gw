# SmartArtNode 对象

SmartArt 图形的数据模型内部的单个语义节点。


## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的节点的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.SmartArt.AllNodes.Count)
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第六个节点与上一个节点交换，并对节点的整个系列进行重新排序。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(6).ReorderUp()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/AddNode) | 按照 **MsoSmartArtNodePosition** 值指定的方式向数据模型添加新的 **SmartArtNode** 对象，该对象的类型为 **MsoSmartArtNodeType** 。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Delete) | 删除当前的 SmartArt 节点。 |
| [Demote](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Demote) | 将当前节点在数据模型中降低一级。 |
| [Promote](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Promote) | 将当前节点（以及它的所有子级）在数据模型中提升一级。 |
| [ReorderDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/ReorderDown) | 与项目符号列表中的下一个节点交换节点。此方法会对整个节点系列进行重新排序。 |
| [ReorderUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/ReorderUp) | 与项目符号列表中的上一个节点交换节点。此方法会对整个节点系列进行重新排序。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtNode** 对象的容器应用程序。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtNode** 对象的应用程序。只读。 |
| [Level](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Level) | 检索节点在层次结构中的级别。只读。 |
| [Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Nodes) | 检索与此 SmartArt 节点关联的子节点。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Parent) | 返回调用对象。只读。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/TextFrame2) | 返回与该 **SmartArtNode** 对象关联的文本。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/member/Type) | 检索 SmartArt 节点的类型。只读。 |
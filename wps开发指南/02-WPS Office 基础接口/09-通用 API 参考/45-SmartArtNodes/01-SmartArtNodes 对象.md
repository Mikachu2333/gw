# SmartArtNodes 对象

代表 SmartArt 图表内部的节点的集合。

## 说明


这些节点直接对应于包含在图形的数据模型内部的语义元素。  


## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的节点的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.SmartArt.AllNodes.Count)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的第一个节点的 OrgChartLayout 属性值。*/
function test() {
    let smartArtNodes = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.AllNodes
    smartArtNodes.Item(1).OrgChartLayout = msoOrgChartLayoutRightHanging
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/member/Item) | 在指定的索引处或通过指定的唯一 ID 来检索 **[SmartArtNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNode/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtNodes** 对象的容器应用程序。只读 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/member/Count) | 检索包含在 **[SmartArtNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/obj)** 集合中的 **SmartArtNode** 对象数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtNodes** 对象的应用程序。只读 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtNodes/member/Parent) | 返回调用对象。只读 |
# SoftEdgeFormat 对象

代表形状或形状区域的软边缘格式。


## 示例


```JavaScript
/*本示例将活动文档的第二个图片的柔化边缘效果的辐射长度设置为30磅。*/
function test() {
    ActiveDocument.Shapes.Item(2).SoftEdge.Radius = 30
}
```


```JavaScript
/*本示例显示活动文档的第一张图片的柔化边缘效果类型是否为柔化边缘类型2。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).SoftEdge.Type == msoSoftEdgeType2)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Radius](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SoftEdgeFormat/member/Radius) | 获取或设置形状的柔化边缘效果的大小（以磅为单位）。可读/写 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SoftEdgeFormat/member/Type) | 获取或设置 **SoftEdgeFormat** 对象的类型。可读/写。 |
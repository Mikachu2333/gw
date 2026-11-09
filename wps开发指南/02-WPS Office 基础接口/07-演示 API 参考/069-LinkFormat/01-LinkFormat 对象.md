# LinkFormat 对象

包含适用于链接的 OLE 对象、链接的图片和 IIRC 媒体对象的属性和方法。

## 说明


使用 **LinkFormat** 属性返回 **LinkFormat** 对象。


## 示例


```JavaScript
/*本示例遍历活动演示文稿所有幻灯片中的所有形状，将全部链接的 ET 工作表设置为手动更新。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            let shape = shapes.Item(j)
            if (shape.Type == msoLinkedOLEObject) {
                if (shape.OLEFormat.ProgID == "Excel.Sheet.12") {
                    shape.LinkFormat.AutoUpdate = ppUpdateOptionManual
                }
            }
        }
    }
}
```


```JavaScript
/*本示例遍历活动演示文稿所有幻灯片中的所有形状，将全部链接的 ET 图表设置为自动更新。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            let shape = shapes.Item(j)
            if (shape.OLEFormat.ProgID == "Excel.Chart.8") {
                shape.LinkFormat.AutoUpdate = ppUpdateOptionAutomatic
            }
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/member/Update) | 更新指定的链接 OLE 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [AutoUpdate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/member/AutoUpdate) | 返回或设置更新链接的方法。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/member/Parent) | 返回指定对象的父对象。 |
| [SourceFullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/member/SourceFullName) | 返回或设置链接 OLE 对象的源文件的名称和路径。可读/写。 |
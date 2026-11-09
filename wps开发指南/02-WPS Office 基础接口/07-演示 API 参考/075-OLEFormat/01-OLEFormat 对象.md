# OLEFormat 对象

包含应用于 OLE 对象的属性和方法。

## 说明


 **[LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/obj)** 对象包含仅应用于链接 OLE 对象的属性和方法。 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/obj)** 对象包含应用于图片和 OLE 对象的属性和方法。

使用 **OLEFormat** 属性返回一个 **OLEFormat** 对象。


## 示例


```JavaScript
/*本示例循环访问活动演示文稿中所有幻灯片上的所有形状，并将所有链接的 ET 工作表设置为手动更新。*/
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
/*本示例判断如果活动窗口所选的第一张幻灯片的第一个形状为嵌入或链接的 OLE 对象，则激活该 OLE 对象。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    if (shape.Type == msoLinkedOLEObject || shape.Type == msoEmbeddedOLEObject) {
        shape.OLEFormat.Activate()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/member/Activate) | 激活指定的对象。 |
| [DoVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/member/DoVerb) | 请求 OLE 对象执行其中一个动作。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/member/Parent) | 返回指定对象的父对象。 |
| [ProgID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/member/ProgID) | 返回指定 OLE 对象的程序标识符（ProgID）（程序标识符：窗体 OLEServerName.ObjectName 中的标识符（例如，Excel.Sheet 或 PowerPoint.Slide），由 Windows 注册表用来唯一标识一个对象。）。只读。 |
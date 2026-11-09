# Shape.OLEFormat

返回 **[OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/obj)** 对象，包含指定形状的 OLE 格式属性。适用于代表 OLE 对象的 **Shape** 或 **ShapeRange** 对象。只读。



## 语法

express.**OLEFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

OLEFormat

## 示例


```JavaScript
/*本示例遍历活动演示文稿所有幻灯片中的所有形状，将全部链接的 WPS 文档设为手动更新。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            let shape = shapes.Item(j)
            if (shape.Type == msoLinkedOLEObject) {
                if (shape.OLEFormat.ProgID == "Word.Document.12") {
                    shape.LinkFormat.AutoUpdate = ppUpdateOptionManual
                }
            }
        }
    }
}
```


```JavaScript
/*本示例激活第一个窗口所选的第一张幻灯片的第一个 OLE 对象。*/
function test() {
    let shape = Windows.Item(1).Selection.SlideRange.Item(1).Shapes.Item(1)
    shape.OLEFormat.Activate()
}
```

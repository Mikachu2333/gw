# Shape.LinkFormat

返回 **[LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/obj)** 对象，包含链接的 OLE 对象特有的属性。只读。



## 语法

express.**LinkFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

LinkFormat

## 示例


```JavaScript
/*本示例更新第一个演示文稿内第一张幻灯片上所有形状链接的 OLE 对象。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoLinkedOLEObject) {
            shapes.Item(i).LinkFormat.Update()
        }
    }
}
```


```JavaScript
/*本示例显示当前演示文稿内第一张幻灯片上第一个形状链接的 OLE 对象更新链接的方法是否为ppUpdateOptionAutomatic。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.LinkFormat.AutoUpdate == ppUpdateOptionAutomatic)
}
```

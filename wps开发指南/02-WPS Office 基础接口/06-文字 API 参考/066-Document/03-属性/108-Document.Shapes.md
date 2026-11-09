# Document.Shapes

返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/obj)** 集合，该集合代表指定文档中的所有 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。只读。



## 语法

express.**Shapes**

express   一个代表 **Document** 对象的变量。

## 类型

Shapes

## 说明


该集合可以包含绘图、形状、图片、OLE 对象、ActiveX 控件、文本对象和标注。

 **Shapes** 属性应用于文档时将返回文档主体部分的所有 **Shape** 对象，不包括页眉和页脚。



## 示例


```JavaScript
/*本示例新建一篇文档，为其添加一个矩形，该矩形宽 100 磅，高 50 磅，并设置矩形的左上角距页面左边缘 5 磅，距页面左上角 25 磅。*/
function test() {
    Application.Documents.Add().Shapes.AddShape(msoShapeRectangle, 5, 25, 100, 50)
}
```


```JavaScript
/*本示例为活动文档中所有形状设置填充纹理。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Fill.PresetTextured(msoTextureOak)
    }
}
```


```JavaScript
/*本示例为活动文档中第一个形状添加阴影。*/
function test() {
    ActiveDocument.Shapes.Item(1).Shadow.Type = msoShadow6
}
```

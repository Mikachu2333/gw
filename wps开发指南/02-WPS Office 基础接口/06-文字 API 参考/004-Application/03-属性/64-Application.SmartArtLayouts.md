# Application.SmartArtLayouts

返回 **[SmartArtLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayouts/obj)** 对象，该对象代表应用程序中当前加载的 SmartArt 布局集。只读。



## 语法

express.**SmartArtLayouts**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtLayouts

## 示例


```JavaScript
/*本示例向活动文档中添加 SmartArt 图形，然后设置该 SmartArt 图形的布局。*/
function test() {
    let shape = ActiveDocument.Shapes.AddSmartArt(Application.SmartArtLayouts.Item(1), 50, 50, 200, 200)
    shape.SmartArt.Layout = Application.SmartArtLayouts.Item(15)
}
```


```JavaScript
/*本示例显示第四个 SmartArt 图表关联的主类别名称。*/
function test() {
    alert(Application.SmartArtLayouts.Item(4).Category)
}
```

# Application.SmartArtColors

返回 **[SmartArtColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/obj)** 对象，该对象代表应用程序中当前加载的颜色样式集。只读。



## 语法

express.**SmartArtColors**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtColors

## 说明


 **SmartArtColors** 属性代表的颜色集与 **“系列配色”** 按钮上的可用颜色样式相对应，该按钮位于 WPS 中 **SmartArt 工具** 上下文选项卡上的 **“设计”** 选项卡中。



## 示例


```JavaScript
/*本示例向活动文档中添加 SmartArt 图形，然后设置该 SmartArt 图形的配色方案。*/
function test() {
    let shape = ActiveDocument.Shapes.AddSmartArt(Application.SmartArtLayouts.Item(1), 50, 50, 200, 200)
    shape.SmartArt.Color = Application.SmartArtColors.Item(2)
}
```


```JavaScript
/*本示例在新建文档中插入所有 SmartArt 图形的配色方案的名称。*/
function test() {
    Documents.Add()
    for (let i = 1; i <= Application.SmartArtColors.Count; i++) {
        let smartArtColor = Application.SmartArtColors.Item(i)
        Selection.TypeText(smartArtColor.Name + "\n")
    }
}
```

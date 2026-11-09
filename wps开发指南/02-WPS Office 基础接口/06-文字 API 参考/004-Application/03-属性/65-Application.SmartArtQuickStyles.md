# Application.SmartArtQuickStyles

返回 **[SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/obj)** 对象，该对象代表应用程序中当前加载的 SmartArt 样式集。只读。



## 语法

express.**SmartArtQuickStyles**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtQuickStyles

## 说明


 **SmartArtQuickStyles** 属性代表的样式集与 **“样式”** 组中的可用样式相对应，该组位于 WPS 中 **“SmartArt 工具”** 上下文选项卡上的 **“设计”** 选项卡中。



## 示例


```JavaScript
/*本示例向活动文档中添加 SmartArt 图形，然后设置该 SmartArt 图形的样式。*/
function test() {
    let shape = ActiveDocument.Shapes.AddSmartArt(Application.SmartArtLayouts.Item(1), 50, 50, 200, 200)
    shape.SmartArt.QuickStyle = Application.SmartArtQuickStyles.Item(5)
}
```


```JavaScript
/*本示例显示第二个 SmartArt 图表样式的ID和名称。*/
function test() {
    let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(2)
    alert(`ID：${smartArtQuickStyle.Id}\n名称：${smartArtQuickStyle.Name}`)
}
```

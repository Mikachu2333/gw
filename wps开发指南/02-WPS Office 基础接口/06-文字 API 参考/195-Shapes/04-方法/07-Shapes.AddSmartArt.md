# Shapes.AddSmartArt

将指定 SmartArt 图形插入文档。



## 语法

express.**AddSmartArt(Layout, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | SmartArtLayout | 一个指定 SmartArt 图形的布局的 **[SmartArtLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/obj)** 对象。 |
| Left | 可选 | any | 从页面左边缘到 SmartArt 图形左边缘之间的距离（以磅为单位）。 |
| Top | 可选 | any | 从页面上边缘到 SmartArt 图形上边缘之间的距离（以磅为单位）。 |
| Width | 可选 | any | SmartArt 图形的宽度。 |
| Height | 可选 | any | SmartArt 图形的高度。 |
| Anchor | 可选 | any | 一个代表 SmartArt 所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则定位标记将出现在定位区域第一段的开头。如果省略该参数，将自动选定定位区域，并且相对于页面的上边缘和左边缘放置 SmartArt 图形。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将 SmartArt 图形插入活动文档。*/
function test() {
    let smartArtLayout = Application.SmartArtLayouts.Item(2)
    ActiveDocument.Shapes.AddSmartArt(smartArtLayout)
}
```


```JavaScript
/*本示例将 SmartArt 图形插入到第一个文档上所选区域。*/
function test() {
    let smartArtLayout = Application.SmartArtLayouts.Item(5)
    let document = Documents.Item(1)
    document.Shapes.AddSmartArt(smartArtLayout, 0, 0, 100, 150, document.ActiveWindow.Selection.Range)
}
```

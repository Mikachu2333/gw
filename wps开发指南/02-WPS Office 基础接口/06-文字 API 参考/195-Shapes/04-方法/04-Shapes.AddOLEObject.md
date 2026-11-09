# Shapes.AddOLEObject

创建一个 OLE 对象。返回代表新 OLE 对象的 **Shape** 对象。



## 语法

express.**AddOLEObject(ClassType, FileName, LinkToFile, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | 用于激活指定 OLE 对象的应用程序的名称。 |
| FileName | 可选 | any | 创建对象的文件。如果省略该参数，则使用当前文件夹。必须指定对象的 ClassType 或 FileName 参数，但不能同时指定两者。 |
| LinkToFile | 可选 | any | 如果该参数值为 **True** ，则将 OLE 对象链接到创建该对象的文件。如果该参数值为 **False** ，则 OLE 对象成为该文件的独立副本。如果该参数值为 ClassType 指定了值，则 LinkToFile 参数必须为 **False** 。默认值为 **False** 。 |
| DisplayAsIcon | 可选 | any | 如果该参数值为 **True** ，则将 OLE 对象显示为图标。默认值为 **False** 。 |
| IconFileName | 可选 | any | 包含将要显示的图标的文件。 |
| IconIndex | 可选 | any | IconFileName 内的图标的索引号。当选中“显示为图标”复选框时，指定文件中图标的顺序对应于“更改图标”对话框中图标显示的顺序。文件中的第一个图标的索引号为 0（零）。如果 IconFileName 中不存在指定索引号的图标，则使用索引号为 1 的图标（文件中的第二个图标）。默认值为 0（零）。 |
| IconLabel | 可选 | any | 显示在图标下面的标签（题注）。 |
| Left | 可选 | any | 从页面左边缘到 OLE 对象左边缘之间的距离（以磅为单位）。 |
| Top | 可选 | any | 从页面上边缘到 OLE 对象上边缘之间的距离（以磅为单位）。 |
| Width | 可选 | any | OLE 对象的宽度。 |
| Height | 可选 | any | OLE 对象的高度。 |
| Anchor | 可选 | any | 代表 OLE 对象所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则锁定标记将出现在锁定区域第一段的开头。如果省略该参数，将自动选定锁定区域，而 OLE 对象将相对于页面的上边缘和左边缘进行定位。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在活动文档中添加一个新的浮动位图映射。该位图链接到另一个文件。*/
function test() {
    ActiveDocument.Shapes.AddOLEObject(null, "D:\\示例\\img1.bmp", true)
}
```


```JavaScript
/*本示例在活动文档的第一段中添加一张新的 ET 工作表。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    ActiveDocument.Shapes.AddOLEObject("Excel.Sheet", null, false, false, null, null, null, 20, 20, 50, 50, range)
}
```

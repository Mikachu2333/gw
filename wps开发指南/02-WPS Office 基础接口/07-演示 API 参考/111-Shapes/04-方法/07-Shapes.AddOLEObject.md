# Shapes.AddOLEObject

创建 OLE 对象。返回一个代表新 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddOLEObject(Left, Top, Width, Height, ClassName, FileName, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Link)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 可选 | number（float 精度） | 新对象左上角相对于幻灯片左上角的位置（以磅为单位）。默认值为 0（零）。 |
| Top | 可选 | number（float 精度） | 新对象左上角相对于幻灯片左上角的位置（以磅为单位）。默认值为 0（零）。 |
| Width | 可选 | number（float 精度） | OLE 对象的初始宽度（以磅为单位）。 |
| Height | 可选 | number（float 精度） | OLE 对象的初始高度（以磅为单位）。 |
| ClassName | 可选 | string | OLE 长类名或待创建对象的 ProgID。必须为该对象指定 _ClassName_ 或 _FileName_ 参数，但不能同时指定两者。 |
| FileName | 可选 | string | 要创建的对象的源文件。如果未指定路径，则使用当前工作文件夹。必须为该对象指定 _ClassName_ 或 _FileName_ 参数，但不能同时指定两者。 |
| DisplayAsIcon | 可选 | MsoTriState | 决定是否将 OLE 对象显示为图标。 |
| IconFileName | 可选 | string | 包含将要显示的图标的文件。 |
| IconIndex | 可选 | number（int 精度） | _IconFileName_ 中的图标索引。文件中第一个图标的索引号是 0（零）。如果 _IconFileName_ 中不存在已知索引号的图标，则使用索引号为 1 的图标（文件中的第二个图标）。默认值为 0（零）。 |
| IconLabel | 可选 | string | 显示在图标下面的标签（标题）。 |
| Link | 可选 | MsoTriState | 决定是否将 OLE 对象链接到从中创建该对象的文件。如果已指定 _ClassName_ 的值，则此参数必须是 **msoFalse** 。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加链接的 WPS 文档。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddOLEObject(100, 100, 200, 300, null, "D:\\TestFile\\example1.docx", null, null, null, null, msoTrue)
}
```


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加 ET 工作表。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddOLEObject(100, 100, 200, 300, "Excel.Sheet", null, msoTrue)
}
```


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加命令按钮。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddOLEObject(100, 100, 150, 50, "Forms.CommandButton.1")
}
```

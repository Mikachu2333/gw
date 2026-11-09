# Shapes.AddOLEObject

创建 OLE 对象。返回一个代表新 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



## 语法

express.**AddOLEObject(ClassType, Filename, Link, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | （必须指定 ClassType 或 FileName）。该字符串包含要创建的对象的程序标识符。如果指定了 ClassType 参数，则忽略 FileName 和 Link。 |
| Filename | 可选 | any | 创建对象所用的文件名称。如果未指定路径，则使用当前的工作文件夹。必须为对象指定 ClassType 或 FileName 参数，但不能同时指定。 |
| Link | 可选 | any | 如果为 True，则将 OLE 对象链接到创建该对象所使用的文件；如果为 False，则 OLE 对象成为该文件的独立副本。如果为 ClassType 指定值，则该参数必须为 False。默认值为 False。 |
| DisplayAsIcon | 可选 | any | 如果为 True，则将 OLE 对象显示为图标。默认值为 False。 |
| IconFileName | 可选 | any | 包含将要显示的图标的文件。 |
| IconIndex | 可选 | any | IconFileName 内的图标索引。指定文件中图标的顺序与图标在“更改图标”对话框中出现的顺序相对应（选中“显示为图标”复选框后，可从“对象”对话框访问该对话框）。文件中的第一个图标的索引号为 0（零）。如果 IconFileName 中不存在给定索引号的图标，则使用索引号为 1 的图标（即文件中的第二个图标）。默认值为 0（零）。 |
| IconLabel | 可选 | any | 显示在图标下面的标签（题注）。 |
| Left | 可选 | any | 新对象的左上角相对于文档左上角的位置（以磅为单位）。默认值为 0（零）。 |
| Top | 可选 | any | 新对象的左上角相对于文档顶部的位置 (以磅为单位)。 默认值为 0（零）。 |
| Width | 可选 | any | 以磅为单位给出 OLE 对象的初始尺寸。 |
| Height | 可选 | any | 以磅为单位给出 OLE 对象的初始尺寸。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动工作表中添加链接的 WPS 文档。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.AddOLEObject(null, "c:\\my documents\\testing.doc", true, null, null, null, null, 100, 100, 200, 300)
}
```


```JavaScript
/*本示例向第一张工作表中添加新的命令按钮。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.AddOLEObject("Forms.CommandButton.1", null, null, null, null, null, null, 100, 100, 100, 200)
}
```

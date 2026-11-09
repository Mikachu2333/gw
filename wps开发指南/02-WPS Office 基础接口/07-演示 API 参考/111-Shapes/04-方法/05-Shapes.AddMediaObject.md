# Shapes.AddMediaObject

创建多媒体对象。返回一个代表新多媒体对象的 [Shape ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)对象。




## 语法

express.**AddMediaObject(FileName, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 必选。String 类型。从中创建媒体对象的文件。如果未指定路径，则使用当前工作文件夹。 |
| Left | 可选 | number（float 精度） | 媒体对象边界框左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 可选 | number（float 精度） | 媒体对象边界框左上角相对于文档左上角的位置（以磅为单位）。 |
| Width | 可选 | number（float 精度） | 媒体对象边界框的宽度（以磅为单位）。 |
| Height | 可选 | number（float 精度） | 媒体对象边界框的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向 myDocument 中添加名为“Clock.avi”的影片。*/
function test() 
{
    let myDocument = Application.ActivePresentation.Slides.Item(1)
    myDocument.Shapes.AddMediaObject("C:\\WINNT\\clock.avi", 5, 5, 100, 100)
}
```

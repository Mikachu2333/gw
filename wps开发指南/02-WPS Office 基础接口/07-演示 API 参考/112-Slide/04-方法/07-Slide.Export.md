# Slide.Export

使用指定的图形筛选器导出幻灯片或幻灯片范围，并将导出的文件以指定的文件名保存。



## 语法

express.**Export(FileName, FilterName, ScaleWidth, ScaleHeight)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 将导出并保存到磁盘的文件的名称。可以包括完整路径；如果不包括完整路径，WPP 就会在当前文件夹中创建一个文件。 |
| FilterName | 必选 | string | 要导出幻灯片的图形格式。指定的图形格式必须在 Windows 注册表中注册导出筛选器。可以指定注册的扩展名或注册的筛选器名称。WPP将首先在注册表中搜索匹配的扩展名。如果没有找到与指定字符串匹配的扩展名，WPP将查找匹配的筛选器名称。 |
| ScaleWidth | 可选 | number（int 精度） | 导出幻灯片的宽度（以像素为单位）。 |
| ScaleHeight | 可选 | number（int 精度） | 导出幻灯片的高度（以像素为单位）。 |

## 返回值

void

## 说明


导出一个演示文稿不会将演示文稿的 **Saved** 属性设置为 **True** 。

WPP 使用指定的图形筛选器保存每张单独的幻灯片。导出并保存到磁盘的幻灯片的名称由 WPP 决定。通常情况下，这些文件保存为 Slide1.wmf、Slide2.wmf 等。保存文件的路径在 **FileName** 参数中指定。

如果未完全下载幻灯片，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例将活动演示文稿中第三张幻灯片以 JPEG 图形格式导出到磁盘上。该幻灯片将保存为 Slide 3 of Annual Sales.jpg。*/
function test() {
    let slide = ActivePresentation.Slides.Item(3)
    slide.Export("c:\\my documents\\Graphic Format\\Slide 3 of Annual Sales", "JPG")
}
```


```JavaScript
/*本示例将第一个演示文稿中第一张幻灯片以 PNG 图形格式导出到磁盘上。该幻灯片将保存为 example.png 并设置高度和宽度 。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.Export("c:\\test\\example", "PNG", 500, 500)
}
```

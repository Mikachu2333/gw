# Presentation.Export

使用指定的图形筛选器导出演示文稿中的每张幻灯片，并将导出的文件保存在指定的文件夹中。



## 语法

express.**Export(Path, FilterName, ScaleWidth, ScaleHeight)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 要用来保存导出的幻灯片的文件夹的路径。可以包括完整路径；如果不包括完整路径，WPP 就会在当前文件夹中为导出的幻灯片创建一个子文件夹。 |
| FilterName | 必选 | string | 要导出幻灯片的图形格式。指定的图形格式必须在 Windows 注册表中注册导出筛选器。可以指定注册的扩展名或注册的筛选器名称。WPP将首先在注册表中搜索匹配的扩展名。如果没有找到与指定字符串匹配的扩展名，WPP将查找匹配的筛选器名称。 |
| ScaleWidth | 可选 | number（int 精度） | 导出幻灯片的宽度（以像素为单位）。 |
| ScaleHeight | 可选 | number（int 精度） | 导出幻灯片的高度（以像素为单位）。 |

## 返回值

void

## 说明


导出一个演示文稿不会将演示文稿的 **[Saved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Saved)** 属性设置为 **msoTrue** 。

WPP 使用指定的图形筛选器保存演示文稿中每张单独的幻灯片。导出并保存到磁盘的幻灯片的名称由 WPP 决定。通常情况下，这些文件使用 Slide1.wmf、Slide2.wmf 等名称进行保存。保存文件的路径在 **Path** 参数中指定。

如果未完全下载演示文稿，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例将活动演示文稿另存为 WPP 演示文稿，然后将其中的每个幻灯片导出为移植网络图形（PNG）文件并保存在 Current Work 文件夹中。本示例还将每个导出的幻灯片的高度和宽度均设为 100 像素。*/
function test() {
    let presentation = Application.ActivePresentation
    presentation.SaveAs("D:\\Current Work\\Annual Sales", ppSaveAsPresentation)
    presentation.Export("D:\\Current Work", "png", 100, 100)
}
```


```JavaScript
/*本示例将第一篇演示文稿中的每张幻灯片都导出为“jpg”文件格式的图片，并显示导出图片的数量。*/
function test() {
    let presentation = Presentations.Item(1)
    presentation.Export("D:\\Current Work", "jpg")
    alert(`已将${presentation.Slides.Count}张幻灯片导出为jpg格式的图片`)
}
```

# Presentation.SaveCopyAs

在不修改原文件的情况下将指定演示文稿的副本保存至另一文件。



## 语法

express.**SaveCopyAs(FileName, FileFormat, EmbedTrueTypeFonts)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 指定文件的保存名称。如果不指定完整路径，WPP 会将该文件保存于当前文件夹中。 |
| FileFormat | 可选 | PpSaveAsFileType | 文件格式。 |
| EmbedTrueTypeFonts | 可选 | MsoTriState | 指定是否嵌入 TrueType 字体。 |

## 返回值

void

## 说明


*FileFormat* 参数值可以是 **[PpSaveAsFileType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpSaveAsFileType)** 常量之一。默认值为 **ppSaveAsDefault** 。

*EmbedTrueTypeFonts* 参数值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse**  | 不嵌入 TrueType 字体。 |
| **msoTriStateMixed** | 嵌入的字体是 TrueType 和非 TrueType 的组合。默认值。|
| **msoTrue** | 嵌入 TrueType 字体。 |

如果未完全下载演示文稿，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例以文件名“New Format Copy.pptx”保存当前演示文稿的一个副本。默认情况下，该副本以当前版本的 WPP 演示文稿格式保存，然后以文件名“Old Format Copy”另存为 ppSaveAsPowerPoint4 格式文件。*/
function test() {
    let presentation = Application.ActivePresentation
    presentation.SaveCopyAs("D:\\New Format Copy.pptx")
    presentation.SaveAs("D:\\Old Format Copy", ppSaveAsPowerPoint4)
}
```


```JavaScript
/*本示例以文件名为“TestFile”的 ppSaveAsPowerPoint4 格式文件将第一篇演示文稿的副本保存至该演示文稿所在文件夹中。*/
function test() {
    let path = Presentations.Item(1).Path + "\\TestFile"
    Presentations.Item(1).SaveCopyAs(path, ppSaveAsPowerPoint4, msoTrue)
}
```

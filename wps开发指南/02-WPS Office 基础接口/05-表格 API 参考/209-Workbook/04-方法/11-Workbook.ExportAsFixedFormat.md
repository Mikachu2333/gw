# Workbook.ExportAsFixedFormat

 **ExportAsFixedFormat** 方法用于将工作簿发布为 PDF 或 XPS 格式。



## 语法

express.**ExportAsFixedFormat(Type, Filename, Quality, IncludeDocProperties, IgnorePrintAreas, From, To, OpenAfterPublish, FixedFormatExtClassPtr)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlFixedFormatType | 可以是 **xlTypePDF** ，也可以是 **xlTypeXPS** 。 |
| Filename | 可选 | any | 一个字符串，指示要保存的文件的名称。可以包括完整路径，否则 ET 会将文件保存在当前文件夹中。 |
| Quality | 可选 | any | 可设置为 **xlQualityStandard** 或 **xlQualityMinimum** 。 |
| IncludeDocProperties | 可选 | any | 设置为 **True** 以指明应包含文档属性，或设置为 **False** 以指明应省略文档属性。 |
| IgnorePrintAreas | 可选 | any | 如果设置为 **True** ，则忽略在发布时设置的任何打印区域。如果设置为 **False** ，则使用在发布时设置的打印区域。 |
| From | 可选 | any | 发布的起始页码。如果省略此参数，则从起始位置开始发布。 |
| To | 可选 | any | 发布的终止页码。如果省略此参数，则发布至最后一页。 |
| OpenAfterPublish | 可选 | any | 如果设置为 **True** ，则在发布文件后在查看器中显示文件。如果设置为 **False** ，则发布文件，但不显示文件。 |
| FixedFormatExtClassPtr | 可选 | any | 指向 **FixedFormatExt** 类的指针。 |

## 返回值

void

## 示例


```JavaScript
/*以下示例在当前文件的目录中以标准质量创建 PDF，并在发布后在查看器中显示该文件。 如果当前未安装 PDF 加载项，则会发生错误。*/
function test() {
    ActiveWorkbook.ExportAsFixedFormat(xlTypePDF, "sales.pdf", xlQualityStandard, undefined, undefined, undefined, undefined, true)
}
```


```JavaScript
/*本示例演示将活动工作簿以最低质量导出 PDF，并且只导出第一页和第二页。*/
function test() {
    ActiveWorkbook.ExportAsFixedFormat(xlTypePDF, "book1.pdf", xlQualityMinimum, undefined, undefined, 1, 2)
}
```

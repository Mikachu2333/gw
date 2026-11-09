# Range.ExportAsFixedFormat

导出为指定格式的文件。



## 语法

express.**ExportAsFixedFormat(Type, Filename, Quality, IncludeDocProperties, IgnorePrintAreas, From, To, OpenAfterPublish, FixedFormatExtClassPtr)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlFixedFormatType | 要导出为的文件格式类型。 |
| Filename | 可选 | any | 要保存的文件的文件名。可以包括完整路径，否则 ET 会将文件保存在当前文件夹中。 |
| Quality | 可选 | any | 可选 **[XlFixedFormatQuality](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFixedFormatQuality)** 。指定已发布文件的质量。 |
| IncludeDocProperties | 可选 | any | 若要包括文档属性，则为 **True** ；否则为 **False** 。 |
| IgnorePrintAreas | 可选 | any | 若要忽略发布时设置的任何打印区域，则为 **True** ；否则为 **False** 。 |
| From | 可选 | any | 发布的起始页码。如果省略此参数，则从起始位置开始发布。 |
| To | 可选 | any | 发布的终止页码。如果省略此参数，则发布至最后一页。 |
| OpenAfterPublish | 可选 | any | 若要在发布文件后在查看器中显示文件，则为 **True** ；否则为 **False** 。 |
| FixedFormatExtClassPtr | 可选 | any | 指向 **FixedFormatExt** 类的指针。 |

## 返回值

void

## 说明


此方法还支持初始化加载项，以将文件导出为固定格式的文件。例如，如果存在转换器，则 ET 将执行文件格式转换。转换通常由用户执行。



## 示例


```JavaScript
/*本示例将 A1 单元格的值设置为 a1，并以名称为 test1 保存为 PDF 文件*/
function test() {
    Range("A1").Value2 = 'a1'
    Range("A1").ExportAsFixedFormat(xlTypePDF, "test1")
}
```


```JavaScript
/*本示例将 A1 单元格内容设置为 a1，A2 单元格内容设置为 a2，将 A1:A2 单元格区域以最低质量保存为 PDF，并查看*/
function test() {
    Range("A1").Value2 = 'a1'
    Range("A2").Value2 = 'a2'
    Range("A1:A2").ExportAsFixedFormat(xlTypePDF, "D:\\test2.pdf", xlQualityMinimum, null, null, null, null, true)
}
```

# Document.SaveFormat

返回指定文档或文件转换器的文件格式。只读 **Long** 类型。



## 语法

express.**SaveFormat**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **SaveFormat** 属性将是一个指定外部文件转换器的唯一数字或一个 **WdSaveFormat** 常量。

如果对 **SaveAs2** 方法的 *FileFormat* 参数使用 **SaveFormat** 属性的值，可以将文档保存为没有对应 **WdSaveFormat** 常量的某种文件格式。



## 示例


```JavaScript
/*如果活动文档为 RTF 格式的文档，本示例将其另存为 WPS 文档。*/
function test() {
    if (ActiveDocument.SaveFormat == wdFormatRTF) {
        ActiveDocument.SaveAs(null, wdFormatDocument)
    }
}
```


```JavaScript
/*本示例显示第一个文档的文件格式是否为wdFormatXMLDocument。*/
function test() {
    alert(Documents.Item(1).SaveFormat == wdFormatXMLDocument)
}
```

# FileConverter.SaveFormat

返回指定文档或文件转换器的文件格式。只读 **Long** 类型。




## 语法

express.**SaveFormat**

express   一个代表 **FileConverter** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回一个指定外部文件转换器的唯一数字或一个 **WdSaveFormat** 常量。使用 **SaveAs** 方法的 *FileFormat*参数的 **SaveFormat** 属性值可将文档保存为没有相应的 **WdSaveFormat** 常量的文件格式。




## 示例


```JavaScript
/*以下示例新建一篇文档并在表格中列出可用于保存文档的转换器及其相应的 SaveFormat 值。*/
function FileConverterList() {
    //Create a new document and set a tab stop
    let docNew = Documents.Add()
    docNew.Paragraphs.Format.TabStops.Add(InchesToPoints.Item(3))
    //List all the converters in the FileConverters collection
    let Con = docNew.Content
    Con.InsertAfter("Name" + "\t" + "Number")
    Con.InsertParagraphAfter()
    for(let i=1;i <= FileConverters.Count;i++) {
        if(FileConverters.Item(i).CanSave == true) {
            Con.InsertAfter(FileConverters.Item(i).FormatName + "\t" + FileConverters.Item(i).SaveFormat)
            Con.InsertParagraphAfter()
        }
    }
    Con.ConvertToTable()
}
```


```JavaScript
/*以下示例将活动文档保存为 WordPerfect 5.1 或 5.2 二级文件格式。*/
ActiveDocument.SaveAs(null,FileConverters.Item("WrdPrfctDat").SaveFormat)
```

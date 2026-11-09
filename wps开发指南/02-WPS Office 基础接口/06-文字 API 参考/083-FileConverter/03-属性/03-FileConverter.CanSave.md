# FileConverter.CanSave

如果指定的文件转换器可用来保存文件，则该属性值为 **True** 。 **Boolean** 类型，只读。




## 语法

express.**CanSave**

express   一个代表 **FileConverter** 对象的变量。

## 类型

boolean

## 说明


如果可以使用指定的文件转换器打开（导入）文件，则 **CanOpen** 属性返回 **True** 。




## 示例


```JavaScript
/*本示例判断能否用 WordPerfect 转换器来保存文件。如果返回值为 True，则以 WordPerfect 6.x 格式保存活动文档。*/
function test()
{
if(Application.FileConverters.Item("WordPerfect6x").CanSave == true) {
    let lngSaveFormat = Application.FileConverters.Item("WordPerfect6x").SaveFormat
    ActiveDocument.SaveAs("C:\\Document.wp", lngSaveFormat)
}
}
```


```JavaScript
/*本示例显示一条消息，以表明 FileConverters 集合的第三个转换器能否用来保存文件。*/
function test()
{
if(FileConverters.Item(3).CanSave == true) {
    MsgBox(FileConverters.Item(3).FormatName + " can save files")
}
else {
    MsgBox(FileConverters.Item(3).FormatName + " cannot save files")
}
}
```

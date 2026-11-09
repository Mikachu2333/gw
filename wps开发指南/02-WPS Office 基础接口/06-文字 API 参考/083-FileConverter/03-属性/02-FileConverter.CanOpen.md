# FileConverter.CanOpen

如果指定的文件转换器可用来打开文件，则该属性值为 **True** 。 **Boolean** 类型，只读。




## 语法

express.**CanOpen**

express   一个代表 **FileConverter** 对象的变量。

## 类型

boolean

## 说明


如果 **CanSave** 属性返回 **True** ，则可以用指定的文件转换器保存（导出）文件。




## 示例


```JavaScript
/*本示例判断能否用第一个文件转换器打开文件。*/
function test()
{
if(FileConverters.Item(1).CanOpen == true) {
    MsgBox(FileConverters.Item(1).FormatName + " can open files")
}
}


```


```JavaScript
/*本示例判断能否用 WordPerfect6x 文件转换器打开文件。如果 CanOpen 属性返回 True，则打开名为“Test.wp”的文档。*/
function test()
{
if(FileConverters.Item("WordPerfect6x").CanOpen == true) {
    Documents.Open("C:\\Test.wp",null,null,null,null,null,null,null,null,FileConverters.Item("WordPerfect6x").OpenFormat)
}
}
```

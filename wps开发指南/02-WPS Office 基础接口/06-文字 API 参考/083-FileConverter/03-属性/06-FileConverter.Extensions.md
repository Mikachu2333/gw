# FileConverter.Extensions

返回与指定 **FileConverter** 对象关联的文件扩展名。 **String** 类型，只读。




## 语法

express.**Extensions**

express   一个代表 **FileConverter** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文件转换器的名称和文件扩展名。*/
function test()
{
let fcTemp = FileConverters.Item(1)
MsgBox("The file name extensions for " + fcTemp.FormatName + " files are: " + fcTemp.Extensions)
}
```

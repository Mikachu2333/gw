# FileConverter.OpenFormat

返回指定文件转换器的文件格式。 **Long** 类型，只读。




## 语法

express.**OpenFormat**

express   一个代表 **FileConverter** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是任何有效的 **WdOpenFormat** 常量，也可以是代表外部文件转换器的唯一数字。




## 示例


```JavaScript
/*本示例显示可用来打开文档的转换器的唯一的格式值和格式名称。*/
function test()
{
for(let i=1;i <= FileConverters.Count;i++) {
    if(FileConverters.Item(i).CanOpen == true) {
        MsgBox(FileConverters.Item(i).OpenFormat + "\r" + FileConverters.Item(i).FormatName)
    }
}
}
```


```JavaScript
/*本示例使用 WordPerfect 6x 文件转换器打开名为“Data.wp”的文件。*/
Documents.Open("C:\\Data.wp",null,null,null,null,null,null,null,null,FileConverters.Item("WordPerfect6x").OpenFormat)
```

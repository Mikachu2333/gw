# FileConverter.FormatName

返回指定文件转换器的名称。 **String** 类型，只读。




## 语法

express.**FormatName**

express   一个代表 **FileConverter** 对象的变量。

## 类型

string

## 说明


格式名称显示在 **“文件”** 菜单 **“另存为”** 对话框中的 **“保存类型”** 框中。




## 示例


```JavaScript
/*本示例显示 FileConverters 集合中的第一个文件转换器的格式名称。*/
MsgBox(FileConverters.Item(1).FormatName)
```


```JavaScript
/*本示例用 AvailableConv() 数组保存所有有效文件转换器的名称。*/
function test()
{
let AvailableConv = []
let intTemp = 0
for(let i=1;i <= FileConverters.Count;i++) {
    AvailableConv[intTemp] = FileConverters.Item(i).FormatName
    intTemp++
}
}
```

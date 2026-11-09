# FileConverter.ClassName

返回用来标识文件转换器的唯一名字。 **String** 类型，只读。




## 语法

express.**ClassName**

express   一个代表 **FileConverter** 对象的变量。

## 类型

string

## 示例
---



```JavaScript
/*本示例显示 FileConverters 集合中第一个转换器的类名和格式名。*/
MsgBox("ClassName= " + FileConverters.Item(1).ClassName + "\r" + "FormatName= " + FileConverters.Item(1).FormatName)
```


```JavaScript
/*如果 HTML 文件转换器有效，本示例将 HTML 设为默认保存格式。*/
function test()
{
for(let i=1;i <= FileConverters.Count;i++) {
    if(FileConverters.Item(i).ClassName == "HTML") {
        Application.DefaultSaveFormat = "HTML"
    }
}
}
```

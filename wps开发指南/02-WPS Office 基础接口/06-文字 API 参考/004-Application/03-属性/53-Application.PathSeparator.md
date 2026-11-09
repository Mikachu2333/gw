# Application.PathSeparator

返回用于分隔文件夹名称的字符。在 Windows 中，该属性返回一个反斜线 (\\)。只读 **String** 类型。



## 语法

express.**PathSeparator**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


可以用 **PathSeparator** 属性建立网站地址，即使它们包含正斜线 (/) 也是如此。

 **FullName** 属性返回路径和文件名称，包括路径分隔符，作为单个字符串。



## 示例


```JavaScript
/*本示例显示活动文档的路径和文件名。*/
function test() {
    alert(Application.ActiveDocument.Path + Application.PathSeparator + Application.ActiveDocument.Name)
}
```


```JavaScript
/*如果第一个加载项是模板，本示例卸载该模板并打开它。*/
function test() {
    if (!Application.AddIns.Item(1).Compiled) {
        Application.AddIns.Item(1).Installed = false
        Application.Documents.Open(Application.AddIns.Item(1).Path + Application.PathSeparator + Application.AddIns.Item(1).Name)
    }
}
```

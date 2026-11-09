# AddIn.Path

返回已安装加载项的位置。 **String** 类型，只读。



## 语法

express.**Path**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 说明


此路径不包括尾随字符，例如，“C:\\WPSOffice”或“http\://MyServer”。使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符。使用 **Name** 属性可返回不带路径的文件名，而使用 **FullName** 属性可同时返回文件名和路径。

可以使用 **PathSeparator** 属性建立 Web 地址，即使此地址中包含正斜杠 (/)，而 **PathSeparator** 属性默认使用反斜杠 (\\)。



## 示例


```JavaScript
/*本示例显示第一个加载项的路径。*/
function test() {
    if (Application.AddIns.Count >= 1) {
        alert(Application.AddIns.Item(1).Path)
    }
}
```


```JavaScript
/*本示例判断如果第一个加载项是模板，则打开该模板。*/
function test() {
    let addIn = Application.AddIns.Item(1)
    if (!addIn.Compiled) {
        Documents.Open(addIn.Path + Application.PathSeparator + addIn.Name)
    }
}
```

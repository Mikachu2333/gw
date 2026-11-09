# Dictionary.Path

返回指定词典的路径。只读 **String** 类型。



## 语法

express.**Path**

express   一个代表 **Dictionary** 对象的变量。

## 类型

string

## 说明


此路径不包括尾随字符，例如，“C:\\KSOffice”或“http\://MyServer”。使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符。使用 **Name** 属性可返回不带路径的文件名，而使用 **FullName** 属性可同时返回文件名和路径。

可以使用 **PathSeparator** 属性建立 Web 地址，即使地址中包含正斜杠 (/)（ **PathSeparator** 属性默认使用反斜杠 (\\)）。



## 示例


```JavaScript
/*本示例显示第一个自定义词典的路径。*/
function test() {
    let dictionary = Application.CustomDictionaries.Item(1)
    alert(dictionary.Path)
}
```


```JavaScript
/*本示例将所选内容的文本替换为所有自定义词典的名称和路径。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        str += dictionary.Name + "\t" + dictionary.Path + "\n"
    }
    Selection.Range.Text = str
}
```

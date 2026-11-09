# RecentFile.Path

返回指定对象的磁盘或 Web 路径。只读 **String** 类型。



## 语法

express.**Path**

express   一个代表 **RecentFile** 对象的变量。

## 类型

string

## 说明


该路径不包括尾部字符，例如，“C:\\KSOffice”或“http\://MyServer”。使用 **[PathSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PathSeparator)** 属性可添加分隔文件夹与驱动器号的字符，使用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Name)** 属性可返回不带路径的文件名。



## 示例


```JavaScript
/*本示例显示最近使用的第一个文件的路径。*/
function test() {
    alert(Application.RecentFiles.Item(1).Path)
}
```


```JavaScript
/*本示例将所选内容的文本替换为最近使用的文件的名称和路径。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.RecentFiles.Count; i++) {
        let recentFile = Application.RecentFiles.Item(i)
        str += recentFile.Name + "\t\t" + recentFile.Path + "\n"
    }
    Selection.Range.Text = str
}
```

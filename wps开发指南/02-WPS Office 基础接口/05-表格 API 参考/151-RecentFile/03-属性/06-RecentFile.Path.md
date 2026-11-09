# RecentFile.Path

返回一个 **String** 值，该值代表此 **RecentFile** 对象表示的工作簿或文件的完整路径。



## 语法

express.**Path**

express   一个代表 **RecentFile** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示最近使用的文件列表中的第一个文件的完整路径。*/
function test() {
    let recentFile = Application.RecentFiles.Item(1)
    alert(recentFile.Path)
}
```


```JavaScript
/*本示例将最近使用的文件列表中的第三个文件的完整路径赋值到 A1 单元格。*/
function test() {
    Range("A1").Value2 = Application.RecentFiles.Item(3).Path
}
```

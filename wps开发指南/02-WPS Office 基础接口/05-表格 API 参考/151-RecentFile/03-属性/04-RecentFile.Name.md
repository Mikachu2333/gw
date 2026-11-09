# RecentFile.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **RecentFile** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示最近使用的文件列表中的第三个文件的名称。*/
function test() {
    alert(Application.RecentFiles.Item(3).Name)
}
```


```JavaScript
/*本示例显示最近使用的文件列表中的最后一个文件的名称。*/
function test() {
    alert(Application.RecentFiles.Item(Application.RecentFiles.Count).Name)
}
```

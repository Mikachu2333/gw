# RecentFile.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **RecentFile** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示最近使用的第一个文件的名称。*/
function test() {
    alert(Application.RecentFiles.Item(1).Name)
}
```


```JavaScript
/*本示例将最近使用的最后一个文件的名称插入到光标处。*/
function test() {
    let count = Application.RecentFiles.Count
    Selection.TypeText(Application.RecentFiles.Item(count).Name)
}
```

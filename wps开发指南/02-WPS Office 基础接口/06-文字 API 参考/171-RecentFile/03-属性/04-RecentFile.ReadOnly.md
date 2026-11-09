# RecentFile.ReadOnly

如果对文档的更改不能保存到原文档，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**ReadOnly**

express   一个代表 **RecentFile** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将最近使用的第一个文件作为只读文档打开。*/
function test() {
    let recentFile = Application.RecentFiles.Item(1)
    recentFile.ReadOnly = true
    recentFile.Open()
}
```


```JavaScript
/*本示例显示是否保存对最近使用的最后一个文件的更改。*/
function test() {
    let count = Application.RecentFiles.Count
    alert(!Application.RecentFiles.Item(count).ReadOnly)
}
```

# RecentFile.Open

打开一个最近使用的工作簿。



## 语法

express.**Open()**

express   一个代表 **RecentFile** 对象的变量。

## 返回值

一个代表打开的工作簿的 Workbook 对象。

## 示例


```JavaScript
/*本示例打开最近使用的文件列表中的第二个工作簿。*/
function test() {
    Application.RecentFiles.Item(2).Open()
}
```


```JavaScript
/*本示例判断如果最近使用的文件列表中的第四个工作簿的名称为“example.xlsx”，则打开该工作簿。*/
function test() {
    let recentFile = Application.RecentFiles.Item(4)
    if (recentFile.Name == "example.xlsx") {
        recentFile.Open()
    }
}
```

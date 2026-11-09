# AddIn.Path

返回一个 **String** 值，它代表应用程序的完整路径，不包括末尾的分隔符和应用程序名称。



## 语法

express.**Path**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个加载宏的完整路径。*/
function test() {
    let addin = Application.AddIns.Item(1)
    alert(addin.Path)
}
```


```JavaScript
/*本示例将所有加载宏的完整路径赋值到活动工作表上的单元格中。*/
function test() {
    let addins = Application.AddIns
    for (let i = 1; i <= addins.Count; i++) {
        ActiveSheet.Cells.Item(i, 1).Value2 = addins.Item(i).Path
    }
}
```

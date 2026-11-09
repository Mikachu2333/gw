# Name.RefersTo

用宏语言以 A1 样式表示法返回或设置名称所引用的公式（以等号开头）。 **String** 类型，可读写。



## 语法

express.**RefersTo**

express   一个代表 **Name** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例创建活动工作簿中所有名称的列表，并用宏语言以 A1 样式表示法表示这些名称所引用的公式。该列表将出现在本示例新建的工作表中。*/
function test() {
    let newSheet = Application.Worksheets.Add()
    let i = 1
    for (let nm = 1; nm <= Application.ActiveWorkbook.Names.Count; nm++) {
        newSheet.Cells.Item(i, 1).Value2 = Application.ActiveWorkbook.Names.Item(nm).Name
        newSheet.Cells.Item(i, 2).Value2 = "'" + Application.ActiveWorkbook.Names.Item(nm).RefersTo
        i = i + 1
    }
    newSheet.Columns.Item("A:B").AutoFit()
}
```


```JavaScript
/*本示例用宏语言以 A1 样式表示法设置索引号为3的名称所引用的公式。*/
function test() {
    ActiveWorkbook.Names.Item(3).RefersTo = "=Sheet1!$H$4"
}
```

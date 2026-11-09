# Worksheet.ScrollArea

以 A1 样式的区域引用形式返回或设置允许滚动的区域。用户不能选定滚动区域之外的单元格。 **String** 类型，可读写。



## 语法

express.**ScrollArea**

express   一个代表 **Worksheet** 对象的变量。

## 类型

string

## 说明


可将该属性设置为空字符串 ("") 以允许对整张工作表内所有单元格的选定。



## 示例


```JavaScript
/*本示例设置第一张工作表的滚动区域。*/
function test() {
    Worksheets.Item(1).ScrollArea = "A1:F10"
}
```


```JavaScript
/*本示例设置允许用户对活动工作簿中每一张工作表内所有单元格的选定，并通知用户。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Worksheets.Item(i)
        sheet.ScrollArea = ""
        alert(`允许对 ${sheet.Name} 整张工作表内所有单元格的选定`)
    }
}
```

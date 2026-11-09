# Workbook.CodeName

返回对象的代码名。 **String** 型，只读。



## 语法

express.**CodeName**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 说明


在“属性”窗口中“（名称）”右边的单元格中显示的值是所选对象的代码名。可以在设计过程中通过更改该值来改变对象的代码名。不能在运行过程中更改该属性。

对于一个返回指定对象的表达式，该表达式可使用对象的代码名。例如，如果第一张工作表的代码名为 Sheet1，则下列表达式是等价的。

```JavaScript
Worksheets.Item(1).Range("A1")
Sheet1.Range("A1")
```

工作表的名称可以与其代码名不同。创建一张工作表时，其工作表名称和代码名是相同的，不过，更改工作表名称时并不影响其代码名，并且，更改工作表代码名（在 JavaScript 编辑器中使用“属性”窗口）也不影响其名称。



## 示例


```JavaScript
/*此示例显示第一张工作簿的代码名。*/
function test() {
    alert(Workbooks.Item(1).CodeName)
}
```


```JavaScript
/*此示例将活动工作簿的代码名赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = ActiveWorkbook.CodeName
}
```

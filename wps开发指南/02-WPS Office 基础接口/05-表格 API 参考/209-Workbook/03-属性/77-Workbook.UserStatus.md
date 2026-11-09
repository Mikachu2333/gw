# Workbook.UserStatus

返回一个基为 1 的二维数组，该数组提供有关每一个以共享列表模式打开工作簿的用户的信息。 **Variant** 类型，只读。



## 语法

express.**UserStatus**

express   一个代表 **Workbook** 对象的变量。

## 类型

any

## 说明


数组第二维的第一个元素为用户名，第二个元素是用户打开工作簿的日期和时间，第三个元素是一个表示清单类型的数字（1 表示独占，2 表示共享）。

 **UserStatus** 属性不返回有关以只读方式打开指定工作簿的用户的信息。



## 示例


```JavaScript
/*本示例新建一个工作簿，并将所有以共享清单模式打开活动工作簿的用户的信息插入新工作簿。*/
function test() {
    let users = ActiveWorkbook.UserStatus
    let sheet = Workbooks.Add().Sheets.Item(1)
    for (let row = 0; row < users.length; row++) {
        sheet.Cells.Item(row + 1, 1).Value2 = users[row][0]
        sheet.Cells.Item(row + 1, 2).Value2 = users[row][1]
        switch (users[row][2]) {
            case 1:
                sheet.Cells.Item(row + 1, 3).Value2 = "Exclusive"
                break
            case 2:
                sheet.Cells.Item(row + 1, 3).Value2 = "Shared"
        }
    }
}
```


```JavaScript
/*本示例将有关每一个以共享列表模式打开工作簿的用户的信息赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = ActiveWorkbook.UserStatus.toString()
}
```

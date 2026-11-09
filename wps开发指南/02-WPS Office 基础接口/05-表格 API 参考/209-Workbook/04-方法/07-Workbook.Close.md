# Workbook.Close

关闭对象。



## 语法

express.**Close(SaveChanges, Filename, RouteWorkbook)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SaveChanges | 可选 | any | 如果工作簿中没有改动，则忽略此参数。如果工作簿中有改动但工作簿显示在其他打开的窗口中，则忽略此参数。如果工作簿中有改动且工作簿未显示在任何其他打开的窗口中，则由此参数指定是否应保存更改。如果设为 True，则保存对工作簿所做的更改。如果工作簿尚未命名，则使用 FileName。如果省略 Filename，则要求用户提供文件名。 |
| Filename | 可选 | any | 以此文件名保存所做的更改。 |
| RouteWorkbook | 可选 | any | 如果工作簿不需要传送给下一个收件人（没有传送名单或已经传送），则忽略此参数。否则，ET 根据此参数的值传送工作簿。如果设为 True，则将工作簿传送给下一个收件人。如果设为 False，则不发送工作簿。如果忽略，则要求用户确认是否发送工作簿。 |

## 返回值

void

## 示例


```JavaScript
/*此示例关闭 Book1.xls，并放弃所有对此工作簿的更改。*/
function test() {
    Application.Workbooks.Item("BOOK1.XLS").Close(false)
}
```


```JavaScript
/*此示例关闭第一个工作簿同时另存为Book1.xlsx。*/
function test() {
    Application.Workbooks.Item(1).Close(true, "Book1.xlsx")
}
```

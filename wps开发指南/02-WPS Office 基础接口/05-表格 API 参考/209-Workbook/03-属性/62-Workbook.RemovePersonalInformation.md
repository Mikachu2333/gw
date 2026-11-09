# Workbook.RemovePersonalInformation

如果能从指定的工作簿中删除个人信息，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**RemovePersonalInformation**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 判断是否能从指定的工作簿中删除个人信息，并通知用户。*/
function test() {
    let wkbOne = Application.ActiveWorkbook
    //Determine settings and notify user.
    if (wkbOne.RemovePersonalInformation) {
        MsgBox("Personal information can be removed.")
    } else {
        MsgBox("Personal information cannot be removed.")
    }
}
```


```JavaScript
/*在本示例将第一个工作簿中RemovePersonalInformation属性的值设置为true，并通知用户。*/
function test() {
    Workbooks.Item(1).RemovePersonalInformation = true
    alert("已将工作簿中RemovePersonalInformation属性的值设置为true。")
}
```

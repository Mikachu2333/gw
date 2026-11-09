# Workbook.WriteReservedBy

返回当前对指定工作簿有写权限的用户的名称。 **String** 类型，只读。



## 语法

express.**WriteReservedBy**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*如果当前工作簿是写保护的，本示例将显示一则消息，其中包含将该工作簿以写保护方式保存的用户的名称。*/
function test() {
    if (ActiveWorkbook.WriteReserved) {
        MsgBox(`Please contact ${ActiveWorkbook.WriteReservedBy} if you need to insert data in this workbook.`)
    }
}
```


```JavaScript
/*本示例设置工作簿的写密码，并通知用户有写权限的用户的名称。*/
function test() {
    Workbooks.Item(1).WritePassword = "Y6dh!et5"
    alert(Workbooks.Item(1).WriteReservedBy)
}
```

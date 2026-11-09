# Workbook.WriteReserved

如果指定工作簿是写保护的，则该属性的值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**WriteReserved**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


可用 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs)** 方法设置该属性。



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
/*本示例另存活动工作簿，判断活动工作簿是否为写保护，并通知用户。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, "Y6dh!et5")
    if (ActiveWorkbook.WriteReserved) {
        alert("活动工作簿已开启写保护")
    }
}
```

# Workbook.HasPassword

如果指定工作簿有密码保护，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**HasPassword**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


可以使用 [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs) 方法为工作簿分配一个保护密码。



## 示例


```JavaScript
/*本示例检查活动工作簿是否有密码保护，如果有则显示一条消息。*/
function test() {
    if (Application.ActiveWorkbook.HasPassword == true) {
        alert("Remember to obtain the workbook password" + "\r" + " from the Network Administrator.")
    }
}
```


```JavaScript
/*本示例演示HasPassword的数据类型。*/
function test() {
    alert("HasPassword的数据类型为：" + typeof (Application.ActiveWorkbook.HasPassword))
}
```

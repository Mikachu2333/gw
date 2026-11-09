# Workbook.Password

返回或设置在打开指定工作簿时必须提供的密码。 **String** 类型，可读写。



## 语法

express.**Password**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 说明


请使用组合大小写字母、数字和符号的强密码。弱密码不混合使用这些元素。

强密码：Y6dh!et5
弱密码：House27

密码的长度应为 8 个或更多字符。使用 14 个或更多字符的通行短语更好。记住密码至关重要。如果您忘记了密码，Kingsoft 无法找回它。请将您编写的密码保存在安全的位置并远离它们要帮助保护的信息。



## 示例


```JavaScript
/*在本示例中，ET 打开名为 Password.xls 的工作簿，设置它的密码，然后关闭该工作簿。本示例假定名为 Password.xls 的文件位于 C:\\ 驱动器上。*/
function test() {
    let wkbOne = Application.Workbooks.Open("C:\\Password.xls")
    wkbOne.Password = InputBox ("Enter Password")
    wkbOne.Close()
}
```


```JavaScript
/*本示例将活动工作簿设置密码 Y6dh!et5 并另存为book1.xlsx，点击确定后将密码修改为 Y6dh!et1 。*/
function test() {
    ActiveWorkbook.SaveAs("book1.xlsx", undefined, "Y6dh!et5")
    alert("点击 “确定” 后将修改密码！")
    ActiveWorkbook.Password = "Y6dh!et1"
}
```

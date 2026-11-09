# Workbook.WritePassword

为工作簿的写密码返回或设置一个 **String** 类型的数值。可读写。



## 语法

express.**WritePassword**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*在本示例中，如果活动工作簿不能进行写保护，那么 ET 设置字符串密码以作为活动工作簿的写密码。*/
function test() {
    strPassword = InputBox ("Enter the password")
    //Set password to a string if allowed.
    if (!ActiveWorkbook.WriteReserved) {
        ActiveWorkbook.WritePassword = strPassword
    }
}
```


```JavaScript
/*本示例演示为每一个工作簿设置一个写密码。*/
function test() {
    for (let i = 1; i <= Workbooks.Count; i++) {
        Workbooks.Item(i).WritePassword = "Y6dh!et5"
    }
}
```

# Application.UserInitials

该属性返回或设置用户名缩写，WPS 使用该缩写构成批注标记。 **String** 类型，可读写。



## 语法

express.**UserInitials**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置用户名缩写。*/
function test() {
    Application.UserInitials = "baa"
}
```


```JavaScript
/*本示例显示“选项”对话框中“用户信息”选项卡上“缩写”框中的内容。*/
function test() {
    alert(Application.UserInitials)
}
```

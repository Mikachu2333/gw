# Application.UserName

该属性返回或设置用户姓名，WPS 将其用于信封和文档的“作者”属性。 **String** 类型，可读写。



## 语法

express.**UserName**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置用户姓名。*/
function test() {
    Application.UserName = "Andrew Fuller"
}
```


```JavaScript
/*本示例显示“选项”对话框中“用户信息”选项卡上“姓名”框中的姓名。*/
function test() {
    alert(Application.UserName)
}
```

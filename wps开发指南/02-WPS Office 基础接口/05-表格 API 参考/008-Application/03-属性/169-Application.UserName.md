# Application.UserName

返回或设置当前用户的名称。 **String** 类型，可读写。



## 语法

express.**UserName**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示当前用户的名称。*/
function test() {
    MsgBox("Current user is " + Application.UserName)
}
```


```JavaScript
/*本示例演示用UserName属性设置当前用户的名称，并显示当前用户的名称。*/
function test() {
    Application.UserName = "小明"
    alert("当前用户的名称为：" + Application.UserName)
}
```

# Application.TransitionMenuKey

返回或设置 ET 菜单或帮助键，通常为“/”。 **String** 类型，可读写。



## 语法

express.**TransitionMenuKey**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将切换菜单键设置为/(这是默认)。*/
function test() {
    Application.TransitionMenuKey = "/"
}
```


```JavaScript
/*本示例演示TransitionMenuKey属性的数据类型，并将切换菜单键设置为t。*/
function test() {
    alert("TransitionMenuKey属性的数据类型：" + typeof Application.TransitionMenuKey)
    Application.TransitionMenuKey = "t"
}
```

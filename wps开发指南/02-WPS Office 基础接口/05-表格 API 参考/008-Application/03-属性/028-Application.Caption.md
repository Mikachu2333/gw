# Application.Caption

返回或设置一个 **String** 值，它代表出现在 ET 主窗口标题栏中显示的名称。



## 语法

express.**Caption**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


如果未设置该名称，或将其设置为 **Empty** , 则此属性返回“ET”。



## 示例


```JavaScript
/*此示例将出现在 ET 主窗口标题栏中的名称设置为自定义的名称。*/
function test() {
    Application.Caption = "KingSoft"
}
```


```JavaScript
/*此示例显示Caption的数据类型。*/
function test() {
    alert("Caption的数据类型为：" + typeof (Application.Caption))
}
```

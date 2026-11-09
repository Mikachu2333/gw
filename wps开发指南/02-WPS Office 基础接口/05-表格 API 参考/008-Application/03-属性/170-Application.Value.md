# Application.Value

返回一个代表应用程序名称的 **String** 值。



## 语法

express.**Value**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


此属性始终返回 "Microsoft Excel"。



## 示例


```JavaScript
/*此示例显示应用程序名称的长度*/
function test() {
    alert(Application.Value.length)
}
```


```JavaScript
/*此示例显示应用程序名称*/
function test() {
    alert(Application.Value)
}
```

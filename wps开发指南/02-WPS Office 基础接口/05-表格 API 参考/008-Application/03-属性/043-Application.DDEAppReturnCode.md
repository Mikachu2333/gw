# Application.DDEAppReturnCode

返回带应用程序说明符的 DDE 返回代码，该代码包含在 ET 接收到的最后一个 DDE 确认消息中。 **Long** 类型，只读。



## 语法

express.**DDEAppReturnCode**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 appErrorCode 变量值为 DDE 返回代码。*/
function test() {
    let appErrorCode = Application.DDEAppReturnCode
}
```


```JavaScript
/*本示例演示DDE返回代码和DDEAppReturnCode属性的数据类型。*/
function test() {
    alert(`DDE返回代码为：${Application.DDEAppReturnCode}\nDDEAppReturnCode属性的数据类型为：${typeof Application.DDEAppReturnCode}`)
}
```

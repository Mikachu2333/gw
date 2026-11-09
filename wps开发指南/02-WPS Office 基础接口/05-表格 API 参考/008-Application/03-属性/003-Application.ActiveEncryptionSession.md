# Application.ActiveEncryptionSession

返回一个 **Long** ，该值表示与活动文档相关联的加密会话。 此为只读属性。



## 语法

express.**ActiveEncryptionSession**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例演示与活动文档相关联的加密会话。*/
function test() {
    alert(Application.ActiveEncryptionSession)
}
```


```JavaScript
/*本示例演示 ActiveEncryptionSession 属性的数据类型。*/
function test() {
    alert(typeof Application.ActiveEncryptionSession)
}
```

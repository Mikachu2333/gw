# Application.ProductCode

返回 ET 的全球唯一标识符 (GUID)。 **String** 类型，只读。



## 语法

express.**ProductCode**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示 ET 的 GUID。*/
function test() {
    MsgBox(Application.ProductCode)
}
```


```JavaScript
/*本示例显示 ProductCode 属性的数据类型。*/
function test() {
    alert("ProductCode属性的数据类型为：" + typeof Application.ProductCode)
}
```

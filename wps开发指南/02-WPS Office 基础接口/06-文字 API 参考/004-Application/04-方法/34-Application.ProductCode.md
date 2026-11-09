# Application.ProductCode

返回一个 **String** 类型的 WPS 全局唯一标识符（GUID）。



## 语法

express.**ProductCode()**

express   一个代表 **Application** 对象的变量。

## 返回值

String

## 示例


```JavaScript
/*本示例显示 WPS 的全局唯一标识符（GUID）。*/
function test() {
    alert(Application.ProductCode())
}
```


```JavaScript
/*本示例在光标处插入 WPS 应用程序的名称和 WPS 的全局唯一标识符（GUID）。*/
function test() {
    Selection.TypeText(`${Application.Name}\t${Application.ProductCode()}`)
}
```

# Application.MapPaperSize

如果自动调整以其他国家/地区的标准纸张大小（例如，A4）来设置格式的文档，以便以用户所在的国家/地区的标准纸张大小（例如，信件）来正确地打印文档，则该值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MapPaperSize**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断 ET 是否能按照国家/地区设置来调整纸张大小，并通知用户。*/
function test() {
    // Determine setting and notify user.
    if (Application.MapPaperSize) {
        alert("ET automatically adjusts the paper size according to the country/region setting.")
    } else {
        alert("ET does not automatically adjusts the paper size according to the country/region setting.")
    }
}
```


```JavaScript
/*本示例显示 ET 是否能按照国家/地区设置来调整纸张大小。*/
function test() {
    alert(Application.MapPaperSize)
}
```

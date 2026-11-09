# Options.OptimizeForWord97byDefault

如果 WPS 将禁用所有不兼容的格式，以便优化在 WPS 97 中查看新文档，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**OptimizeForWord97byDefault**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


若要为 WPS 97 优化单个文档，可用 **[OptimizeForWord97](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/OptimizeForWord97)** 属性。



## 示例


```JavaScript
/*本示例实现的功能是：先设定 WPS 禁用新文档中所有与 WPS 97 不兼容的格式，然后新建一个文档，其 OptimizeForWord97 属性自动设置为 false。*/
function test() {
    Options.OptimizeForWord97byDefault = true
    alert(Documents.Add(null, null, wdNewBlankDocument).OptimizeForWord97)
}
```


```JavaScript
/*本示例判断如果 WPS 将禁用所有不兼容的格式，以便优化在 WPS 97 中查看新文档，则通知用户。*/
function test() {
    if (Options.OptimizeForWord97byDefault) {
        alert("WPS 将禁用所有不兼容的格式，以便优化在 WPS 97 中查看新文档。")
    }
}
```

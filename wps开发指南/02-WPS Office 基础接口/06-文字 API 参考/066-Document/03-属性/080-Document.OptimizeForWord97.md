# Document.OptimizeForWord97

如果 WPS 通过禁用所有不兼容的格式来优化当前文档，以便在 WPS 97 中查看，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**OptimizeForWord97**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


若要为 WPS 97 按默认设置优化所有的新文档，可用 **[OptimizeForWord97byDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/OptimizeForWord97byDefault)** 属性。



## 示例


```JavaScript
/*本示例检查当前文档是否针对 WPS 97 进行过优化。如果没有，则询问用户是否进行优化。*/
function test() {
    if (!ActiveDocument.OptimizeForWord97) {
        let response = MsgBox("Is this document targeted at WPS 97 users?", jsYesNo)
        if (response == jsResultYes) {
            ActiveDocument.OptimizeForWord97 = true
        }
    }
}
```


```JavaScript
/*本示例判断第一个文档是否针对 WPS 97 进行过优化，并通知用户。*/
function test() {
    if (Documents.Item(1).OptimizeForWord97) {
        alert("文档已针对WPS 97进行优化")
    } else {
        alert("文档没有针对WPS 97进行优化")
    }
}
```

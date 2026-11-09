# Field.Result

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表域的结果。可读写。



## 语法

express.**Result**

express   一个代表 **Field** 对象的变量。

## 类型

Range

## 说明


无需改变域代码的显示方式即可获得一个域结果。使用 **Text** 属性可返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象中的文本。



## 示例


```JavaScript
/*本示例对所选内容中的第一个域应用加粗格式。*/
function test() {
    if (Selection.Fields.Count >= 1) {
        let range = Selection.Fields.Item(1).Result
        range.Bold = true
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个域的结果的文本。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    alert(field.Result.Text)
}
```

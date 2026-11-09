# Field.Code

返回一个代表域代码的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。可读写。



## 语法

express.**Code**

express   一个代表 **Field** 对象的变量。

## 类型

Range

## 说明


域代码是包含在域字符（ **{ }** ）中的所有内容，包括前导和尾部空格。无需更改域结果的显示方式即可访问域代码。



## 示例


```JavaScript
/*本示例显示活动文档中每一个域的域代码。*/
function test() {
    let fields = ActiveDocument.Fields
    for (let i = 1; i <= fields.Count; i++) {
        alert(`"${fields.Item(i).Code.Text}"`)
    }
}
```


```JavaScript
/*本示例将活动文档中第一个域的域代码改为 TIME。*/
function test() {
    let range = ActiveDocument.Fields.Item(1).Code
    range.Text = " TIME "
    ActiveDocument.Fields.Item(1).Update()
}
```


```JavaScript
/*本示例判断如果活动文档中包含一个名为“DATE”的域，则通知用户。*/
function test() {
    let fields = ActiveDocument.Fields
    for (let i = 1; i <= fields.Count; i++) {
        if (fields.Item(i).Code.Text.search("DATE") !== -1) {
            alert("A DATE field is in this document")
        }
    }
}
```

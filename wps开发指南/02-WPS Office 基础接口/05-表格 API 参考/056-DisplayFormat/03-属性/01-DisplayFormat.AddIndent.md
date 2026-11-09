# DisplayFormat.AddIndent

返回一个值，该值指示 ET 是否会在单元格中的文本对齐方式设置为等距分布（水平或垂直）时自动缩进当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本。只读。



## 语法

express.**AddIndent**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


当单元格中的文本对齐方式已设置为等距分布（水平或垂直）时，如果文本会自动缩进，则返回 **True** 。



## 示例


```JavaScript
/*此示例显示 B3 单元格文本对齐方式设置为等距分布（水平或垂直）时，文本是否会自动缩进。*/
function test() {
    alert(Range("B3").DisplayFormat.AddIndent)
}
```


```JavaScript
/*此示例判断 D5:D10 单元格文本对齐方式为等距分布（水平或垂直）时，文本是否会自动缩进，并通知用户。*/
function test() {
    if (Range("D5:D10").DisplayFormat.AddIndent) {
        alert("文本会自动缩进")
    } else {
        alert("文本不会自动缩进")
    }
}
```

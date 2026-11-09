# Document.Hyperlinks

返回一个 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/obj)** 集合，该集合代表指定文档中的所有超链接。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **Document** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*本示例显示“example.docx”中第二个超链接的目标地址。*/
function test() {
    let hyperlinks = Documents.Item("example.docx").Hyperlinks
    if (hyperlinks.Count >= 2) {
        alert(hyperlinks.Item(2).Address)
    }
}
```


```JavaScript
/*本示例显示活动文档中地址包含“wps”一词的每个超链接的名字。*/
function test() {
    let hyperlinks = ActiveDocument.Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        if (hyperlinks.Item(i).Address.toLowerCase().indexOf("wps") !== -1) {
            alert(hyperlinks.Item(i).Name)
        }
    }
}
```

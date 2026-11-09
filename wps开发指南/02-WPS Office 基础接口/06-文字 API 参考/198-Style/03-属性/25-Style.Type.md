# Style.Type

返回样式的类型。只读 **[WdStyleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStyleType)** 类型。



## 语法

express.**Type**

express   一个代表 **Style** 对象的变量。

## 类型

WdStyleType

## 示例


```JavaScript
/*本示例判断活动文档中名为“副标题”的样式的样式类型，并通知用户。*/
function test() {
    let style = ActiveDocument.Styles.Item("副标题")
    if (style.Type == wdStyleTypeParagraph) {
        alert("Paragraph style")
    } else if (style.Type == wdStyleTypeCharacter) {
        alert("Character style")
    }
}
```


```JavaScript
/*本示例显示所选内容的样式的类型。*/
function test() {
    switch (Selection.Style.Type) {
        case wdStyleTypeCharacter:
            alert("样式为正文字符样式。")
            break
        case wdStyleTypeList:
            alert("样式为列表样式。")
            break
        case wdStyleTypeParagraph:
            alert("样式为段落样式。")
            break
        case wdStyleTypeTable:
            alert("样式为表格样式。")
            break
    }
}
```

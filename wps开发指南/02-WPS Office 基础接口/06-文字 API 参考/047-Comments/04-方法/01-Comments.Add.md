# Comments.Add

返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/obj)** 对象，该对象代表添加到区域中的备注。



## 语法

express.**Add(Range, Text)**

express   一个代表 **Comments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要添加备注的区域。 |
| Text | 可选 | any | 备注文本。 |

## 返回值

Comment

## 示例


```JavaScript
/*本示例在插入点添加一条备注。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    Application.ActiveDocument.Comments.Add(Application.Selection.Range, "review this")
}
```


```JavaScript
/*本示例在活动文档的第三段添加一条备注。*/
function test() {
    let range = Application.ActiveDocument.Paragraphs.Item(3).Range
    Application.ActiveDocument.Comments.Add(range, "original third paragraph")
}
```

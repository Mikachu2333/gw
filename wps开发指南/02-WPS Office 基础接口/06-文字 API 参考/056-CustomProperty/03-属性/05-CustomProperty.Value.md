# CustomProperty.Value

返回或设置自定义属性的值。可读/写 **String** 类型。



## 语法

express.**Value**

express   一个代表 **CustomProperty** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个智能标记的第一个自定义属性的值。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    alert(smartTag.Properties.Item(1).Value)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档中第一个智能标记的第一个自定义属性的值。*/
function test() {
    Selection.Range.Text = Documents.Item(1).SmartTags.Item(1).Properties.Item(1).Value
}
```

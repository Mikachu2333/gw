# CustomProperty.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **CustomProperty** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个智能标记的第一个自定义属性的名称。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    alert(smartTag.Properties.Item(1).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档中第一个智能标记的第一个自定义属性的名称。*/
function test() {
    Selection.Range.Text = Documents.Item(1).SmartTags.Item(1).Properties.Item(1).Name
}
```

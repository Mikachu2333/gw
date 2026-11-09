# CustomProperties.Item

返回集合中的一个 **CustomProperty** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **CustomProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 String 类型值。 |

## 返回值

CustomProperty

## 示例


```JavaScript
/*本示例显示活动文档中第一个智能标记的第一个自定义属性的名称。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    alert(smartTag.Properties.Item(1).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档中第一个智能标记的第一个自定义属性的值。*/
function test() {
    Selection.Range.Text = Documents.Item(1).SmartTags.Item(1).Properties.Item(1).Value
}
```

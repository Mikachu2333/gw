# CustomProperties.Add

返回一个 **CustomProperty** 对象，该对象代表添加到智能标记的自定义属性。



## 语法

express.**Add(Name, Value)**

express   一个代表 **CustomProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 自定义智能标记属性的名称。 |
| Value | 必选 | string | 自定义智能标记属性的值 |

## 返回值

CustomProperty

## 示例


```JavaScript
/*本示例创建活动文档中第一个智能标记的新属性，并显示用于该标记的 XML 代码。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    smartTag.Properties.Add("President", true)
    alert("The XML code is " + smartTag.XML)
}
```


```JavaScript
/*本示例向第一个文档中第一个智能标记添加新的自定义属性。*/
function test() {
    Documents.Item(1).SmartTags.Item(1).Properties.Add("Test2", "hello")
}
```

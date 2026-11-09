# Options.LabelSmartTags

如果为 **True** ，WPS 使用智能标记信息标记文档中的文本。 **Boolean** 类型，可读写。




## 语法

express.**LabelSmartTags**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在文档中关闭智能标记功能。*/
function MarkSmartTags() {
    Application.Options.LabelSmartTags = false
}
```

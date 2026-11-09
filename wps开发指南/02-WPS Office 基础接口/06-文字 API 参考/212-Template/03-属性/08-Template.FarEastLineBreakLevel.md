# Template.FarEastLineBreakLevel

返回或设置指定模板的换行控制级别。 **WdFarEastLineBreakLevel** 类型，可读写。



## 语法

express.**FarEastLineBreakLevel**

express   一个代表 **Template** 对象的变量。

## 类型

WdFarEastLineBreakLevel

## 说明


如果将段落的 **FarEastLineBreakControl** 属性设置为 **False** ，则忽略此属性。



## 示例


```JavaScript
/*本示例将第一个模板的换行控制级别设置为wdFarEastLineBreakLevelStrict。*/
function test() {
    Templates.Item(1).FarEastLineBreakLevel = wdFarEastLineBreakLevelStrict
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板的换行控制级别是否为wdFarEastLineBreakLevelNormal。*/
function test() {
    let template = Documents.Item(1).AttachedTemplate
    alert(template.FarEastLineBreakLevel == wdFarEastLineBreakLevelNormal)
}
```

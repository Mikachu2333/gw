# TextColumns.FlowDirection

返回或设置从一个文本栏到下一个文本栏的文字排列方向。 **WdFlowDirection** 类型，可读写。



## 语法

express.**FlowDirection**

express   一个代表 **TextColumns** 对象的变量。

## 类型

WdFlowDirection

## 示例


```JavaScript
/*本示例将活动文档的文本栏的文字排列方向设置为从右向左排列。*/
function test() {
    ActiveDocument.PageSetup.TextColumns.FlowDirection = wdFlowRtl
}
```


```JavaScript
/*本示例显示活动文档的第一节的文本栏的文字排列方向是否为从左向右排列。*/
function test() {
    let textColumns = ActiveDocument.Sections.Item(1).PageSetup.TextColumns
    alert(textColumns.FlowDirection == wdFlowLtr)
}
```

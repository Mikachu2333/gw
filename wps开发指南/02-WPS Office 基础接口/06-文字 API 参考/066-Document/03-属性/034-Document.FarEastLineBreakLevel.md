# Document.FarEastLineBreakLevel

返回或设置一个 **WdFarEastLineBreakLevel** 类型的值，该值代表指定文档的换行控制级别。可读写。



## 语法

express.**FarEastLineBreakLevel**

express   一个代表 **Document** 对象的变量。

## 类型

WdFarEastLineBreakLevel

## 说明


如果将 **FarEastLineBreakControl** 属性设置为 **False** ，则忽略此属性。

有关将 WPS 与东亚语言结合使用的详细信息，请参阅东亚语言的 WPS 功能。



## 示例


```JavaScript
/*本示例设置 WPS 在活动文档中第一级首尾字符处换行。*/
function test() {
    ActiveDocument.FarEastLineBreakLevel = wdJustificationModeCompressKana
}
```


```JavaScript
/*本示例显示第一个文档换行控制级别是否为wdFarEastLineBreakLevelNormal。*/
function test() {
    alert(Documents.Item(1).FarEastLineBreakLevel == wdFarEastLineBreakLevelNormal)
}
```

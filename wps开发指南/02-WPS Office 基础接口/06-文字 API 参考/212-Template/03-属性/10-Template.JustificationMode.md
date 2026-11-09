# Template.JustificationMode

返回或设置指定模板的字符间距调整。可读写 **WdJustificationMode** 类型。



## 语法

express.**JustificationMode**

express   一个代表 **Template** 对象的变量。

## 类型

WdJustificationMode

## 示例


```JavaScript
/*本示例设置 WPS 在调整字符间距时只压缩标点符号。*/
function test() {
    NormalTemplate.JustificationMode = wdJustificationModeCompressKana
}
```


```JavaScript
/*本示例显示活动文档附加模板的字符间距调整是否为wdJustificationModeCompress。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.JustificationMode == wdJustificationModeCompress)
}
```

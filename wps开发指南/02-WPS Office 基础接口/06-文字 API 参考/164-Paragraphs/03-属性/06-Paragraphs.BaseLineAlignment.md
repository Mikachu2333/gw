# Paragraphs.BaseLineAlignment

返回或设置一个 **WdBaselineAlignment** 常量，该常量代表行中字体的垂直位置，可读写。



## 语法

express.**BaseLineAlignment**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

WdBaselineAlignment

## 示例


```JavaScript
/*本示例设置 WPS 自动调整活动文档中所有段落的基线字体对齐方式。*/
function test() {
    ActiveDocument.Paragraphs.BaseLineAlignment = wdBaselineAlignAuto
}
```


```JavaScript
/*本示例显示所选段落的文本对齐方式是否为顶端对齐。*/
function test() {
    alert(Selection.Paragraphs.BaseLineAlignment == wdBaselineAlignTop)
}
```

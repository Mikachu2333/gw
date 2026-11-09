# XmlMap.AdjustColumnWidth

如果每次刷新指定 XML 映射时，列宽都会自动调整为最适合的宽度，则为 **True** 。如果每次刷新时列宽不自动调整，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AdjustColumnWidth**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 说明


最大列宽为屏幕宽度的三分之二。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap被刷新时是否自动调整列宽为最适合的宽度。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.AdjustColumnWidth)
}
```


```JavaScript
/*本示例设置第一张工作簿上第一项XmlMap被刷新时不自动调整列宽为最适合的宽度。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    xmlMap.AdjustColumnWidth = false
}
```

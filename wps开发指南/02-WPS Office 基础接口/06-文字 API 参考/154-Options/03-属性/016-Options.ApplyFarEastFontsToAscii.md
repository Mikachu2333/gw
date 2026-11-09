# Options.ApplyFarEastFontsToAscii

如果 WPS 将中文字体应用于西文文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ApplyFarEastFontsToAscii**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


仅在选择一种东亚语言进行编辑时才应用该属性。如果为 **False** ，并且对某个特定区域应用中文字体，则 WPS 将不对该区域中的任何西文文字应用该字体。



## 示例


```JavaScript
/*本示例设置 WPS 对西文文字应用中文字体。*/
function test() {
    Options.ApplyFarEastFontsToAscii = true
}
```


```JavaScript
/*本示例显示 WPS 是否对西文文字应用中文字体。*/
function test() {
    alert(Options.ApplyFarEastFontsToAscii)
}
```

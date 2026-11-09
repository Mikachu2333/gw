# Selection.FitTextWidth

返回或设置 WPS 在当前选定内容中填入文字的宽度（使用当前度量单位）。 **Single** 类型，可读写。



## 语法

express.**FitTextWidth**

express   一个代表 **Selection** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将当前选定内容填入 5 厘米宽的空间。*/
function test() {
    Selection.FitTextWidth = CentimetersToPoints(5)
}
```


```JavaScript
/*本示例显示当前选定内容中填入文字的宽度。*/
function test() {
    alert(Application.Selection.FitTextWidth)
}
```

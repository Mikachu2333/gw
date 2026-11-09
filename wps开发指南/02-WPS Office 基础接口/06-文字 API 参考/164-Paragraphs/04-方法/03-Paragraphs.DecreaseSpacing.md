# Paragraphs.DecreaseSpacing

以 6 磅增量缩减段前和段后的间距。



## 语法

express.**DecreaseSpacing()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例缩减所选段落之前或之后的间距，每运行一次该步骤，缩减 6 磅。如果段前或段后的间距都是零，则本步骤无效。*/
function test() {
    Selection.Paragraphs.DecreaseSpacing()
}
```


```JavaScript
/*本示例缩减活动文档所有段落之前或之后的间距，每运行一次该步骤，缩减 6 磅。如果段前或段后的间距都是零，则本步骤无效。*/
function test() {
    Application.ActiveDocument.Paragraphs.DecreaseSpacing()
}
```

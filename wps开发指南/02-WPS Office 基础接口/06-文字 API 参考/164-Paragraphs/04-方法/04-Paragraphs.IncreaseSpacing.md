# Paragraphs.IncreaseSpacing

以 6 磅增量增加段前和段后的间距。



## 语法

express.**IncreaseSpacing()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例增加所选段落段前和段后的间距，每运行一次该步骤，增加 6 磅。*/
function test() {
    Selection.Paragraphs.IncreaseSpacing()
}
```


```JavaScript
/*本示例以 6 磅增量增加活动文档所有段落段前和段后的间距。*/
function test() {
    ActiveDocument.Paragraphs.IncreaseSpacing()
}
```

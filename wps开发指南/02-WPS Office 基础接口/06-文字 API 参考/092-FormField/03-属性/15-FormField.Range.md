# FormField.Range

返回一个 **Range** 对象，该对象代表窗体域中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **FormField** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中活动文档上第二个窗体域中包含的文档部分。*/
function test() {
    ActiveDocument.FormFields.Item(2).Range.Select()
}
```


```JavaScript
/*本示例在所选内容中第四个窗体域的文档部分的末尾插入指定文本。*/
function test() {
    Selection.FormFields.Item(4).Range.InsertAfter("example")
}
```

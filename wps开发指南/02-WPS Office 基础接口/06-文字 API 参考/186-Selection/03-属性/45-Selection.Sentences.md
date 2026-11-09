# Selection.Sentences

返回一个 **[Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/obj)** 集合，该集合代表选定内容中的所有句子。只读。



## 语法

express.**Sentences**

express   一个代表 **Selection** 对象的变量。

## 类型

Sentences

## 示例


```JavaScript
/*本示例设置选中内容的第一个句子的字体格式和字体大小。*/
function test() {
    let range = Selection.Sentences.Item(1)
    range.Bold = msoTrue
    range.Font.Size = 24
}
```


```JavaScript
/*本示例将第一个窗口选定区域的第二个句子的字体格式设置为倾斜。*/
function test() {
    Windows.Item(1).Selection.Sentences.Item(2).Italic = msoTrue
}
```

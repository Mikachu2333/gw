# Document.Activate

激活指定的文档，使其成为活动文档。



## 语法

express.**Activate()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活名为“example.docx”文档*/
function test() {
    // example.docx must exist and be open but not active.
    Documents.Item("example.docx").Activate()
}
```


```JavaScript
/*本示例激活第一个文档，然后显示活动文档的名称。*/
function test() {
    Documents.Item(1).Activate()
    alert(ActiveDocument.Name)
}
```

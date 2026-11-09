# Revision.Range

返回一个 **Range** 对象，该对象代表修订标记内包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Revision** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将活动文档上第一节中第一处修订文本设为加粗。*/
function test() {
    ActiveDocument.Sections.Item(1).Range.Revisions.Item(1).Range.Bold = true
}
```


```JavaScript
/*本示例显示活动文档上第二处修订的文本。*/
function test() {
    alert(ActiveDocument.Revisions.Item(2).Range.Text)
}
```

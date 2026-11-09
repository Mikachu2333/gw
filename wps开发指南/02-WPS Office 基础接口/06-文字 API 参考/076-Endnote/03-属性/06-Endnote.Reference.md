# Endnote.Reference

返回 **Range** 对象，该对象表示尾注引用标记。



## 语法

express.**Reference**

express   一个代表 **Endnote** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例复制活动文档上第一个尾注的引用标记。*/
function test() {
    let range = ActiveDocument.Endnotes.Item(1).Reference
    range.Copy()
}
```


```JavaScript
/*本示例选中所选内容中第二个尾注的引用标记。*/
function test() {
    let range = Selection.Endnotes.Item(2).Reference
    range.Select()
}
```

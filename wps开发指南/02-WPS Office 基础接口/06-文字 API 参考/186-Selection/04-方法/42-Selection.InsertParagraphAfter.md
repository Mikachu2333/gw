# Selection.InsertParagraphAfter

在所选内容之后插入段落标记。



## 语法

express.**InsertParagraphAfter()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用此方法后，所选内容将扩展以包含新段落。



## 示例


```JavaScript
/*本示例在当前段落之后插入一个新段落。*/
function test() {
    Selection.Move(wdParagraph)
    Selection.InsertParagraphAfter()
}
```


```JavaScript
/*本示例在文档首部插入多个段落。*/
function test() {
    Selection.HomeKey(wdStory)
    for (let i = 1; i <= 4; i++) {
        Selection.InsertParagraphAfter()
    }
}
```

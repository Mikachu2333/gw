# Document.ReturnToLastReadPosition

将活动文档返回到上次保存的阅读位置，并返回表示该位置的整数。



## 语法

express.**ReturnToLastReadPosition()**

express   一个代表 **Document** 对象的变量。

## 返回值

int32

## 示例


```JavaScript
/*本示例将活动文档返回到上次保存的阅读位置。*/
function test() {
    ActiveDocument.ReturnToLastReadPosition()
}
```


```JavaScript
/*本示例将第一个文档返回到上次保存的阅读位置，并显示表示该位置的整数。*/
function test() {
    alert(Documents.Item(1).ReturnToLastReadPosition())
}
```

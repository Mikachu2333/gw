# Revisions.RejectAll

拒绝文档的修订集合。



## 语法

express.**RejectAll()**

express   一个代表 **Revisions** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例拒绝选中区域内的所有修订。*/
function test() {
    Selection.Range.Revisions.RejectAll()
}
```


```JavaScript
/*本示例拒绝活动文档中的所有修订。*/
function test() {
    if (ActiveDocument.Revisions.Count >= 1) {
        ActiveDocument.Revisions.RejectAll()
    }
}
```

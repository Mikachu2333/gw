# Range.UnMerge

将合并区域分解为独立的单元格。



## 语法

express.**UnMerge()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将包含单元格 A3 的合并区域分解。*/
function test() {
    if (Application.Range("A3").MergeCells) {
        Application.Range("A3").MergeArea.UnMerge()
    } else {
        MsgBox("not merged")
    }
}
```


```JavaScript
/*本示例将 A1:B3 单元格合并，再通过 B1 单元格将该合并区域分解*/
function test() {
    Range("A1:B3").Merge()
    Range("B1").UnMerge()
}
```

# Index.Delete

删除指定的索引。



## 语法

express.**Delete()**

express   一个代表 **Index** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一个索引。*/
function test() {
    ActiveDocument.Indexes.Item(1).Delete()
}
```


```JavaScript
/*本示例删除第一个文档上所有的索引。*/
function test() {
    let indexes = Documents.Item(1).Indexes
    let count = indexes.Count
    while (indexes.Count > 0) {
        indexes.Item(1).Delete()
    }
    alert(`已删除 ${count} 条索引`)
}
```

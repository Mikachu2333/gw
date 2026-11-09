# TableOfContents.Delete

删除指定的目录。



## 语法

express.**Delete()**

express   一个代表 **TableOfContents** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的第一个目录。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动文档中所有的目录。*/
function test() {
    let tablesOfContents = ActiveDocument.TablesOfContents
    for (let i = tablesOfContents.Count; i >= 1; i--) {
        tablesOfContents.Item(i).Delete()
    }
}
```

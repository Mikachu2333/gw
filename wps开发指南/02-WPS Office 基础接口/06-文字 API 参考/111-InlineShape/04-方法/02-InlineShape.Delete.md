# InlineShape.Delete

删除指定的嵌入式图形。



## 语法

express.**Delete()**

express   一个代表 **InlineShape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个嵌入式图形。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    inlineShape.Delete()
}
```


```JavaScript
/*本示例删除第一个文档中所有嵌入式图形。*/
function test() {
    let inlineShapes = Documents.Item(1).InlineShapes
    for (let i = inlineShapes.Count; i >= 1; i--) {
        inlineShapes.Item(i).Delete()
    }
}
```

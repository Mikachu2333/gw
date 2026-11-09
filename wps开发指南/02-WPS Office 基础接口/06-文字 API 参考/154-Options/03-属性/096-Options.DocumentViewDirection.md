# Options.DocumentViewDirection

返回或设置整篇文档的对齐方式和阅读顺序。 **WdDocumentViewDirection** 类型，可读写。



## 语法

express.**DocumentViewDirection**

express   一个代表 **Options** 对象的变量。

## 类型

WdDocumentViewDirection

## 示例


```JavaScript
/*本示例将整篇文档设为右对齐方式和从右向左的阅读顺序。*/
function test() {
    Options.DocumentViewDirection = wdDocumentViewRtl
}
```


```JavaScript
/*本示例显示整篇文档的对齐方式和阅读顺序。*/
function test() {
    switch (Options.DocumentViewDirection) {
        case wdDocumentViewRtl:
            alert("用右对齐方式和从右向左的阅读顺序显示文档。")
            break
        case wdDocumentViewLtr:
            alert("用左对齐方式和从左向右的阅读顺序显示文档。")
            break
    }
}
```

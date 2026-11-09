# Index.NumberOfColumns

返回或设置索引中每页的列数。 **Long** 类型，可读写。



## 语法

express.**NumberOfColumns**

express   一个代表 **Index** 对象的变量。

## 类型

number（int4 精度）

## 说明


指定为 0（零）则索引中的列数将设为与文档中的数目一样。



## 示例


```JavaScript
/*本示例将活动文档上第一个索引中的列数设置为与活动文档中的数目一样。*/
function test() {
    ActiveDocument.Indexes.Item(1).NumberOfColumns = 0
}
```


```JavaScript
/*本示例将活动文档上每个索引中每页的列数设置为两列。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Indexes.Count; i++) {
        ActiveDocument.Indexes.Item(i).NumberOfColumns = 2
    }
}
```

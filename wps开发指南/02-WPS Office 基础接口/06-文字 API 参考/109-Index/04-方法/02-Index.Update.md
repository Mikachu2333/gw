# Index.Update

更新显示在指定索引中的项目。



## 语法

express.**Update()**

express   一个代表 **Index** 对象的变量。

## 返回值

void

## 说明


使用 **UpdatePageNumbers** 方法可更新目录或图表中项目的页码。



## 示例


```JavaScript
/*本示例设置第一个文档上第二个索引的排序标准为wdIndexSortBySyllable，然后更新该索引中的项目。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    index.SortBy = wdIndexSortBySyllable
    index.Update()
}
```


```JavaScript
/*本示例将活动文档上第一个索引的排序语言设置为繁体中文，然后更新该索引的项目。*/
function test() {
    let index = ActiveDocument.Indexes.Item(1)
    index.IndexLanguage = wdTraditionalChinese
    index.Update()
}
```

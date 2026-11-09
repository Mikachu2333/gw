# Range.IsEndOfRowMark

如果指定范围被折叠且位于表格中的行尾标志处，则该属性值为 **True** 。只读 **Boolean** 类型。



## 语法

express.**IsEndOfRowMark**

express   一个代表 **Range** 对象的变量。

## 类型

boolean

## 说明


该属性与下面的表达式等效：

```JavaScript
ActiveDocument.Range().Information(wdAtEndOfRowMarker)
```



## 示例


```JavaScript
/*本示例折叠活动文档的内容，如果插入点位于行尾（刚好在行结束标记之前），则选定第一行。*/
function test() {
    ActiveDocument.Range().Collapse(wdCollapseEnd)
    if (ActiveDocument.Range().IsEndOfRowMark) {
        ActiveDocument.Range().Rows.Item(1).Select()
    }
}
```


```JavaScript
/*本示例显示所选区域是否位于表格中的行尾标志处。*/
function test() {
    alert(Selection.Range.IsEndOfRowMark)
}
```

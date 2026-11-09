# Selection.IsEndOfRowMark

如果指定的选定内容或区域折叠且位于表格行的结束标志处，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**IsEndOfRowMark**

express   一个代表 **Selection** 对象的变量。

## 类型

boolean

## 说明


该属性与下面的表达式等效：`Selection.Information(wdAtEndOfRowMarker)`



## 示例


```JavaScript
/*本示例折叠选定内容，判断如果插入点位于行尾（刚好在行结束标记之前），则选定当前行。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    if (Selection.IsEndOfRowMark) {
        Selection.Rows.Item(1).Select()
    }
}
```


```JavaScript
/*本示例显示插入点是否位于行尾（刚好在行结束标记之前）。*/
function test() {
    alert(Selection.IsEndOfRowMark)
}
```

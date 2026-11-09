# AllowEditRanges.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **AllowEditRanges** 对象的变量。

## 返回值

AllowEditRange

## 示例


```JavaScript
/*本示例将第一张工作表上第一个 AllowEditRange 对象删除。*/
function test() {
    Worksheets.Item(1).Protection.AllowEditRanges.Item(1).Delete()
}
```


```JavaScript
/*本示例显示活动工作表上第二个 AllowEditRange 对象的标题。*/
function test() {
    alert(ActiveSheet.Protection.AllowEditRanges.Item(2).Title)
}
```

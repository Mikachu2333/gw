# Comment.Date

返回代表批注的插入日期和时间的 **Date** 类型。只读。



## 语法

express.**Date**

express   一个代表 **Comment** 对象的变量。

## 类型

Date

## 示例


```JavaScript
/*本示例显示活动文档上第一个批注的插入日期和时间。*/
function test() {
    alert(ActiveDocument.Comments.Item(1).Date)
}
```


```JavaScript
/*本示例将所选内容替换成活动文档上第二个批注的插入日期和时间。*/
function test() {
    Selection.Range.Text = ActiveDocument.Comments.Item(2).Date
}
```

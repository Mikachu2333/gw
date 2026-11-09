# Comment.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Comment** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第三个批注的索引。*/
function test() {
    alert(Application.ActiveDocument.Comments.Item(3).Index)
}
```


```JavaScript
/*本示例判断如果所选内容中批注的数量大于等于1，则显示第一个批注的索引。*/
function test() {
    let comments = Application.Selection.Comments
    if (comments.Count >= 1) {
        alert(comments.Item(1).Index)
    }
}
```

# Conflict.Index

返回 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Conflict** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中的每个冲突对应的索引号。*/
function test() {
    let conflicts = ActiveDocument.CoAuthoring.Conflicts
    for (let i = 1; i <= conflicts.Count; i++) {
        alert(conflicts.Item(i).Index)
    }
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档中的第一个 Conflict 对象的索引号。*/
function test() {
    Selection.Range.Text = Documents.Item(1).CoAuthoring.Conflicts.Item(1).Index
}
```

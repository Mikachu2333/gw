# Range.Locks

返回 **CoAuthLocks** 集合对象，该对象代表范围中的所有锁定。只读。



## 语法

express.**Locks**

express   一个代表 **Range** 对象的变量。

## 类型

CoAuthLocks

## 说明


使用 **Locks** 属性可返回 **CoAuthLocks** 集合。

该属性仅可用于支持共同创作的文档。如果尝试在不支持共同创作的文档中访问该属性，将导致运行时错误。



## 示例


```JavaScript
/*本示例显示活动文档的第一个段落中的锁数量。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Range.Locks.Count)
}
```


```JavaScript
/*本示例显示第一个文档中的锁数量。*/
function test() {
    alert(Documents.Item(1).Range().Locks.Count)
}
```

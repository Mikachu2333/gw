# Frame.LockAnchor

如果指定框架处于锁定状态，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**LockAnchor**

express   一个代表 **Frame** 对象的变量。

## 类型

boolean

## 说明


框架锁定标记指示在普通视图中显示框架的位置。不能重新定位一个已锁定的框架锁定标记。



## 示例


```JavaScript
/*本示例锁定活动文档的第一节的第一个框架。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    if (range && range.Frames.Count > 0) {
        range.Frames.Item(1).LockAnchor = true
    }
}
```


```JavaScript
/*本示例显示所选内容中第三个框架是否处于锁定状态。*/
function test() {
    alert(Selection.Frames.Item(3).LockAnchor)
}
```

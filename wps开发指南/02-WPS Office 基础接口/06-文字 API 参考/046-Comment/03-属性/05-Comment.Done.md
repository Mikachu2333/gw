# Comment.Done

如果指定的批注已标记为“已解决”，则为 **True** 。可读/写， **Boolean** 类型。



## 语法

express.**Done**

express   一个代表 **Comment** 对象的变量。

## 类型

boolean

## 说明


此属性已更改。 该 **Comment.Done** 属性仍然可用，但在为单个批注回复设置 **“完成”** 标志时，“重新设计的批注”体验中不会有明显效果。 该命令将应用 **“完成”** 标志，因此当用户在之前的批注体验中打开文档时，批注回复将显示为 “已解决”或“未解决”。



## 示例


```JavaScript
/*本示例显示活动文档上第一个批注是否标记为“已解决”。*/
function test() {
    let comment = ActiveDocument.Comments.Item(1)
    alert(comment.Done)
}
```


```JavaScript
/*本示例将第一个文档上第四个批注标记为“已解决”。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(4)
    comment.Done = true
}
```

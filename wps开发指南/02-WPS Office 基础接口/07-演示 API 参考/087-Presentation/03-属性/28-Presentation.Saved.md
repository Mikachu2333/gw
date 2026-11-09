# Presentation.Saved

决定演示文稿自上次保存以来是否进行过更改。可读/写， **MsoTriState** 类型。



## 语法

express.**Saved**

express   一个代表 **Presentation** 对象的变量。

## 类型

MsoTriState

## 说明


如果将已修改演示文稿的 **Saved** 属性设置为 **msoTrue** ，则关闭演示文稿时不会提示用户保存所做的更改，并将丢失自上次保存后进行的所有更改。

 **Saved** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 演示文稿自上次保存以来已进行过更改。 |
| **msoTrue** | 演示文稿自上次保存以来没有进行过更改。 |



## 示例


```JavaScript
/*如果当前演示文稿在上次保存后进行了更改，则以下示例保存当前演示文稿。*/
function test() {
    let presentation = Application.ActivePresentation
    if (presentation.Saved == msoFalse && presentation.Path != "") {
        presentation.Save()
    }
}
```


```JavaScript
/*本示例判断第一篇演示文稿自上次保存以来是否进行过更改，并通知用户。*/
function test() {
    let presentation = Presentations.Item(1)
    if (presentation.Saved == msoFalse) {
        alert("该演示文稿自上次保存以来已进行过更改。")
    } else {
        alert("该演示文稿自上次保存以来没有进行过更改。")
    }
}
```

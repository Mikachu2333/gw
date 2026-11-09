# Style.Locked

如果不能更改或编辑样式，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**Locked**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果可以编辑活动文档的“标题 2”样式，则将该样式的字体设置为加粗格式。*/
function test() {
    let style = ActiveDocument.Styles.Item(wdStyleHeading2)
    if (!style.Locked) {
        style.Font.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例锁定第一个文档上名为“标题 1”的样式。*/
function test() {
    Documents.Item(1).Styles.Item("标题 1").Locked = true
}
```

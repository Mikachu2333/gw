# TextRange.InsertAfter

在指定文本范围的末尾添加一个字符串。返回一个代表添加文本的 **TextRange** 对象。省略参数时，该方法返回一个在指定范围末尾的长度为零的字符串。



## 语法

express.**InsertAfter(NewText)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewText | 可选 | string | 要插入的文字。默认值为一个空字符串。 |

## 返回值

TextRange

## 示例


```JavaScript
/*本示例将字符串“: Test version”追加到活动演示文稿第一张幻灯片第一个形状的文本末尾。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.TextRange.InsertAfter(": Test version")
}
```


```JavaScript
/*本示例将字符串“example”追加到活动演示文稿第一张幻灯片中名为“test”的形状的文本末尾。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = shapes.Count; i > 0; i--) {
        if (shapes.Item(i).Name == "test") {
            shapes.Item(i).TextFrame.TextRange.InsertAfter("example")
        }
    }
}
```

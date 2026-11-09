# Frame.TextWrap

如果文档文字环绕指定的框架，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TextWrap**

express   一个代表 **Frame** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例使活动文档中的文本不环绕第一个框架。*/
function test() {
    if (ActiveDocument.Frames.Count >= 1) {
        ActiveDocument.Frames.Item(1).TextWrap = false
    }
}
```


```JavaScript
/*本示例使活动文档中的文字环绕所有的框架。*/
function test() {
    let frames = ActiveDocument.Frames
    for (let i = 1; i <= frames.Count; i++) {
        frames.Item(i).TextWrap = true
    }
}
```

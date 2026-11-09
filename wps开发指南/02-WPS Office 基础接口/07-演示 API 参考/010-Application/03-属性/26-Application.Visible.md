# Application.Visible

返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 **MsoTriState** 类型。



## 语法

express.**Visible**

express   一个代表 **Application** 对象的变量。

## 类型

MsoTriState

## 说明


 **Visible** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---------------------------- | ----------------------------- |
| **msoFalse** | 指定的对象或对象格式不可见。 |
| **msoTrue** | 指定的对象或对象格式可见。 |



## 示例


```JavaScript
/*本示例将应用程序窗口设置为可见，并打开一个名为“Caption.pptx”的演示文稿。*/
function test() {
    Application.Visible = msoTrue
    Application.Presentations.Open("D:\\Caption.pptx")
}
```


```JavaScript
/*本示例将当前WPP应用程序窗口设置为可见，并通知用户。*/
function test() {
    if (Application.Visible == msoFalse) {
        Application.Visible = msoTrue
        alert("已设置应用程序窗口可见。")
    } else {
        alert("之前已设置应用程序窗口可见。")
    }
}
```

# Presentation.Close

关闭指定的演示文稿。



## 语法

express.**Close()**

express   一个代表 **Presentation** 对象的变量。

## 返回值

void

## 说明


使用此方法，WPP 关闭打开的演示文档，并且不提示用户保存所做的工作。为防止工作丢失，您应在使用 **Close** 方法之前使用 **Save** 或 **SaveAs** 方法。



## 示例


```JavaScript
/*本示例在不保存更改的情况下关闭 Pres1.ppt。*/
function test() {
    let presentation = Application.Presentations.Item("Pres1.ppt")
    presentation.Saved = msoTrue
    presentation.Close()
}
```


```JavaScript
/*本示例关闭所有打开的演示文稿。*/
function test() {
    for (let i = Application.Presentations.Count; i >= 1; i--) {
        Application.Presentations.Item(i).Close()
    }
}
```

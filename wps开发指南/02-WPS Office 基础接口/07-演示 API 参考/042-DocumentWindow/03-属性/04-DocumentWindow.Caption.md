# DocumentWindow.Caption

返回在文档窗口标题栏中显示的文本。只读。



## 语法

express.**Caption**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例激活活动演示文稿上第一个窗口并显示标题。*/
function test() {
    ActivePresentation.Windows.Item(1).Activate()
    alert(ActiveWindow.Caption)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二个窗口的标题。*/
function test() {
    alert(Presentations.Item(1).Windows.Item(2).Caption)
}
```

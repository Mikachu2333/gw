# DocumentWindow.Active

返回指定的窗格或窗口是否处于激活的状态。只读 **MsoTriState** 类型。



## 语法

express.**Active**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

MsoTriState

## 说明


Active 可以是下列 MsoTriState 常量之一：
msoFalse：指定的窗格或窗口处于非活动状态。
msoTrue：指定的窗格或窗口处于活动状态。



## 示例


```JavaScript
/*以下示例检查演示文稿文件“test.ppt”是否位于当前窗口。如果不是，则将当前处于激活状态的文档窗口保存在变量oldWin中，并激活“test.ppt”演示文稿。*/
function test() {
    let window = Application.Presentations.Item("test.ppt").Windows.Item(1)
    if (!window.Active) {
        let oldWin = Application.ActiveWindow
        window.Activate()
    }
}
```


```JavaScript
/*本示例显示活动演示文稿上第一个窗口是否处于激活状态。*/
function test() {
    alert(ActivePresentation.Windows.Item(1).Active == msoTrue)
}
```

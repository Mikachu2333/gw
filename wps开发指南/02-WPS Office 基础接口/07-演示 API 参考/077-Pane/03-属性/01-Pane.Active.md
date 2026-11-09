# Pane.Active

返回指定的窗格或窗口是否处于激活的状态。只读。



## 语法

express.**Active**

express   一个代表 **Pane** 对象的变量。

## 类型

MsoTriState

## 说明


 **Active** 属性的值可以是下列 **MsoTriState** 常量之一：

| ----- | ---- |
| **msoFalse** | 指定的窗格或窗口处于非活动状态。 |
| **msoTrue** | 指定的窗格或窗口处于活动状态。     |



## 示例


```JavaScript
/*本示例检查演示文稿文件“test.ppt”是否位于当前窗口。如果不是，则将当前处于激活状态的演示文稿的名称保存在变量 oldWin 中，并激活“test.ppt”演示文稿。*/
function test() {
    let window = Presentations.Item("D:\\test.ppt").Windows.Item(1)
    if (window.Active == msoFalse) {
        let oldWin = Application.ActiveWindow
        window.Activate()
    }
}
```


```JavaScript
/*本示例显示活动窗口的第三个窗格是否处于活动状态。*/
function test() {
    alert(ActiveWindow.Panes.Item(3).Active == msoTrue)
}
```

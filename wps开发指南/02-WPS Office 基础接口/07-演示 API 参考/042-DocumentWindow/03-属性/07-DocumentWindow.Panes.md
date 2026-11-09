# DocumentWindow.Panes

返回一个 **Panes** 集合，该集合代表文档窗口中的窗格（窗格：文档窗口的一部分，以垂直或水平条为界限并由此与其他部分分隔开。）只读。



## 语法

express.**Panes**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

Panes

## 示例


```JavaScript
/*本示例检测活动窗口中窗格的数目。如果其值为1，则表明是非普通视图的任意其他视图，然后本示例将激活普通视图。*/
function test() {
    if (ActiveWindow.Panes.Count == 1) {
        ActiveWindow.ViewType = ppViewNormal
    }
}
```


```JavaScript
/*本示例显示活动演示文稿上第一个窗口的第一个窗格是否处于活动状态。*/
function test() {
    alert(ActivePresentation.Windows.Item(1).Panes.Item(1).Active == msoTrue)
}
```

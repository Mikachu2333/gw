# Selection.Unselect

取消当前选择。



## 语法

express.**Unselect()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例取消对第一个窗口中当前选定内容的选定。*/
function test() {
    Application.Windows.Item(1).Selection.Unselect()
}
```


```JavaScript
/*本示例判断活动窗口中选中的内容如果是文本，则取消当前选择。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.Type == ppSelectionText) {
        selection.Unselect()
    }
}
```

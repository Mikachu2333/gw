# Selection.Delete

删除指定的 **Selection** 对象。



## 语法

express.**Delete()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个窗口中选中的对象。*/
function test() {
    Application.Windows.Item(1).Selection.Delete()
}
```


```JavaScript
/*本示例判断如果活动窗口中选择的文本内容为“test”，则删除该文本。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.TextRange.Text == "test") {
        selection.Delete()
        alert("已成功删除选中的文本。")
    }
}
```

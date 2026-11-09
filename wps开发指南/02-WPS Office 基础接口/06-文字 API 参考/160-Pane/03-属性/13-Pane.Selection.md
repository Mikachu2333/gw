# Pane.Selection

返回 **Selection** 对象，该对象代表文档窗格中的所选内容或插入点。只读。



## 语法

express.**Selection**

express   一个代表 **Pane** 对象的变量。

## 类型

Selection

## 示例


```JavaScript
/*本示例显示活动窗格选中的内容。*/
function test() {
    alert(ActiveWindow.ActivePane.Selection.Text)
}
```


```JavaScript
/*本示例删除第二个窗格选中的内容。*/
function test() {
    ActiveWindow.Panes.Item(2).Selection.Delete()
}
```

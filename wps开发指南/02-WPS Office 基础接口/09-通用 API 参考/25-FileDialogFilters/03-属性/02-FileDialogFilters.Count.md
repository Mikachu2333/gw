# FileDialogFilters.Count

获取一个 **Long** 类型的值，指示 **FileDialogFilters** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **FileDialogFilters** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的文件筛选器的数量。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    alert(fileDialog.Filters.Count)
}
```

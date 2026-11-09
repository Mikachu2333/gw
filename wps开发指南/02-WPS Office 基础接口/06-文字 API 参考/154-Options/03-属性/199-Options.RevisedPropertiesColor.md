# Options.RevisedPropertiesColor

在启用修订功能时，返回或设置用于标记格式更改情况的颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**RevisedPropertiesColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 说明


如果删除或插入的文本在格式上有所更改，则使用 **DeletedTextColor** 或 **InsertedTextColor** 属性覆盖 **RevisedPropertiesColor** 属性。



## 示例


```JavaScript
/*本示例跟踪活动文档的修订，将已改变格式的文本的颜色设置为兰绿色，并将加粗格式应用于所选内容。*/
function test() {
    ActiveDocument.TrackRevisions = true
    Options.RevisedPropertiesColor = wdTeal
    Selection.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“批注颜色”选项对应的“编号颜色”选项的当前状态是否为黑色。*/
function test() {
    alert(Options.RevisedPropertiesColor == wdBlack)
}
```

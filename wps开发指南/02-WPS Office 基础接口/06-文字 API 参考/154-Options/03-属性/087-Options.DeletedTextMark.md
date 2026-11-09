# Options.DeletedTextMark

当激活修订选项时，返回或设置要删除的文字的格式。 **WdDeletedTextMark** 类型，可读写。



## 语法

express.**DeletedTextMark**

express   一个代表 **Options** 对象的变量。

## 类型

WdDeletedTextMark

## 示例


```JavaScript
/*本示例将要删除的文本的格式设置为删除线。*/
function test() {
    Options.DeletedTextMark = wdDeletedTextMarkStrikeThrough
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“删除内容”选项的当前状态是否为双下划线。*/
function test() {
    alert(Options.DeletedTextMark == wdDeletedTextMarkDoubleUnderline)
}
```

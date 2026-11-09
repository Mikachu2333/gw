# Options.DeletedTextColor

当激活修订选项时，返回或设置要删除的文字的颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**DeletedTextColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 说明


如果将 **DeletedTextColor** 属性设置为 **wdByAuthor** ，WPS 会自动为文档的前八名审阅者分配不同的颜色。



## 示例


```JavaScript
/*本示例将要删除文本的颜色设置为鲜绿色。*/
function test() {
    Options.DeletedTextColor = wdBrightGreen
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“删除内容”选项对应的“颜色”选项的当前状态是否为红色。*/
function test() {
    alert(Options.DeletedTextColor == wdRed)
}
```

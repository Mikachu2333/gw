# Options.InsertedTextColor

当启用修订选项时，返回或设置插入文字的颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**InsertedTextColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 说明


如果将 **InsertedTextColor** 属性设置为 **wdByAuthor** ，WPS 会自动为文档的前八个审阅者各赋予唯一的颜色。



## 示例


```JavaScript
/*本示例将插入文本的颜色设置为深红色。*/
function test() {
    Options.InsertedTextColor = wdDarkRed
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“插入内容”选项对应的“颜色”选项的当前状态是否为红色。*/
function test() {
    alert(Options.InsertedTextColor == wdRed)
}
```

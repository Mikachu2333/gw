# Options.RevisedLinesColor

当激活修订选项时，返回或设置文档中修订线的颜色。 **WdColorIndex** 类型，可读/写。



## 语法

express.**RevisedLinesColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例将修订线的颜色设置为粉红色。*/
function test() {
    Options.RevisedLinesColor = wdPink
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“修订行”选项对应的“颜色”选项的当前状态是否为黑色。*/
function test() {
    alert(Options.RevisedLinesColor == wdBlack)
}
```

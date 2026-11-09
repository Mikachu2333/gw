# Options.RevisedLinesMark

当激活修订选项时，返回或设置修订线在文档中的位置。 **WdRevisedLinesMark** 类型，可读/写。



## 语法

express.**RevisedLinesMark**

express   一个代表 **Options** 对象的变量。

## 类型

WdRevisedLinesMark

## 示例


```JavaScript
/*本示例设置修订线显示在每页的左边距上。*/
function test() {
    Options.RevisedLinesMark = wdRevisedLinesMarkLeftBorder
}
```


```JavaScript
/*本示例显示“选项”对话框中“修订”选项卡上“标记”下“修订行”选项的当前状态是否为右侧线框。*/
function test() {
    alert(Options.RevisedLinesMark == wdRevisedLinesMarkRightBorder)
}
```

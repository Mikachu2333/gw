# Range.Show

滚动当前活动窗口中的内容以将指定区域移到视图中。此区域必须由活动文档中的单个单元格组成。



## 语法

express.**Show()**

express   一个代表 **Range** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将视图跳转至 A100 单元格*/
function test() {
    Range("A100").Show()
}
```


```JavaScript
/*本示例将视图跳转至 XF108:ZF110 单元格区域*/
function test() {
    Range("XF108:ZF110").Show()
}
```

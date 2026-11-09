# Fields.ToggleShowCodes

在域代码与域结果之间切换域的显示。可以使用 **ShowCodes** 属性控制单个域的显示。



## 语法

express.**ToggleShowCodes()**

express   一个代表 **Fields** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例打开或关闭所选内容中域的显示（相当于按 Shift+F9）*/
function test() {
    Selection.Fields.ToggleShowCodes()
}
```


```JavaScript
/*本示例打开或关闭活动文档中域的显示（相当于按 Alt+F9）。*/
function test() {
    ActiveDocument.Fields.ToggleShowCodes()
}
```

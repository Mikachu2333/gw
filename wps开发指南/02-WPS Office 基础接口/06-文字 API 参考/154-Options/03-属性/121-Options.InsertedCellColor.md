# Options.InsertedCellColor

返回或设置一个 **WdCellColor** 常量，该常量代表插入的表格单元格的颜色。可读写。



## 语法

express.**InsertedCellColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdCellColor

## 示例


```JavaScript
/*本示例将插入的表格单元格的颜色设置为粉红色。*/
function test() {
    Options.InsertedCellColor = wdCellColorPink
}
```


```JavaScript
/*本示例显示插入的表格单元格的颜色是否为浅蓝色。*/
function test() {
    alert(Options.InsertedCellColor == wdCellColorLightBlue)
}
```

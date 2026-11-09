# Options.DeletedCellColor

返回或设置一个 **WdCellColor** 常量，该常量代表删除的单元格的颜色。可读写。



## 语法

express.**DeletedCellColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdCellColor

## 示例


```JavaScript
/*本示例设置删除的单元格的颜色为浅黄色。*/
function test() {
    Options.DeletedCellColor = wdCellColorLightYellow
}
```


```JavaScript
/*本示例显示删除的单元格的颜色是否为粉红色。*/
function test() {
    alert(Options.DeletedCellColor == wdCellColorPink)
}
```

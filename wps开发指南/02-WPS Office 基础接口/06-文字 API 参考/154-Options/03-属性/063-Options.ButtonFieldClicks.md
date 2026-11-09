# Options.ButtonFieldClicks

返回或设置一个数字，该数字是运行 GOTOBUTTON 或 MACROBUTTON 域所需的点击次数（单击或双击）。 **Long** 类型，可读写。



## 语法

express.**ButtonFieldClicks**

express   一个代表 **Options** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将运行 GOTOBUTTON 或 MACROBUTTON 域所需的点击次数设置为 1。*/
function test() {
    Options.ButtonFieldClicks = 1
}
```


```JavaScript
/*本示例显示运行 GOTOBUTTON 或 MACROBUTTON 域所需的点击次数。*/
function test() {
    alert(Options.ButtonFieldClicks)
}
```

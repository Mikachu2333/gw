# Application.FormulaBarHeight

允许用户指定行中编辑栏的高度。可读/写 **Long** 类型。



## 语法

express.**FormulaBarHeight**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果 **FormulaBarHeight** 的指定值大于可见窗口空间，则会调整编辑栏，使其高度等于窗口高度。



## 示例


```JavaScript
/*在下例中，编辑栏高度设置为五行。*/
function test() {
    Application.FormulaBarHeight = 5
}
```


```JavaScript
/*本示例演示将FormulaBarHeight属性的值设置为7，并显示该属性的值。*/
function test() {
    Application.FormulaBarHeight = 7
    alert("FormulaBarHeight属性的值为：" + Application.FormulaBarHeight)
}
```

# Range.CountLarge

返回一个值，该值表示集合中的对象数。只读。
CountLarge 属性在功能上与 Count 属性相同，只不过如果指定的区域超过 2147483647 个单元格 (少于 2048 列) ，则 Count 属性将生成溢出错误。 但是 CountLarge 属性可处理达工作表最大大小的区域，即 17179869184 个单元格。



## 语法

express.**CountLarge**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示 A1:C3 单元格区域内的单元格数量*/
function test() {
    alert(Range("A1:C3").CountLarge)
}
```


```JavaScript
/*本示例选中 C2:F4 单元格，并显示选中区域中单元格的数量*/
function test() {
    Range("C2:F4").select()
    alert(Selection.CountLarge)
}
```

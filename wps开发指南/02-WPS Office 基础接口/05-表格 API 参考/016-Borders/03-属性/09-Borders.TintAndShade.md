# Borders.TintAndShade

返回或设置一个 **Single** ，使颜色变深或变浅。



## 语法

express.**TintAndShade**

express   一个代表 **Borders** 对象的变量。

## 类型

any

## 说明


可以为 **TintAndShade** 属性输入 -1（最暗）到 1（最亮）之间的数字，零 (0) 为中间值。

如果将此属性设置为小于 -1 或大于 1 的值，则会引起运行时错误：“指定的值超出了范围”。此属性用于主题颜色和非主题颜色。



## 示例


```JavaScript
/*本示例将 I1 单元格边框的 TintAndShade 设置为0.5。*/
function test() {
    Range("I1").Borders.TintAndShade = 0.5
}
```


```JavaScript
/*本示例显示 E6 单元格的 TintAndShade 值。*/
function test() {
    alert(Range("E6").Borders.TintAndShade)
}
```

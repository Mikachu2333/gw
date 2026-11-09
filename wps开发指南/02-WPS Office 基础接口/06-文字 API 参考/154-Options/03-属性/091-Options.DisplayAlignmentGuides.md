# Options.DisplayAlignmentGuides

返回或设置一个 **Boolean** 值，该值指定是否在用户界面中启用对齐参考线。可读写。



## 语法

express.**DisplayAlignmentGuides**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果 **DisplayAlignmentGuides** 为 **True** ，则启用对齐参考线。



## 示例


```JavaScript
/*本示例设置 WPS 在用户界面中启用对齐参考线。*/
function test() {
    Options.DisplayAlignmentGuides = true
}
```


```JavaScript
/*本示例显示 WPS 是否在用户界面中启用对齐参考线*/
function test() {
    alert(Options.DisplayAlignmentGuides)
}
```

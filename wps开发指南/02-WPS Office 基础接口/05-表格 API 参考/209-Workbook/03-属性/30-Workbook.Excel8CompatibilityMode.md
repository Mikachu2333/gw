# Workbook.Excel8CompatibilityMode

 **Excel8CompatibilityMode** 属性向开发人员提供了一种查看工作簿是否在兼容模式下的方法。只读 **Boolean** 类型。



## 语法

express.**Excel8CompatibilityMode**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


在兼容模式下，某功能被禁用，或以不同的方式发挥作用。例如，与较早版本的 ET 相比，ET 更高版本中有更多可用的行或列。此外，ET 更高版本中还提供结构化引用功能。



## 示例


```JavaScript
/*本示例检查工作簿是否处于兼容模式。*/
function test() {
    alert(ActiveWorkbook.Excel8CompatibilityMode)
}
```


```JavaScript
/*本示例演示Excel8CompatibilityMode属性的数据类型。*/
function test() {
    alert(typeof ActiveWorkbook.Excel8CompatibilityMode)
}
```

# Application.GenerateTableRefs

 **GenerateTableRefs** 属性确定是使用传统的记号方法还是使用新的结构化引用记号方法在公式中引用表格。可读/写。



## 语法

express.**GenerateTableRefs**

express   一个代表 **Application** 对象的变量。

## 类型

XlGenerateTableRefs

## 示例


```JavaScript
/*本示例显示ET在公式中引用表格的方式是否为xlGenerateTableRefStruct。*/
function test() {
    alert(Application.GenerateTableRefs == xlGenerateTableRefStruct)
}
```


```JavaScript
/*本示例设置ET在公式中引用表格的方式。*/
function test() {
    Application.GenerateTableRefs = xlGenerateTableRefA1
}
```

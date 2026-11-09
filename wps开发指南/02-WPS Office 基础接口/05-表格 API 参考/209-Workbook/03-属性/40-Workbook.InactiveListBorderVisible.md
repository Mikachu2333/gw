# Workbook.InactiveListBorderVisible

一个 **Boolean** 值，指定当列表不处于活动状态时，此列表（列表：包含相关数据的一系列行，或使用 “创建列表” 命令作为数据表指定给函数的一系列行。）的边框是否可见。如果边框可见，则返回 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**InactiveListBorderVisible**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


该属性的设置将影响工作表上的所有列表。



## 示例


```JavaScript
/*下例隐藏了工作簿中所有非活动列表的边框。*/
function test() {
    ActiveWorkbook.InactiveListBorderVisible = false
}
```


```JavaScript
/*本示例演示InactiveListBorderVisible属性的数据类型，并隐藏第一个工作簿中所有非活动列表的边框。*/
function test() {
    alert(`InactiveListBorderVisible属性的数据类型为：${typeof Workbooks.Item(1).InactiveListBorderVisible}\n点击 “确定” 后将隐藏工作簿中所有非活动列表的边框`)
    Workbooks.Item(1).InactiveListBorderVisible = false
}
```

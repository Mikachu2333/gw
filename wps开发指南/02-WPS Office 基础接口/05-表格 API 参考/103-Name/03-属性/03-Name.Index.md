# Name.Index

返回 **Number** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Name** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿中名称为“test”的索引号。*/
function test() {
    alert(ActiveWorkbook.Names.Item("test").Index)
}
```


```JavaScript
/*本示例显示 Sheet1 中名称为“test1”的索引号。*/
function test() {
    let name = Worksheets.Item("Sheet1").Names.Item("test1")
    alert(`test1的索引号为 ${name.Index}`)
}
```

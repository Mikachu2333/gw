# OLEObject.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **OLEObject** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示第一张工作表中的第一个 OLE 对象在其同类对象所组成的集合内的索引号。*/
function test() {
    alert(Application.Worksheets.Item(1).OLEObjects(1).Index)
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象在其同类对象所组成的集合内的索引号。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Index)
}
```

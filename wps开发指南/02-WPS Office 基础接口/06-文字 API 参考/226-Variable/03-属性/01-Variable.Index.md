# Variable.Index

返回一个 **Long** 类型的值, 该值代表某个变量在变量集合中的序号位置。只读。



## 语法

express.**Index**

express   一个代表 **Variable** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例向活动文档上添加一个文档变量，并显示该文档变量的索引。*/
function test() {
    let variable = ActiveDocument.Variables.Add("Name", "Joe")
    alert(variable.Index)
}
```


```JavaScript
/*本示例显示第一个文档上最后一个文档变量的索引。*/
function test() {
    let variables = Documents.Item(1).Variables
    alert(variables.Item(variables.Count).Index)
}
```

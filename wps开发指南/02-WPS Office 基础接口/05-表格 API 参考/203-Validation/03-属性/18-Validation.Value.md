# Validation.Value

返回一个 **Boolean** 值，它指明是否符合所有的有效性验证条件（即，该区域是否包含有效数据）。



## 语法

express.**Value**

express   一个代表 **Validation** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示单元格 B1 是否包含有效数据。*/
function test() {
    alert(Range("B1").Validation.Value)
}
```


```JavaScript
/*本示例显示第一张工作表上单元格 A1 是否包含有效数据。*/
function test() {
    let validation = Application.Worksheets.Item(1).Range("A1").Validation
    alert(validation.Value)
}
```

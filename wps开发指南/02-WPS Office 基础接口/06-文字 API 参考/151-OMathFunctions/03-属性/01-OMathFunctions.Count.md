# OMathFunctions.Count

返回 **OMathFunctions** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **OMathFunctions** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式中包含的函数的数量。*/
function test() {
    alert(ActiveDocument.OMaths.Item(1).Functions.Count)
}
```

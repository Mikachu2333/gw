# Adjustments.Count

返回 **Adjustments** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Adjustments** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档第三个形状的调整值数量。*/
function test() {
    alert(ActiveDocument.Shapes.Item(3).Adjustments.Count)
}
```

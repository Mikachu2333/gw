# Adjustments.Count

返回一个 **Integer** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Adjustments** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上第一个形状的调整值的数量。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.Adjustments.Count)
}
```

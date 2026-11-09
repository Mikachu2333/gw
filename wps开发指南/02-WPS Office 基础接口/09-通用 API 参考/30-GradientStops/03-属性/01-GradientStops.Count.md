# GradientStops.Count

获取一个 **Long** 类型的值，该值指示 **GradientStops** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **GradientStops** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个形状渐变填充的渐变光圈的数量。*/
function test() {
    let gradientStops = ActiveSheet.Shapes.Item(1).Fill.GradientStops
    alert(gradientStops.Count)
}
```

# Shape.HasTable

返回指定的形状是否为表。只读。 **MsoTriState** 类型。



## 语法

express.**HasTable**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasTable** 属性的值可以是其中一个 **MsoTriState** 常量。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定的形状不是表。 |
| **msoTrue**  | 指定的形状是表。  |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上的第一个形状为表格，则将第一列的宽度设置为 72 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasTable == msoTrue) {
        shape.Table.Columns.Item(1).Width = 72
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中的第二个形状是否为表格。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(2).HasTable == msoTrue)
}
```

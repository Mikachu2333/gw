# Shape.ID

返回一个 Long 值，它代表指定对象的类型。



## 语法

express.**ID**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int4 精度）

## 说明


可将 ID 标签用作其他 HTML 文档或相同网页上的超链接引用。



## 示例


```JavaScript
/*本示例显示活动工作表中的第一个形状ID。*/
function test() {
    let shapes = ActiveSheet.Shapes
    alert(shapes.Item(1).ID)
}
```


```JavaScript
/*本示例遍历活动工作表所有形状并显示它们的ID。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        alert(shapes.Item(i).ID)
    }
}
```

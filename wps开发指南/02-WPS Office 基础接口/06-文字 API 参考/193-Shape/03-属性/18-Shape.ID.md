# Shape.ID

返回指定形状的标识类型。只读 **Long** 类型。



## 语法

express.**ID**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一个形状的ID。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).ID)
}
```


```JavaScript
/*本示例遍历活动文档所有形状并显示它们的ID。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        alert(shapes.Item(i).ID)
    }
}
```

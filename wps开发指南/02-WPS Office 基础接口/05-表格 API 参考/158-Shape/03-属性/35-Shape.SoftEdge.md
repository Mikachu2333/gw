# Shape.SoftEdge

返回指定形状的 **[SoftEdgeFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/obj)** 对象，该对象包含形状的柔化边缘格式设置属性。只读。



## 语法

express.**SoftEdge**

express   一个代表 **Shape** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例将活动工作表的第一个形状的柔化边缘效果设置为5磅。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.SoftEdge.Radius = 5
}
```


```JavaScript
/*本示例遍历第一张工作表的所有形状并设置它们的柔化边缘效果为10磅。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).SoftEdge.Radius = 10
    }
}
```

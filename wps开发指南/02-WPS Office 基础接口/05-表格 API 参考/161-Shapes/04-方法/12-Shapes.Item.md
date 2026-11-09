# Shapes.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。

## 说明


对象的文本名称就是 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 属性的值。



## 示例


```JavaScript
/*本示例对 Shapes 集合中第二个形状的 OnAction 属性进行设置。如果变量 ss 代表的不是 Shapes 对象，则本示例无效。*/
function test() {
    let ss = Application.Worksheets.Item(1).Shapes
    ss.Item(2).OnAction = "ShapeAction"
}
```


```JavaScript
/*本示例将活动工作表中不包含图表的形状删除。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HasChart) {
            shapes.Item(i).Delete()
        }
    }
}
```

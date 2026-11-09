# Shape.HasChart

返回形状是否包含图表。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。



## 语法

express.**HasChart**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例显示活动工作表中第一个形状是否包含图表。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(1).HasChart) {
        alert("包含图表")
    }else {
        alert("不包含图表")
    }
}
```


```JavaScript
/*本示例将第一张工作表中包含图表的形状删除。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HasChart) {
            shapes.Item(i).Delete()
        }
    }
}
```

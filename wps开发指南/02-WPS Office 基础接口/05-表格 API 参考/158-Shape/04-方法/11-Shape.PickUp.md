# Shape.PickUp

复制指定形状的格式。使用 **[Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Apply)** 方法可将复制的格式应用到其他形状。



## 语法

express.**PickUp()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动工作表第一个形状的格式应用于其它形状并删除第一个形状。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.Item(1).PickUp()
    shapes.Item(2).Apply()
    shapes.Item(3).Apply()
    shapes.Item(1).Delete()
}
```


```JavaScript
/*本示例首先复制第一张工作表上第一个形状的格式，然后将复制的形状格式应用于第二个形状。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(1).PickUp()
    shapes.Item(2).Apply()
}
```

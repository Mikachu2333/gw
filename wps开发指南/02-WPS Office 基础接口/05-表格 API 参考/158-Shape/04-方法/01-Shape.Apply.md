# Shape.Apply

应用通过 **[PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/PickUp)** 方法复制的指定形状格式。



## 语法

express.**Apply()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例复制第一个工作表上第一个形状的格式，然后将复制的格式应用到第二个形状上。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).PickUp()
    Application.Worksheets.Item(1).Shapes.Item(2).Apply()
}
```


```JavaScript
/*此示例复制活动工作表上第三个形状的格式，然后将复制的格式应用到第二个形状上。*/
function test() {
    ActiveSheet.Shapes.Item(3).PickUp()
    ActiveSheet.Shapes.Item(2).Apply()
}
```

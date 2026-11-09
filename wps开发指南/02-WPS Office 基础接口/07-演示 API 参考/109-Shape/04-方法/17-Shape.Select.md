# Shape.Select

选择指定的对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | MsoTriState | 指定该选择是否替换之前所做的任何一项选择。 |

## 返回值

void

## 说明


如果做出不适用于当前视图的选择，此代码将失败。例如，可以在幻灯片浏览视图中而不能在幻灯片视图中选择幻灯片。

| MsoTriState 可以是下列 MsoTriState 常量之一。 |
| ----------------------------------- |
| **msoFalse** 将该选择添加到前一项选择中。         |
| **msoTrue** 默认值。该选择替换之前所做的任何一项选择。   |



## 示例


```JavaScript
/*本示例选中活动演示文稿第一张幻灯片上的第一个形状。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(1).Select()
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的第二个形状添加到前一项选择中。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).Select(msoFalse)
}
```

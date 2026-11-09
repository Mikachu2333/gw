# ShapeRange.Select

选择指定的对象。



## 语法

express.**Select(Replace)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | MsoTriState | 指定该选择是否替换之前所做的任何一项选择。 |

## 返回值

void

## 说明


 **Replace** 参数值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                                   |
| ------------ | ---------------------------------------- |
| **msoFalse** | 将该选择添加到前一项选择中。|
| **msoTrue**  | 默认值。该选择替换之前所做的任何一项选择。 |



## 示例


```JavaScript
/*本示例选择活动演示文稿第一张幻灯片上的第一个和第三个形状。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Range([1, 3]).Select()
}
```


```JavaScript
/*本示例将第一篇演示文稿第一张幻灯片中的第二个和第四个形状添加到前一项选择中。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.Range([2, 4]).Select(msoFalse)
}
```

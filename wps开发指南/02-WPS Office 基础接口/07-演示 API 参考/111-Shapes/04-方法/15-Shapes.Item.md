# Shapes.Item

从指定的 **Shapes** 集合中返回单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的集合中单个 **Shape** 对象的名称或索引号。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中名为“rectangle 1”的形状的前景色设置为红色。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item("rectangle 1").Fill.ForeColor.RGB = RGB(128, 0, 0)
}
```


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的第一个形状。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Delete()
}
```

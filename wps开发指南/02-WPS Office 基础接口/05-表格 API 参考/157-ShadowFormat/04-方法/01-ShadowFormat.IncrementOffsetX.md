# ShadowFormat.IncrementOffsetX

按指定磅值更改阴影的水平偏移量。可以使用 **OffsetX** 属性设置阴影的绝对水平偏移量。



## 语法

express.**IncrementOffsetX(Increment)**

express   一个代表 **ShadowFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定阴影的水平偏移量（以磅为单位）。正值表示阴影右移，负值表示阴影左移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例使第一张工作表中形状三的阴影向左移动 3 磅。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    worksheet.Shapes.Item(3).Shadow.IncrementOffsetX(-3)
}
```


```JavaScript
/*本示例将活动工作表中第一个形状阴影向右移动 4 磅。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    shadow.IncrementOffsetX(4)
}
```

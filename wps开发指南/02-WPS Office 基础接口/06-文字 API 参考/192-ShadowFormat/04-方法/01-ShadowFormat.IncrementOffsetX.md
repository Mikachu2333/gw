# ShadowFormat.IncrementOffsetX

按指定磅值改变阴影的水平偏移量。



## 语法

express.**IncrementOffsetX(Increment)**

express   一个代表 **ShadowFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 以磅为单位指定阴影水平移动的距离。正值使阴影向右移动，负值使阴影向左移动。 |

## 返回值

void

## 说明


可以使用 **[OffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/OffsetX)** 属性设置阴影水平移动的绝对距离。



## 示例


```JavaScript
/*本示例将活动文档上第一个形状的阴影向左移动 3 磅。*/
function test() {
    ActiveDocument.Shapes.Item(1).Shadow.IncrementOffsetX(-3)
}
```


```JavaScript
/*本示例将所选内容中第一个内嵌形状的阴影向右移动 10 磅。*/
function test() {
    Selection.InlineShapes.Item(1).Shadow.IncrementOffsetX(10)
}
```

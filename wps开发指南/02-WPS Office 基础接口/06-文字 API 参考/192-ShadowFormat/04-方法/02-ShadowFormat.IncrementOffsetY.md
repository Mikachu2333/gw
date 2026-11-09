# ShadowFormat.IncrementOffsetY

按指定磅值更改阴影的垂直偏移量。



## 语法

express.**IncrementOffsetY(Increment)**

express   一个代表 **ShadowFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定阴影的垂直偏移量（以磅为单位）。正值表示阴影下移，负值表示阴影上移。 |

## 返回值

void

## 说明


可以使用 **[OffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/OffsetY)** 属性设置阴影的绝对垂直偏移量。



## 示例


```JavaScript
/*本示例将活动文档上第一个形状的阴影向上移动 3 磅。*/
function test() {
    ActiveDocument.Shapes.Item(1).Shadow.IncrementOffsetY(-3)
}
```


```JavaScript
/*本示例将所选内容中第一个内嵌形状的阴影向下移动 7 磅。*/
function test() {
    Selection.InlineShapes.Item(1).Shadow.IncrementOffsetY(7)
}
```

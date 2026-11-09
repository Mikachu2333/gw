# Frames.Item

返回集合中的单个 **Frame** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Frames** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。 |

## 返回值

Frame

## 示例


```JavaScript
/*本示例删除活动文档的前半部分框架。*/
function test() {
    let frames = ActiveDocument.Frames
    for (let i = frames.Count / 2; i > 0; i--) {
        frames.Item(i).Delete()
    }
}
```


```JavaScript
/*本示例将活动文档上第一个框架的高度设置为 1 英寸。*/
function test() {
    ActiveDocument.Frames.Item(1).HeightRule = wdFrameExact
    ActiveDocument.Frames.Item(1).Height = InchesToPoints(1)
}
```

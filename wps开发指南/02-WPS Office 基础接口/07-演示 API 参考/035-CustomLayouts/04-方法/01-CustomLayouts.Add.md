# CustomLayouts.Add

返回代表新自定义版式的 **CustomLayout** 对象。



## 语法

express.**Add(Index)**

express   一个代表 **CustomLayouts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 自定义版式的索引号。 |

## 返回值

CustomLayout

## 示例


```JavaScript
/*本示例为活动演示文稿的幻灯片母版添加一个自定义版式，并设置该自定义版式的名称。*/
function test() {
    let customLayout = ActivePresentation.SlideMaster.CustomLayouts.Add(12)
    customLayout.Name = "example"
}
```


```JavaScript
/*本示例为第一篇演示文稿的幻灯片母版添加一个自定义版式。*/
function test() {
    let customLayouts = Presentations.Item(1).SlideMaster.CustomLayouts
    customLayouts.Add(1)
}
```

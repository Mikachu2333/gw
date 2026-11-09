# Designs.Load

返回一个 **Design** 对象，该对象代表一个已加载到指定演示文稿的母版列表中的设计。



## 语法

express.**Load(TemplateName, Index)**

express   一个代表 **Designs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TemplateName | 必选 | string | 设计模板的路径。 |
| Index | 可选 | number（int 精度） | 设计模板在设计模板集合中的索引号。默认值为 -1，表示将设计模板添加到演示文稿中设计模板列表的末尾。 |

## 返回值

Design

## 示例


```JavaScript
/*本示例将一个设计模板添加到活动演示文稿设计模板集合的第一个位置。本示例假设“summary.pot”模板位于指定路径。*/
function test() {
    let designs = ActivePresentation.Designs
    designs.Load("D:\\summary.pot", 1)
}
```


```JavaScript
/*本示例将名为“programme.potx”的设计模板加载到第一篇演示文稿设计模板集合的末尾。*/
function test() {
    let designs = Presentations.Item(1).Designs
    designs.Load("D:\\programme.potx", -1)
}
```

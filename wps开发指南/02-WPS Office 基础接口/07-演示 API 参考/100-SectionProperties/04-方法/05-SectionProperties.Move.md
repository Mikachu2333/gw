# SectionProperties.Move

将指定节移动到指定的索引位置，移动时将该节中的幻灯片与分节符一起移动。



## 语法

express.**Move(sectionIndex, toPos)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 要移动的节的索引。 |
| toPos | 必选 | number（int 精度） | 要将节移动到的索引位置。 |

## 返回值

void

## 说明


节将被移动到当前索引为 toPos 的节之前与之紧邻的索引位置。



## 示例


```JavaScript
/*本示例将活动演示文稿中第三个节移动到第二个节的索引位置。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    properties.Move(3, 2)
}
```


```JavaScript
/*本示例将第一篇演示文稿中的第一个节移动到节的末尾位置。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    properties.Move(1, properties.Count)
}
```

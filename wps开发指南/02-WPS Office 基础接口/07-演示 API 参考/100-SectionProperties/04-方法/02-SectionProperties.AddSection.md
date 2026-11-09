# SectionProperties.AddSection

在指定索引位置添加新节并返回新建节的索引。



## 语法

express.**AddSection(sectionIndex, sectionName)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 要在前面添加节的节的索引。 |
| sectionName | 可选 | any | 新节的名称。 |

## 返回值

Integer

## 说明


如果指定的索引位置已存在节，则调用 **AddSection** 相当于在紧挨该节的前面添加一个空节。

新插入的节之后的节索引会自动递增 1。

sectionIndex 可以比现有总节数大 1，但前提是它必须小于允许的最大节数（512）；此操作将在末尾创建一个新的空节。

如果演示文稿中不存在任何节，则调用此方法并向 sectionIndex 传递值 1 将创建第一个节。



## 示例


```JavaScript
/*本示例在活动演示文稿第一个节的位置添加名为“test”的新节。*/
function test() {
    ActivePresentation.SectionProperties.AddSection(1, "test")
}
```


```JavaScript
/*本示例在第一篇演示文稿末尾位置添加一个名为“test”的新节。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    properties.AddSection(properties.Count + 1, "test")
}
```

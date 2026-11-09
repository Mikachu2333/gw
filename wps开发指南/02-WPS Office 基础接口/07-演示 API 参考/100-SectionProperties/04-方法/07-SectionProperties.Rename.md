# SectionProperties.Rename

用指定的名称重命名指定的节。



## 语法

express.**Rename(sectionIndex, sectionName)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 要重命名的节的索引。 |
| sectionName | 必选 | string | 节的新名称。 |

## 返回值

void

## 说明


如果 _sectionName_ 为空字符串，将为节指定默认节名称。



## 示例


```JavaScript
/*本示例将活动演示文稿第一个节的名称重命名为“test”。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    properties.Rename(1, "test")
}
```


```JavaScript
/*本示例在第一篇演示文稿节的末尾位置添加一个新节，并将新节的名称重命名为“test4”。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    properties.AddSection(properties.Count + 1)
    properties.Rename(properties.Count, "test4")
}
```

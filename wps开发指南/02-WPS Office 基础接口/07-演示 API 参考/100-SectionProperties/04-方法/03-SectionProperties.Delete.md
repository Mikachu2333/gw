# SectionProperties.Delete

删除分隔指定节的分节符，也可以选择删除该节中的所有幻灯片。



## 语法

express.**Delete(sectionIndex, deleteSlides)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 要删除的节的索引。 |
| deleteSlides | 必选 | boolean | 是否删除节中的所有幻灯片。如果为 **True** ，则删除节中的所有幻灯片；如果为 **False** ，则不删除这些幻灯片。 |

## 返回值

void

## 说明


如果演示文稿中包含多个节，则在删除第一个节之前，必须先删除该节中的所有幻灯片。



## 示例


```JavaScript
/*本示例删除活动演示文稿的第一个节，并删除其中的幻灯片。*/
function test() {
    ActivePresentation.SectionProperties.Delete(1, true)
}
```


```JavaScript
/*本示例删除第一篇演示文稿的第二个节，并保留该节中的幻灯片。*/
function test() {
    Presentations.Item(1).SectionProperties.Delete(2, false)
}
```

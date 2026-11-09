# SectionProperties.SectionID

返回一个字符串，代表指定节的唯一标识符。



## 语法

express.**SectionID(sectionIndex)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 节的索引。 |

## 返回值

String

## 说明


返回的字符串采用“\{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX\}”的格式，其中每个“X”都是一个十六进制数位。



## 示例


```JavaScript
/*本示例在活动演示文稿第一个节的位置添加一个新节，并显示新节的唯一标识符。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    properties.AddSection(1, "test")
    alert(properties.SectionID(1))
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一个节的唯一标识符。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    alert(properties.SectionID(1))
}
```

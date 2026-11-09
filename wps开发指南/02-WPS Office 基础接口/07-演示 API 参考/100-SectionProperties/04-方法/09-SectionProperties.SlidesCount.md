# SectionProperties.SlidesCount

返回指定节中幻灯片的数量。



## 语法

express.**SlidesCount(sectionIndex)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| sectionIndex | 必选 | number（int 精度） | 节的索引。 |

## 返回值

Long

## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一节中幻灯片数量大于 1，则删除该节和其中的幻灯片。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    if (properties.SlidesCount(1) > 1) {
        properties.Delete(1, true)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一个节中幻灯片的数量。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    alert(properties.SlidesCount(1))
}
```

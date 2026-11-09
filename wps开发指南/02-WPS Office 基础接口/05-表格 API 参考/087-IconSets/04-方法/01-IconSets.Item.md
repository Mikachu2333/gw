# IconSets.Item

从 **IconSets** 集合中返回单个 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **IconSets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | **IconSet** 对象的索引号。 |

## 返回值

Object

## 说明


_Index_ 参数的值不能大于可用的图标集数目。要查找可用于工作簿的图标集的数目，请使用 **[Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSets/member/Count)** 属性。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个图标集中图标的数目。*/
function test() {
    alert(ActiveWorkbook.IconSets.Item(1).Count)
}
```


```JavaScript
/*本示例显示第一张工作簿上第二个图标集的名称是否为三色旗。*/
function test() {
    let iconSet = Workbooks.Item(1).IconSets.Item(2)
    alert(iconSet.ID == xl3Flags)
}
```

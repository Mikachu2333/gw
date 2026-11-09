# CaptionLabels.Item

返回集合中的单个 **CaptionLabel** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **CaptionLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称 **String** 类型值。 |

## 返回值

CaptionLabel

## 示例


```JavaScript
/*本示例显示第一个题注标签的名称。*/
function test() {
    alert(Application.CaptionLabels.Item(1).Name)
}
```


```JavaScript
/*本示例设置题注标签“example”的编号样式。*/
function test() {
    Application.CaptionLabels.Item("example").NumberStyle = wdCaptionNumberStyleLowercaseRoman
}
```

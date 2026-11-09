# OMaths.Item

返回 **OMath** 对象，该对象表示集合中的指定项。



## 语法

express.**Item(Index)**

express   一个代表 **OMaths** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 指定对象在集合中的序号位置。 |

## 返回值

OMath

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式中包含的函数的数量。*/
function test() {
    alert(ActiveDocument.OMaths.Item(1).Functions.Count)
}
```


```JavaScript
/*本示例判断如果第一个文档上的公式是在单独的行上显示，则通知用户。*/
function test() {
    let oMaths = Documents.Item(1).OMaths
    for (let i = 1; i <= oMaths.Count; i++) {
        if (oMaths.Item(i).Type == wdOMathDisplay) {
            alert(`第${i}个公式是在单独的行上显示`)
        }
    }
}
```

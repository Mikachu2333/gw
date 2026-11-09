# SmartArtColors.Item

检索位于指定索引处或具有指定的唯一 Id 的 **[SmartArtColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SmartArtColors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定一个代表索引的整数或一个代表 SmartArt 颜色的 Id 的字符串。 |

## 返回值

SmartArtColor

## 示例


```JavaScript
/*本示例运行于各组件，显示与第一个 SmartArt 颜色样式关联的主类别名称。*/
function test() {
    alert(Application.SmartArtColors.Item(1).Category)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 图表的颜色样式的字符串名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtColors.Count; i++) {
        str += Application.SmartArtColors.Item(i).Name + "\n"
    }
    alert(str)
}
```

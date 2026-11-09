# SmartArtLayouts.Item

检索位于指定索引处或具有指定的唯一 Id 的 **[SmartArtLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayout/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SmartArtLayouts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定一个代表索引的整数或一个代表 **SmartArtLayout** 对象的 ID 的字符串。 |

## 返回值

SmartArtLayout

## 示例


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 布局关联的主类别名称。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    let str = ""
    for (let i = 1; i <= smartArtLayouts.Count; i++) {
        str += smartArtLayouts.Item(i).Category + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例运行于各组件，显示第一个 SmartArt 布局的名称和唯一 Id。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    alert(`SmartArt 布局的名称：${smartArtLayouts.Item(1).Name}\nSmartArt 布局的唯一 Id：${smartArtLayouts.Item(1).Id}`)
}
```

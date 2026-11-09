# SmartArtQuickStyles.Item

在指定的索引处或通过指定的唯一 ID 来检索 **[SmartArtQuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyle/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SmartArtQuickStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定一个代表索引的整数或一个代表 **SmartArtQuickStyle** 对象 ID 的字符串。 |

## 返回值

SmartArtQuickStyle

## 示例


```JavaScript
/*本示例运行于各组件，显示第一个 SmartArt 快速样式的名称和唯一 ID。*/
function test() {
    let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(1)
    alert(`SmartArt 快速样式的名称：${smartArtQuickStyle.Name}\nSmartArt 快速样式的唯一 ID：${smartArtQuickStyle.Id}`)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 快速样式的名称和说明。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtQuickStyles.Count; i++) {
        let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(i)
        str += `${smartArtQuickStyle.Name}\t${smartArtQuickStyle.Description}\n`
    }
    alert(str)
}
```

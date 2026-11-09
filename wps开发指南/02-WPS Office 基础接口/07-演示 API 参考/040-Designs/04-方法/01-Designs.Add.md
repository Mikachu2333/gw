# Designs.Add

返回一个代表新幻灯片设计的 **[Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/obj)** 对象。



## 语法

express.**Add(designName, Index)**

express   一个代表 **Designs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| designName | 必选 | string | 设计的名称。 |
| Index | 可选 | number（int 精度） | 设计在 **Designs** 集合中的索引号。其默认值为 -1，表示如果省略 Index 参数，则新的幻灯片设计将添加到现有幻灯片设计的末尾。 |

## 返回值

Design

## 示例


```JavaScript
/*本示例在设计集合的第一位添加一个名为“testDesign”幻灯片设计模板。*/
function test() {
    ActivePresentation.Designs.Add("testDesign", 1)
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿存在名为“Design”的设计模板，则通知用户，否则添加该设计模板。*/
function test() {
    let designs = Presentations.Item(1).Designs
    let found = false
    for (let i = 1; i <= designs.Count; i++) {
        if (designs.Item(i).Name.toLowerCase().endsWith("design")) {
            alert("已存在该设计模板。")
            found = true
            break
        }
    }
    if (!found) {
        designs.Add("Design", 1)
    }
}
```

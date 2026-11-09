# CustomXMLParts.Item

获取 **CustomXMLParts** 集合中的一个 **CustomXMLPart** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CustomXMLParts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的 **CustomXMLPart** 对象的名称或索引号。 |

## 返回值

CustomXMLPart

## 示例


```JavaScript
/*本示例运行于文字组件，显示第一个文档上所有 CustomXMLPart 对象的 GUID。*/
function test() {
    let customXMLParts = Documents.Item(1).CustomXMLParts
    let str = ""
    for (let i = 1; i <= customXMLParts.Count; i++) {
        str += customXMLParts.Item(i).Id + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    customXMLPart.Delete()
}
```

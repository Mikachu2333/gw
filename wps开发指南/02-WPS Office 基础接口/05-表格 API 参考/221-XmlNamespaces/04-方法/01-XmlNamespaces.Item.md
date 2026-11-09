# XmlNamespaces.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **XmlNamespaces** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

XmlNamespace

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XML命名空间的前缀。*/
function test() {
    let xmlNamespace = Application.ActiveWorkbook.XmlNamespaces.Item(1)
    alert(xmlNamespace.Prefix)
}
```


```JavaScript
/*本示例显示第一张工作簿上所有XML命名空间的统一资源标识符。*/
function test() {
    let xmlNamespaces = Workbooks.Item(1).XmlNamespaces
    for (let i = 1; i <= xmlNamespaces.Count; i++) {
        alert(xmlNamespaces.Item(i).Uri)
    }
}
```

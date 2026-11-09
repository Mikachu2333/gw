# XMLNamespaces.Item

返回集合中的单个 **XMLNamespace** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **XMLNamespaces** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

XMLNamespace

## 示例


```JavaScript
/*本示例显示第一个架构在架构库的物理位置。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).Location())
}
```


```JavaScript
/*本示例显示文档所附加的所有架构的展示名称。*/
function test() {
    for (let i = 1; i <= Application.XMLNamespaces.Count; i++) {
        alert(`第${i}个架构的展示名称：${Application.XMLNamespaces.Item(i).Alias()}`)
    }
}
```

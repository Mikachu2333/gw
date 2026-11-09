# AutoTextEntries.Item

返回集合中的单个 **AutoTextEntry** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **AutoTextEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

AutoTextEntry

## 示例


```JavaScript
/*本示例显示 Normal 模板中第一个“自动图文集”条目的名称。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Item(1).Name)
}
```


```JavaScript
/*本示例设置 Normal 模板中第二个“自动图文集”条目的值。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item(2).Value = "Hello World"
}
```

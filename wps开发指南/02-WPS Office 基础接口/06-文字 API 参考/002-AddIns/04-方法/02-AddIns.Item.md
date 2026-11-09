# AddIns.Item

返回集合中的单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个加载项。Index 可以是代表加载项在集合中的排序位置的 **Long** 类型值，或者是代表单个加载项名称的 **String** 类型值。 |

## 返回值

AddIn

## 示例


```JavaScript
/*本示例显示第一个加载项的名称。*/
function test() {
    alert(Application.AddIns.Item(1).Name)
}
```


```JavaScript
/*本示例显示第一个加载项的路径。*/
function test() {
    if (Application.AddIns.Count >= 1) {
        alert(Application.AddIns.Item(1).Path)
    }
}
```

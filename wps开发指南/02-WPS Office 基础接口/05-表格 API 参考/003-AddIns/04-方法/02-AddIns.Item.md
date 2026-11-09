# AddIns.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

AddIn

## 示例


```JavaScript
/*此示例显示“ANALYS32”加载宏的状态。*/
function test() {
    let addIn = ThisWorkbook.Application.AddIns.Item("ANALYS32")
    if (addIn.Installed) {
        alert("ANALYS32 add-in is installed")
    } else {
        alert("ANALYS32 add-in is not installed")
    }
}
```


```JavaScript
/*本示例判断第一个加载宏是否处于打开状态，并通知用户。*/
function test() {
    if (Application.AddIns.Item(1).IsOpen) {
        alert("加载项当前处于打开状态")
    } else {
        alert("加载项当前处于关闭状态")
    }
}
```

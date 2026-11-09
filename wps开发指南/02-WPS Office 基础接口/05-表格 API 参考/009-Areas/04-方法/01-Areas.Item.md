# Areas.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Areas** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

Range

## 示例


```JavaScript
/*此示例检查当前选定区域是否为多重选定区域，如果是，则清除其中的第一个子区域的内容*/
function test() {
    if (Application.Selection.Areas.Count !== 1) {
        Application.Selection.Areas.Item(1).Clear()
    }
}
```


```JavaScript
/*此示例显示当前选定区域的第二个子区域的单元格数量。*/
function test() {
    alert(Application.Selection.Areas.Item(2).Count)
}
```

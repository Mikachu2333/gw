# RecentFiles.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **RecentFiles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

RecentFile

## 示例


```JavaScript
/*本示例打开最近使用的文件列表中的第二个文件。*/
function test() {
    Application.RecentFiles.Item(2).Open()
}
```


```JavaScript
/*本示例显示最近使用的文件列表中的第一个文件的完整路径。*/
function test() {
    let recentFile = Application.RecentFiles.Item(1)
    alert(recentFile.Path)
}
```

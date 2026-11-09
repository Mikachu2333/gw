# RecentFiles.Add

向最近使用的文件列表中添加文件。



## 语法

express.**Add(Name)**

express   一个代表 **RecentFiles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 文件名。 |

## 返回值

包含在集合中的一个 RecentFile 对象。

## 示例


```JavaScript
/*此示例将文件 example.xlsx 添加到最近使用的文件列表中。*/
function test() {
    Application.RecentFiles.Add("example.xlsx")
}
```


```JavaScript
/*此示例将文件 example.xlsx 添加到最近使用的文件列表中，并显示最近使用的文件数量。*/
function test() {
    Application.RecentFiles.Add("example.xlsx")
    alert(Application.RecentFiles.Count)
}
```

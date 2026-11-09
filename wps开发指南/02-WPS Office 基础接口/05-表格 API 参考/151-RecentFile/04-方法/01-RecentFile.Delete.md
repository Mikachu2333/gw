# RecentFile.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **RecentFile** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除最近使用的文件列表中的第一个文件。*/
function test() {
    Application.RecentFiles.Item(1).Delete()
}
```


```JavaScript
/*本示例判断如果最近使用的文件的数量大于0，则删除最近使用过的第一个文件。*/
function test() {
    if (Application.RecentFiles.Count > 0) {
        Application.RecentFiles.Item(1).Delete()
    }
}
```

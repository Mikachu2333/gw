# RecentFile.Delete

删除近期文件列表上的指定文件。



## 语法

express.**Delete()**

express   一个代表 **RecentFile** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除最近使用的第四个文件，然后显示最近使用的文件的数量。*/
function test() {
    Application.RecentFiles.Item(4).Delete()
    alert(Application.RecentFiles.Count)
}
```


```JavaScript
/*本示例判断如果最近使用的文件的数量大于1，则删除最近使用的第一个文件。*/
function test() {
    if (Application.RecentFiles.Count > 1) {
        Application.RecentFiles.Item(1).Delete()
    }
}
```

# Watches.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Watches** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例如果 Watches 集合中 Watche 对象的数量大于1，则从“监视窗口”中删除所有的单元格。*/
function test() {
    if (Application.Watches.Count > 1) {
        Application.Watches.Delete()
    }
}
```


```JavaScript
/*本示例从“监视窗口”中删除所有的单元格。*/
function test() {
    Application.Watches.Delete()
}
```

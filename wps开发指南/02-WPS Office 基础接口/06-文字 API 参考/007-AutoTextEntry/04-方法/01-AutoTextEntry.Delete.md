# AutoTextEntry.Delete

删除指定的对象。



## 语法

express.**Delete()**

express   一个代表 **AutoTextEntry** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除 Normal 模板中第一个“自动图文集”条目。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item(1).Delete()
}
```


```JavaScript
/*本示例判断如果 Normal 模板中“自动图文集”条目大于 2，则删除第二个“自动图文集”条目。*/
function test() {
    if (Application.NormalTemplate.AutoTextEntries.Count > 2) {
        Application.NormalTemplate.AutoTextEntries.Item(2).Delete()
    }
}
```

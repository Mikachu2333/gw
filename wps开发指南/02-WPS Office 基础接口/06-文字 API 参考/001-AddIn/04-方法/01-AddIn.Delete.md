# AddIn.Delete

删除指定的加载项。



## 语法

express.**Delete()**

express   一个代表 **AddIn** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个加载项。*/
function test() {
    Application.AddIns.Item(1).Delete()
}
```


```JavaScript
/*本示例判断如果第一个加载项是模板，则删除该加载项。*/
function test() {
    let addIn = Application.AddIns.Item(1)
    if (!addIn.Compiled) {
        addIn.Delete()
    }
}
```

# Frames.Delete

删除指定的 Frames 集合。



## 语法

express.**Delete()**

express   一个代表 **Frames** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的所有框架。*/
function test() {
    ActiveDocument.Frames.Delete()
}
```


```JavaScript
/*本示例删除选定内容的所有框架。*/
function test() {
    Selection.Frames.Delete()
}
```

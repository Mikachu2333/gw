# Document.Save

保存当前文档。



## 语法

express.**Save()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


如果文档以前未保存过，则 **“另存为”** 对话框将提示用户键入文件名。



## 示例


```JavaScript
/*本示例判断如果活动文档在上次保存后进行了更改，则保存活动文档。*/
function test() {
    if (!ActiveDocument.Saved) {
        ActiveDocument.Save()
    }
}
```


```JavaScript
/*本示例保存第一个文档。*/
function test() {
    Documents.Item(1).Save()
}
```

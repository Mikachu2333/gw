# Template.Save

保存指定的模板。



## 语法

express.**Save()**

express   一个代表 **Template** 对象的变量。

## 返回值

void

## 说明


如果之前未保存过此模板，则 **“另存为”** 对话框将提示用户输入文件名。



## 示例


```JavaScript
/*本示例保存第一个模板。*/
function test() {
    Application.Templates.Item(1).Save()
}
```


```JavaScript
/*本示例保存附加到活动文档的模板。*/
function test() {
    ActiveDocument.AttachedTemplate.Save()
}
```

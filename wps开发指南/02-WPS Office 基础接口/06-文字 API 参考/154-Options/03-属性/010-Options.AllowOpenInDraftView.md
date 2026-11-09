# Options.AllowOpenInDraftView

返回或设置 **Boolean** 值，该值表示是否允许用户在草稿视图中打开文档。可读/写。



## 语法

express.**AllowOpenInDraftView**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


此属性对应于 **“WPS 选项”** 对话框中的 **“允许在草稿视图中打开文档”** 复选框。



## 示例


```JavaScript
/*本示例允许用户在草稿视图中打开文档。*/
function test() {
    Options.AllowOpenInDraftView = true
}
```


```JavaScript
/*本示例判断是否允许用户在草稿视图中打开文档。*/
function test() {
    if (Options.AllowOpenInDraftView) {
        alert("允许用户在草稿视图中打开文档。")
    } else {
        alert("不允许用户在草稿视图中打开文档。")
    }
}
```

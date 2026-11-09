# Application.ShowStylePreviews

返回或设置 **Boolean** 值，该值表示 WPS 是否在样式任务窗格显示样式的格式预览。可读/写。



## 语法

express.**ShowStylePreviews**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


此属性对应于样式任务窗格中 **“显示预览”** 复选框。



## 示例


```JavaScript
/*本示例设置 WPS 在样式任务窗格中隐藏样式的格式预览。*/
function test() {
    Application.ShowStylePreviews = false
}
```


```JavaScript
/*本示例判断如果 WPS 的样式任务窗格中“显示预览”复选框被选中，则通知用户。*/
function test() {
    if (Application.ShowStylePreviews) {
        alert("样式任务窗格中“显示预览”复选框已被选中")
    }
}
```

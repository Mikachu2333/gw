# Master.Delete

删除指定的 **Master** 对象。



## 语法

express.**Delete()**

express   一个代表 **Master** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的幻灯片母版。*/
function test() {
    ActivePresentation.SlideMaster.Delete()
}
```


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的幻灯片母版。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Master.Delete()
}
```

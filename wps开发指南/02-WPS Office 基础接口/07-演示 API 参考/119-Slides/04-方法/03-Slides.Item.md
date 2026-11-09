# Slides.Item

从指定的 **Slides** 集合中返回单个 **Slide** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Slides** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的集合中单个 **Slide** 对象的名称或索引号。 |

## 返回值

Slide

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片复制到剪贴板。*/
function test() {
    ActivePresentation.Slides.Item(1).Copy()
}
```


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片。*/
function test() {
    ActivePresentation.Slides.Item(1).Delete()
}
```

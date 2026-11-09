# Presentations.Item

从指定 **Presentations** 集合中返回单个 **Presentation** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Presentations** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个 **Presentation** 对象的名称或索引号。 |

## 返回值

Presentation

## 示例


```JavaScript
/*本示例中，如果设计模板“programme.potx”尚未应用于演示文稿“Pres1.pptx”，则将该模板应用于该演示文稿。*/
function test() {
    let presentation = Application.Presentations.Item("Pres1.pptx")
    if (presentation.TemplateName != "programme") {
        presentation.ApplyTemplate("D:\\programme.potx")
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片母版的名称。*/
function test() {
    alert(Presentations.Item(1).SlideMaster.Name)
}
```

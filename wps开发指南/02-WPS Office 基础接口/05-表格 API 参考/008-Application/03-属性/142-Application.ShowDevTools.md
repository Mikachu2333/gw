# Application.ShowDevTools

返回或设置一个 **Boolean** 值，该值表示是否在功能区中显示 **“开发工具”** 选项卡。可读/写 **Boolean** 类型。



## 语法

express.**ShowDevTools**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示ET是否在功能区展示“开发工具”选项卡。*/
function test() {
    alert(Application.ShowDevTools)
}
```


```JavaScript
/*本示例将ET设置为在功能区展示“开发工具”选项卡。*/
function test() {
    Application.ShowDevTools = true
}
```

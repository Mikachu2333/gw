# Application.OrganizationName

返回注册组织名称。 **String** 类型，只读。



## 语法

express.**OrganizationName**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示注册组织名称。*/
function test() {
    alert("The registered organization is " + Application.OrganizationName)
}
```


```JavaScript
/*本示例显示注册组织名称是否为 “abc”。*/
function test() {
    alert(Application.OrganizationName == "abc")
}
```

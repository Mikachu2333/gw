# XMLNamespace.Alias

返回一个 **String** 类型的值，该值代表指定对象的显示名称。



## 语法

**注意：**为 **Alias** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
Alias(AllUsers?: Default<boolean, false>, prop?: string): void;
Alias(AllUsers?: Default<boolean, false>): string;
```

express.**Alias(AllUsers)**

express   一个代表 **XMLNamespace** 对象的变量。

## 返回值

string

## 示例


```JavaScript
/*本示例显示活动文档所附加的第一个架构的展示名称。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).Alias())
}
```


```JavaScript
/*本示例显示文档所附加的所有架构的展示名称。*/
function test() {
    for (let i = 1; i <= Application.XMLNamespaces.Count; i++) {
        alert(`第${i}个架构的展示名称：${Application.XMLNamespaces.Item(i).Alias()}`)
    }
}
```

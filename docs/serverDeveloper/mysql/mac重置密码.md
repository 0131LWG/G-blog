## Mac mysql 重置密码

- 一、关闭 mysql 服务器

```
  sudo /usr/local/mysql/support-files/mysql.server stop
```

报错

```
  ERROR! The server quit without updating PID file (/usr/local/mysql/data/MacBook-Pro-2.local.err).
  错误！服务器退出而不更新PID文件
```

思考：因为报错路径中有(/usr/local/mysql/data/MacBook-Pro-2.local.err)猜测这个应该是报错的日志文件，但在文件管理器中没有找到 data 目录
解决方案：

1. 进入到 mysql 安装目录的 bin 目录下，执行 mysqld --initialize-insecure --user=mysql 生成 data 文件夹
2. 想要查看 MacBook-Pro-2.local.err 报错日志，发现 permission denied: data，修改权限 sudo chmod 777 /usr/local/mysql/data
3. 发现 data 可以打开了，但里面的文件依旧不能打开查看，执行 sudo chmod -R 777 /usr/local/mysql/data 递归开启权限
4. 查看 MacBook-Pro-2.local.err 报错日志，发现 mac Unable to lock ./ibdata1 error: 35，和进程相关，输入$ ps aux | grep mysqld 检查 mysql 进程
5. 找到相应的进程号，停掉相应的进程，最后保留一条 mysql 的进程即可 kill 1234(此处 1234 为你的进程号)

- 二、进入 mysql 的 bin 目录

```
  cd /usr/local/mysql/bin
```

- 三、使用 root 账户（这一步要输入 mac 密码）

```
  sudo su
```

- 四、设置不需要密码登录

```
  ./mysqld_safe --skip-grant-tables &
```

- 五、置空密码

```
  update user set authentication_string='' where user='root';
```

- 六、刷新

```
  flush privileges;
```

- 七、修改密码

```
  ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码'; 提示语法错误，因为我的是mysql8.0需要执行下面的指令进行重置
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

完成重置

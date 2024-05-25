1. 安装最新的 mysql，我的版本是 8.4
2. 然后在项目中安装@nestjs/typeorm typeorm mysql2，注意不要安装为 mysql，否则你将会进入一个深坑，配置
   imports: [
   TypeOrmModule.forRoot({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'guan1024',
   database: 'cat',
   entities: [__dirname + '/**/*.entity{.ts,.js}'],
   synchronize: true,
   }),
   CatModule,
   ],

然后运行会发现报错 Client does not support authentication protocol requested by server; consider upgrading MySQL client，然后你一查会发现原因是 mysql8 之后加密的插件使用的是 caching_sha2_password，而 mysql 依赖是使用的 mysql_native_password，此时你可能会去修改 mysql 加密插件先执行 use mysql;后执行 update mysql.user set plugin='mysql_native_password' where user='root';然后查看 select `Host`,`User`,`plugin` from mysql.user;发现确实改了，然后刷新权限表 flush privileges，然后心满意足的 exit,重启服务，然后会傻了，发现还是报错 Plugin "mysql_native_password" is not loaded.并且你此时想要再次修改回来会发现，mysql 账号已经登录不了，解决方法就是使用一个管理员的终端执行停止 mysql 服务 net stop mysql。然后执行启动跳过授权表，免密登录的服务 mysqld --console --skip-grant-tables --shared-memory，新建一个管理员终端，然后执行 mysql -u root -p 回车，直接登录，然后重新执行 update mysql.user set plugin='caching_sha2_password' where user='root'把加密插件修改回来，然后刷新权限表 flush privileges;再 exit,此时关闭两个终端新开启一个管理员终端，再进行 net start mysql,重新登录即可

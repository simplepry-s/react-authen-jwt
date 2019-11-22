ES6 REST API Boilerplate
==================================

## Start Database MySql

Login in to mysql

> Altenative way to access mysql using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

```sh
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

```
## Start API
```sh
$ yarn install
$ yarn dev

```

## Test
```
GET http://localhost:8080/api/user
```

License
----

MIT




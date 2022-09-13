Добрый день!

Это тестовый проект для анализа.
Проект представляет собой простой вариант листов просмотров.
Фильм можно добавить в лист нажав на ярлыв в правом верхнем углу с фильмом.
Листы хранятся в "сторе" и не сохраняются если перезагрузить приложение.

Изначально приложение делалось под разрешение 1980х1080 (desktop) и 1440x840(laptop) или близкое.
Такжее старался учесть и другие размеры. Количество отображаемых фильмом изменяется в зависимости от размеров браузера.

# Замечания 1

Внешний API имеет ограничения на количество запросов в день. А именно 200 запросов/сутки.
Для разработки использовался простой сервер на node.js
К сожалению, сервер только отвечет фиксированными данными и ничего в себя не сохраняет.
Для тестирования функционала желательно также использовать тестовый сервер который идет вместет с проектом.
Поиск работать не будет, но запрос будет возвращать некоторе количество карточек с фильмами.
Также на сервере стоит задержка 1 сек на отправку ответа.

Запуcкать в отдельном терминале командой:

> node .\node_simple_server\start-test-server.js

# PS

Буду благодарен за советы по улучшению проекта и кода :)
